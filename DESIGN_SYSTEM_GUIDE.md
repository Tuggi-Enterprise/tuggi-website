# Tuggi Design System Guide

This guide explains how to use the centralized design system for the Tuggi application. The design system provides consistent visual patterns, colors, typography, and component styles across the entire application.

**🆕 NEW: The design system is now fully synchronized with Tailwind CSS for seamless integration!**

## Table of Contents

1. [Overview](#overview)
2. [Tailwind Integration](#tailwind-integration)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing](#spacing)
6. [Component Patterns](#component-patterns)
7. [Layout Patterns](#layout-patterns)
8. [Utility Functions](#utility-functions)
9. [New Integration Utilities](#new-integration-utilities)
10. [Best Practices](#best-practices)
11. [Migration Guide](#migration-guide)

## Overview

The design system is centralized in `src/utils/designSystem.ts` and provides:

- **Design Tokens**: Colors, typography, spacing, shadows, etc.
- **Component Patterns**: Predefined styles for buttons, cards, forms, etc.
- **Utility Functions**: Helper functions to generate consistent class names
- **Layout Patterns**: Common layout configurations
- **🆕 Tailwind Sync**: All tokens are synchronized with Tailwind CSS configuration

## Tailwind Integration

### What's Synchronized

The design system is now fully synchronized with `tailwind.config.js`:

✅ **Colors**: All Tuggi brand colors available as `tuggi-primary`, `tuggi-secondary`, etc.  
✅ **Typography**: Font sizes, weights, and line heights  
✅ **Spacing**: Complete spacing scale from design system  
✅ **Shadows**: Box shadow utilities  
✅ **Border Radius**: Consistent border radius scale  
✅ **Transitions**: Duration and timing functions  
✅ **Z-Index**: Layering scale  
✅ **Gradients**: All design system gradients as background utilities  

### Using Tailwind Classes Directly

You can now use Tailwind classes that reference design system tokens:

```tsx
// Colors
<div className="bg-tuggi-primary text-white">
<div className="border-tuggi-secondary">
<div className="text-tuggi-success">

// Spacing (synced with design system)
<div className="p-6 m-4 space-y-8">

// Typography (synced with design system)
<h1 className="text-4xl font-bold">
<p className="text-lg leading-relaxed">

// Shadows and borders (synced)
<div className="shadow-lg rounded-2xl">

// Gradients
<div className="bg-gradient-ocean">
<div className="bg-gradient-aurora">
```

## Color System

### Brand Colors

```typescript
import { colors } from '../utils/designSystem';

// Primary brand colors
colors.primary.main    // #00A8E8 - Main blue
colors.primary.dark    // #0088BB - Darker blue for hover states
colors.primary.light   // #33B9ED - Lighter blue

// Secondary brand colors
colors.secondary.main  // #FF6F00 - Orange
colors.secondary.dark  // #E55A00 - Darker orange
colors.secondary.light // #FF8533 - Lighter orange
```

### Tailwind Color Classes

```tsx
// Use directly in Tailwind classes
<button className="bg-tuggi-primary hover:bg-tuggi-primary-dark">
<div className="text-tuggi-secondary border-tuggi-secondary">
<span className="bg-tuggi-success text-white">
```

### Semantic Colors

```typescript
// Success states
colors.success.main    // #10B981 - Green
colors.success.light   // #34D399
colors.success.dark    // #059669

// Warning states
colors.warning.main    // #F59E0B - Amber
colors.warning.light   // #FBBF24
colors.warning.dark    // #D97706

// Error states
colors.error.main      // #EF4444 - Red
colors.error.light     // #F87171
colors.error.dark      // #DC2626

// Info states
colors.info.main       // #3B82F6 - Blue
colors.info.light      // #60A5FA
colors.info.dark       // #2563EB
```

### Neutral Colors

```typescript
// Neutral grays (50-900 scale)
colors.neutral.50      // #F8FAFC - Lightest
colors.neutral.100     // #F1F5F9
colors.neutral.200     // #E2E8F0
colors.neutral.300     // #CBD5E1
colors.neutral.400     // #94A3B8
colors.neutral.500     // #64748B
colors.neutral.600     // #475569
colors.neutral.700     // #334155
colors.neutral.800     // #1E293B
colors.neutral.900     // #0F172A - Darkest
```

## Typography

### Font Family

```typescript
import { typography } from '../utils/designSystem';

typography.fontFamily.sans // ['Inter', 'system-ui', 'sans-serif']
```

### Font Sizes (Synced with Tailwind)

```typescript
typography.fontSize.xs     // 0.75rem (12px)
typography.fontSize.sm     // 0.875rem (14px)
typography.fontSize.base   // 1rem (16px)
typography.fontSize.lg     // 1.125rem (18px)
typography.fontSize.xl     // 1.25rem (20px)
typography.fontSize['2xl'] // 1.5rem (24px)
typography.fontSize['3xl'] // 1.875rem (30px)
typography.fontSize['4xl'] // 2.25rem (36px)
typography.fontSize['5xl'] // 3rem (48px)
typography.fontSize['6xl'] // 3.75rem (60px)
```

### Font Weights

```typescript
typography.fontWeight.normal   // 400
typography.fontWeight.medium   // 500
typography.fontWeight.semibold // 600
typography.fontWeight.bold     // 700
```

## Spacing (Synced with Tailwind)

The spacing system uses a consistent scale and is now fully synchronized with Tailwind:

```typescript
import { spacing } from '../utils/designSystem';

spacing[0]    // 0
spacing[1]    // 0.25rem (4px)
spacing[2]    // 0.5rem (8px)
spacing[3]    // 0.75rem (12px)
spacing[4]    // 1rem (16px)
spacing[5]    // 1.25rem (20px)
spacing[6]    // 1.5rem (24px)
spacing[8]    // 2rem (32px)
spacing[10]   // 2.5rem (40px)
spacing[12]   // 3rem (48px)
spacing[16]   // 4rem (64px)
spacing[20]   // 5rem (80px)
spacing[24]   // 6rem (96px)
// ... and many more values up to spacing[100]
```

### Using Spacing in Tailwind

```tsx
// These now use the design system spacing scale
<div className="p-6 m-4 space-y-8">
<div className="pt-12 pb-16">
<div className="mx-auto max-w-4xl">
```

## Component Patterns

### Buttons

The design system provides four button variants with three sizes each:

```typescript
import { getButtonClasses } from '../utils/designSystem';

// Primary button (default)
const primaryButtonClasses = getButtonClasses('primary', 'md');
// Result: "bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:ring-offset-2 px-6 py-3 text-sm rounded-lg"

// Secondary button
const secondaryButtonClasses = getButtonClasses('secondary', 'lg');
// Outline button
const outlineButtonClasses = getButtonClasses('outline', 'sm');
// Ghost button
const ghostButtonClasses = getButtonClasses('ghost', 'md');
```

**Available variants:**
- `primary` - Solid background with hover effects
- `secondary` - Outlined with fill on hover
- `outline` - Light outline with color change on hover
- `ghost` - Minimal styling with subtle hover effects

**Available sizes:**
- `sm` - Small (px-3 py-1.5 text-xs)
- `md` - Medium (px-6 py-3 text-sm) - Default
- `lg` - Large (px-8 py-4 text-base)

### Cards

```typescript
import { getCardClasses } from '../utils/designSystem';

// Card with hover effect (default)
const cardClasses = getCardClasses();
// Card without hover effect
const staticCardClasses = getCardClasses(false);
```

### Badges

```typescript
import { getBadgeClasses } from '../utils/designSystem';

// Success badge
const successBadgeClasses = getBadgeClasses('success', 'md');
// Error badge
const errorBadgeClasses = getBadgeClasses('error', 'sm');
```

### Loading Spinners

```typescript
import { getSpinnerClasses } from '../utils/designSystem';

// Primary spinner
const primarySpinnerClasses = getSpinnerClasses('primary', 'md');
// Error spinner
const errorSpinnerClasses = getSpinnerClasses('error', 'lg');
```

## Layout Patterns

### Containers

```typescript
import { layout } from '../utils/designSystem';

layout.container.base   // "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
layout.container.narrow // "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
layout.container.wide   // "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Sections

```typescript
layout.section.base    // "py-12 lg:py-16 xl:py-20"
layout.section.compact // "py-4 lg:py-6"
layout.section.hero    // "py-6 lg:py-12 xl:py-20"
```

### Grids

```typescript
layout.grid['1'] // "grid grid-cols-1"
layout.grid['2'] // "grid grid-cols-1 md:grid-cols-2"
layout.grid['3'] // "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
layout.grid['4'] // "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

### Flex Patterns

```typescript
layout.flex.center  // "flex items-center justify-center"
layout.flex.between // "flex items-center justify-between"
layout.flex.start   // "flex items-center justify-start"
layout.flex.end     // "flex items-center justify-end"
```

## Utility Functions

### Standard Utilities

```typescript
import { 
  getButtonClasses, 
  getCardClasses, 
  getBadgeClasses,
  getSpinnerClasses,
  layout,
  gradients 
} from '../utils/designSystem';
```

## New Integration Utilities

### Transition Classes

```typescript
import { getTransitionClasses } from '../utils/designSystem';

// Generate transition classes
const fastTransition = getTransitionClasses('fast', 'ease-out');
// Result: "transition-all duration-150 ease-out"

const normalTransition = getTransitionClasses('normal', 'ease-in-out');
// Result: "transition-all duration-200 ease-in-out"
```

### Color Utility Classes

```typescript
import { getTuggiColorClass } from '../utils/designSystem';

// Generate Tailwind color classes
const primaryColor = getTuggiColorClass('primary');        // "tuggi-primary"
const primaryDark = getTuggiColorClass('primary', 'dark'); // "tuggi-primary-dark"
const successLight = getTuggiColorClass('success', 'light'); // "tuggi-success-light"
```

### Gradient Classes

```typescript
import { getGradientClass } from '../utils/designSystem';

// Generate gradient background classes
const oceanGradient = getGradientClass('ocean');   // "bg-gradient-ocean"
const auroraGradient = getGradientClass('aurora'); // "bg-gradient-aurora"
```

### Spacing Classes

```typescript
import { getSpacingClass } from '../utils/designSystem';

// Convert design system spacing to Tailwind classes
const spacing6 = getSpacingClass(6);  // "6"
const spacing12 = getSpacingClass(12); // "12"

// Use in className
<div className={`p-${getSpacingClass(6)} m-${getSpacingClass(4)}`}>
```

## Gradients (Synced with Tailwind)

```typescript
import { gradients } from '../utils/designSystem';

gradients.ocean   // Ocean blue gradient
gradients.sunset  // Orange to red gradient
gradients.forest  // Green gradient
gradients.cosmic  // Purple to pink gradient
gradients.aurora  // Blue to green to purple
gradients.subtle  // Very subtle blue to orange
gradients.hero    // Hero section background
```

### Using as Tailwind Classes

```tsx
<div className="bg-gradient-ocean">
<div className="bg-gradient-aurora">
<div className="bg-gradient-subtle">
```

### Using as Inline Styles

```tsx
<div style={{ background: gradients.ocean }}>
<div style={{ background: gradients.cosmic }}>
```

## Complete Example

```tsx
import React from 'react';
import { 
  getButtonClasses, 
  getCardClasses, 
  getBadgeClasses,
  getTransitionClasses,
  getTuggiColorClass,
  getGradientClass,
  layout,
  gradients 
} from '../utils/designSystem';

const ExampleComponent = () => {
  return (
    <section className={layout.section.base}>
      <div className={layout.container.base}>
        <div className={layout.grid['2']}>
          {/* Design System Approach */}
          <div className={getCardClasses()}>
            <h2 className="text-2xl font-bold text-tuggi-neutral-900 mb-4">
              Design System Approach
            </h2>
            <p className="text-tuggi-neutral-600 mb-4">
              Using design system utilities.
            </p>
            
            <div className={getBadgeClasses('success', 'sm')}>
              <span>✓</span>
              <span>Active</span>
            </div>
            
            <button className={getButtonClasses('primary', 'md')}>
              Learn More
            </button>
          </div>
          
          {/* Tailwind + Design System Hybrid */}
          <div className="bg-white rounded-2xl shadow-lg border border-tuggi-neutral-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-tuggi-neutral-900 mb-4">
              Tailwind + Design System
            </h3>
            <p className="text-tuggi-neutral-600 mb-4">
              Using Tailwind classes with design system colors.
            </p>
            
            <div className="inline-flex items-center px-3 py-1.5 bg-tuggi-success/10 text-tuggi-success border border-tuggi-success/20 rounded-full text-sm font-medium">
              <span>✓</span>
              <span className="ml-2">Synced</span>
            </div>
            
            <button className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleComponent;
```

## Best Practices

### 1. Choose Your Approach

✅ **Design System Functions** (Recommended for complex components):
```tsx
import { getButtonClasses, getCardClasses } from '../utils/designSystem';

<button className={getButtonClasses('primary', 'lg')}>
<div className={getCardClasses()}>
```

✅ **Tailwind + Design System Tokens** (Great for simple styling):
```tsx
<button className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg">
<div className="text-tuggi-neutral-700 border-tuggi-neutral-200">
```

### 2. Consistent Color Usage

✅ **Good:**
```tsx
// Use Tuggi color tokens
<div className="bg-tuggi-primary text-white">
<div className="border-tuggi-secondary">
```

❌ **Avoid:**
```tsx
// Don't use raw color values
<div className="bg-blue-500 text-white">
<div style={{ borderColor: '#FF6F00' }}>
```

### 3. Spacing Consistency

✅ **Good:**
```tsx
// Use design system spacing scale (now synced with Tailwind)
<div className="p-6 m-4 space-y-8">
<div className={layout.section.base}>
```

❌ **Avoid:**
```tsx
// Don't use arbitrary spacing
<div className="p-[24px] m-[16px]">
```

### 4. Leverage New Utilities

✅ **Good:**
```tsx
import { getTransitionClasses, getTuggiColorClass } from '../utils/designSystem';

<div className={`${getTransitionClasses('fast', 'ease-out')} bg-${getTuggiColorClass('primary')}`}>
```

## Migration Guide

### From Old Approach to Synced System

**Before:**
```tsx
const OldComponent = () => {
  return (
    <div className="py-12 lg:py-16 xl:py-20 bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Click me
        </button>
      </div>
    </div>
  );
};
```

**After (Option 1 - Design System Functions):**
```tsx
import { getButtonClasses, layout } from '../utils/designSystem';

const NewComponent = () => {
  return (
    <div className={`${layout.section.base} bg-tuggi-primary`}>
      <div className={layout.container.base}>
        <button className={getButtonClasses('primary', 'md')}>
          Click me
        </button>
      </div>
    </div>
  );
};
```

**After (Option 2 - Tailwind + Design Tokens):**
```tsx
const NewComponent = () => {
  return (
    <div className="py-12 lg:py-16 xl:py-20 bg-tuggi-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1">
          Click me
        </button>
      </div>
    </div>
  );
};
```

### Benefits of Synced System

1. **Flexibility**: Choose between design system functions or direct Tailwind usage
2. **Consistency**: All approaches use the same design tokens
3. **Performance**: Optimized CSS output through Tailwind's purging
4. **Developer Experience**: Better autocomplete and IntelliSense
5. **Maintainability**: Single source of truth for all design decisions
6. **Type Safety**: Full TypeScript support for both approaches

## Contributing to the Design System

When adding new patterns:

1. **Add to design system first** (`src/utils/designSystem.ts`)
2. **Sync with Tailwind config** (`tailwind.config.js`)
3. **Update this documentation** with examples
4. **Test both approaches** (design system functions + Tailwind classes)
5. **Ensure TypeScript types** are properly exported

## TypeScript Support

The design system provides full TypeScript support for both approaches:

```typescript
import { getButtonClasses, getTuggiColorClass } from '../utils/designSystem';

// TypeScript will provide autocomplete and validation
const buttonClasses = getButtonClasses('primary', 'md'); // ✅ Valid
const colorClass = getTuggiColorClass('primary', 'dark'); // ✅ Valid

const invalidClasses = getButtonClasses('invalid', 'huge'); // ❌ Type error
const invalidColor = getTuggiColorClass('purple', 'main'); // ❌ Type error
```

This ensures that only valid design tokens can be used throughout the application. 