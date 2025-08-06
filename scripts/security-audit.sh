#!/bin/bash

# Security Audit Script for Tuggi Drive B2B
# This script performs various security checks on the application

echo "🔒 Starting Security Audit for Tuggi Drive B2B"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if npm is available
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed or not in PATH"
    exit 1
fi

# 1. Check for vulnerable dependencies
print_status "Checking for vulnerable dependencies..."
npm audit --audit-level=moderate
if [ $? -eq 0 ]; then
    print_success "No moderate or high vulnerabilities found in dependencies"
else
    print_warning "Vulnerabilities found in dependencies. Run 'npm audit fix' to resolve."
fi

echo ""

# 2. Check for outdated dependencies
print_status "Checking for outdated dependencies..."
npm outdated
if [ $? -eq 0 ]; then
    print_success "All dependencies are up to date"
else
    print_warning "Some dependencies are outdated. Consider updating them."
fi

echo ""

# 3. Check for security headers in vercel.json
print_status "Checking security headers configuration..."
if grep -q "X-Frame-Options" vercel.json; then
    print_success "X-Frame-Options header configured"
else
    print_error "X-Frame-Options header missing"
fi

if grep -q "X-Content-Type-Options" vercel.json; then
    print_success "X-Content-Type-Options header configured"
else
    print_error "X-Content-Type-Options header missing"
fi

if grep -q "Strict-Transport-Security" vercel.json; then
    print_success "HSTS header configured"
else
    print_error "HSTS header missing"
fi

echo ""

# 4. Check for CSP in index.html
print_status "Checking Content Security Policy..."
if grep -q "Content-Security-Policy" index.html; then
    print_success "Content Security Policy found"
    if grep -q "unsafe-eval" index.html; then
        print_warning "CSP allows 'unsafe-eval' - consider removing if possible"
    fi
    if grep -q "unsafe-inline" index.html; then
        print_warning "CSP allows 'unsafe-inline' - consider using nonces instead"
    fi
else
    print_error "Content Security Policy not found"
fi

echo ""

# 5. Check for sensitive files
print_status "Checking for sensitive files..."
sensitive_files=(".env" ".env.local" ".env.production" "private.key" "*.pem" "config.json")
for file in "${sensitive_files[@]}"; do
    if find . -name "$file" -not -path "./node_modules/*" | grep -q .; then
        print_warning "Sensitive file found: $file"
    fi
done

# Check if .env files are in .gitignore
if [ -f ".gitignore" ]; then
    if grep -q ".env" .gitignore; then
        print_success ".env files are ignored by git"
    else
        print_warning ".env files should be added to .gitignore"
    fi
fi

echo ""

# 6. Check for hardcoded secrets
print_status "Scanning for potential hardcoded secrets..."
secret_patterns=(
    "password\s*=\s*['\"][^'\"]+['\"]" 
    "api[_-]?key\s*=\s*['\"][^'\"]+['\"]" 
    "secret\s*=\s*['\"][^'\"]+['\"]" 
    "token\s*=\s*['\"][^'\"]+['\"]"
)

for pattern in "${secret_patterns[@]}"; do
    if grep -r -i -E "$pattern" src/ --exclude-dir=node_modules 2>/dev/null; then
        print_warning "Potential hardcoded secret found (pattern: $pattern)"
    fi
done

print_success "Secret scan completed"

echo ""

# 7. Check TypeScript configuration for security
print_status "Checking TypeScript configuration..."
if [ -f "tsconfig.json" ]; then
    if grep -q '"strict".*true' tsconfig.json; then
        print_success "TypeScript strict mode enabled"
    else
        print_warning "Consider enabling TypeScript strict mode for better type safety"
    fi
fi

echo ""

# 8. Check for HTTPS enforcement
print_status "Checking HTTPS enforcement..."
if grep -q "Strict-Transport-Security" vercel.json; then
    print_success "HTTPS enforcement configured via HSTS"
else
    print_warning "Consider adding HSTS header for HTTPS enforcement"
fi

echo ""

# 9. Check build configuration
print_status "Checking build configuration..."
if [ -f "vite.config.ts" ]; then
    if grep -q "build.*sourcemap.*false" vite.config.ts; then
        print_success "Source maps disabled in production"
    else
        print_warning "Consider disabling source maps in production builds"
    fi
fi

echo ""

# 10. Generate security report
print_status "Generating security report..."
report_file="security-report-$(date +%Y%m%d-%H%M%S).txt"

{
    echo "Security Audit Report - $(date)"
    echo "====================================="
    echo ""
    echo "Dependencies Audit:"
    npm audit --audit-level=low 2>&1
    echo ""
    echo "Outdated Dependencies:"
    npm outdated 2>&1
    echo ""
    echo "Security Headers Check:"
    grep -n "headers" vercel.json 2>/dev/null || echo "No headers configuration found"
    echo ""
    echo "CSP Configuration:"
    grep -n "Content-Security-Policy" index.html 2>/dev/null || echo "No CSP found"
} > "$report_file"

print_success "Security report saved to: $report_file"

echo ""
echo "🔒 Security Audit Complete"
echo "==========================="
print_status "Review the findings above and the detailed report in $report_file"
print_status "Run 'npm audit fix' to automatically fix dependency vulnerabilities"
print_status "Consider implementing any missing security headers or configurations"

# Exit with appropriate code
if npm audit --audit-level=high --silent; then
    exit 0
else
    print_warning "High severity vulnerabilities found. Please address them."
    exit 1
fi