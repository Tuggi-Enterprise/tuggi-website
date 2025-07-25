# Tuggi Design System Guide

This guide explains how to use the centralized design system for the Tuggi application. The design system provides consistent visual patterns, colors, typography, and component styles across the entire application.

## Table of Contents

1. [Overview](#overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Component Patterns](#component-patterns)
6. [Layout Patterns](#layout-patterns)
7. [Utility Functions](#utility-functions)
8. [Best Practices](#best-practices)
9. [Migration Guide](#migration-guide)

## Overview

The design system is centralized in `src/utils/designSystem.ts` and provides:

- **Design Tokens**: Colors, typography, spacing, shadows, etc.
- **Component Patterns**: Predefined styles for buttons, cards, forms, etc.
- **Utility Functions**: Helper functions to generate consistent class names
- **Layout Patterns**: Common layout configurations

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

### Font Sizes

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

## Spacing

The spacing system uses a consistent scale:

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
// Result: "border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:ring-offset-2 px-8 py-4 text-base rounded-lg"

// Outline button
const outlineButtonClasses = getButtonClasses('outline', 'sm');
// Result: "border-2 border-neutral-300 hover:border-tuggi-primary text-neutral-700 hover:text-tuggi-primary font-semibold transition-all duration-200 bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs rounded-lg"

// Ghost button
const ghostButtonClasses = getButtonClasses('ghost', 'md');
// Result: "text-neutral-700 hover:text-tuggi-primary hover:bg-tuggi-primary/5 font-medium transition-all duration-200 px-4 py-2 text-sm"
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

### Usage Example

```tsx
import { getButtonClasses } from '../utils/designSystem';

const MyComponent = () => {
  return (
    <div>
      <button className={getButtonClasses('primary', 'lg')}>
        Download App
      </button>
      
      <button className={getButtonClasses('secondary', 'md')}>
        Learn More
      </button>
      
      <button className={getButtonClasses('outline', 'sm')}>
        Cancel
      </button>
    </div>
  );
};
```

### Cards

```typescript
import { getCardClasses } from '../utils/designSystem';

// Card with hover effect (default)
const cardClasses = getCardClasses();
// Result: "bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"

// Card without hover effect
const staticCardClasses = getCardClasses(false);
// Result: "bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300"
```

### Badges

```typescript
import { getBadgeClasses } from '../utils/designSystem';

// Success badge
const successBadgeClasses = getBadgeClasses('success', 'md');
// Result: "inline-flex items-center space-x-2 rounded-full border font-medium px-3 py-1.5 text-sm bg-tuggi-success/10 text-tuggi-success border-tuggi-success/20"

// Error badge
const errorBadgeClasses = getBadgeClasses('error', 'sm');
// Result: "inline-flex items-center space-x-2 rounded-full border font-medium px-2 py-1 text-xs bg-tuggi-error/10 text-tuggi-error border-tuggi-error/20"
```

**Available variants:**
- `success` - Green styling
- `warning` - Amber styling
- `error` - Red styling
- `info` - Blue styling

**Available sizes:**
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

### Loading Spinners

```typescript
import { getSpinnerClasses } from '../utils/designSystem';

// Primary spinner
const primarySpinnerClasses = getSpinnerClasses('primary', 'md');
// Result: "animate-spin rounded-full border-2 border-neutral-200 border-t-transparent w-8 h-8 border-tuggi-primary"

// Error spinner
const errorSpinnerClasses = getSpinnerClasses('error', 'lg');
// Result: "animate-spin rounded-full border-2 border-neutral-200 border-t-transparent w-12 h-12 border-tuggi-error"
```

**Available variants:**
- `primary` - Blue spinner
- `success` - Green spinner
- `warning` - Amber spinner
- `error` - Red spinner
- `info` - Blue spinner

**Available sizes:**
- `sm` - 16px (w-4 h-4)
- `md` - 32px (w-8 h-8) - Default
- `lg` - 48px (w-12 h-12)

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

## Gradients

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

## Utility Functions

### Complete Example

```tsx
import React from 'react';
import { 
  getButtonClasses, 
  getCardClasses, 
  getBadgeClasses,
  layout,
  gradients 
} from '../utils/designSystem';

const ExampleComponent = () => {
  return (
    <section className={layout.section.base}>
      <div className={layout.container.base}>
        <div className={layout.grid['2']}>
          {/* Card with hover effect */}
          <div className={getCardClasses()}>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Feature Title
            </h2>
            <p className="text-neutral-600 mb-4">
              Feature description goes here.
            </p>
            
            {/* Success badge */}
            <div className={getBadgeClasses('success', 'sm')}>
              <span>✓</span>
              <span>Active</span>
            </div>
            
            {/* Primary button */}
            <button className={getButtonClasses('primary', 'md')}>
              Learn More
            </button>
          </div>
          
          {/* Card with gradient background */}
          <div 
            className="rounded-2xl p-6"
            style={{ background: gradients.ocean }}
          >
            <h3 className="text-white text-xl font-bold mb-2">
              Gradient Card
            </h3>
            <p className="text-white/90">
              This card uses a gradient background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleComponent;
```

## Best Practices

### 1. Use Design System Functions

✅ **Good:**
```tsx
import { getButtonClasses } from '../utils/designSystem';

<button className={getButtonClasses('primary', 'lg')}>
  Download App
</button>
```

❌ **Avoid:**
```tsx
<button className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1">
  Download App
</button>
```

### 2. Use Layout Patterns

✅ **Good:**
```tsx
import { layout } from '../utils/designSystem';

<section className={layout.section.base}>
  <div className={layout.container.base}>
    <div className={layout.grid['3']}>
      {/* Content */}
    </div>
  </div>
</section>
```

❌ **Avoid:**
```tsx
<section className="py-12 lg:py-16 xl:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Content */}
    </div>
  </div>
</section>
```

### 3. Use Semantic Colors

✅ **Good:**
```tsx
import { colors } from '../utils/designSystem';

<div style={{ color: colors.success.main }}>
  Success message
</div>
```

❌ **Avoid:**
```tsx
<div style={{ color: '#10B981' }}>
  Success message
</div>
```

### 4. Consistent Spacing

✅ **Good:**
```tsx
import { spacing } from '../utils/designSystem';

<div style={{ padding: spacing[6] }}>
  Content with consistent spacing
</div>
```

❌ **Avoid:**
```tsx
<div style={{ padding: '24px' }}>
  Content with hardcoded spacing
</div>
```

## Migration Guide

### From Inline Styles to Design System

**Before:**
```tsx
const OldComponent = () => {
  return (
    <div className="py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1">
          Click me
        </button>
      </div>
    </div>
  );
};
```

**After:**
```tsx
import { getButtonClasses, layout } from '../utils/designSystem';

const NewComponent = () => {
  return (
    <div className={layout.section.base}>
      <div className={layout.container.base}>
        <button className={getButtonClasses('primary', 'md')}>
          Click me
        </button>
      </div>
    </div>
  );
};
```

### Benefits of Migration

1. **Consistency**: All components use the same design tokens
2. **Maintainability**: Changes to design tokens update everywhere
3. **Type Safety**: TypeScript ensures correct usage
4. **Performance**: Reduced CSS bundle size
5. **Developer Experience**: Better autocomplete and error checking

## Contributing to the Design System

When adding new patterns to the design system:

1. **Add to the appropriate section** in `designSystem.ts`
2. **Create utility functions** for complex patterns
3. **Update this documentation** with examples
4. **Test across different components** to ensure consistency
5. **Consider backward compatibility** when making changes

## TypeScript Support

The design system is fully typed with TypeScript:

```typescript
import { getButtonClasses } from '../utils/designSystem';

// TypeScript will provide autocomplete for variants and sizes
const buttonClasses = getButtonClasses('primary', 'md'); // ✅ Valid
const invalidClasses = getButtonClasses('invalid', 'huge'); // ❌ Type error
```

This ensures that only valid design tokens can be used throughout the application. 