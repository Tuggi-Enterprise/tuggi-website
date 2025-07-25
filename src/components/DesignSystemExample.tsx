import React from 'react';
import { 
  getButtonClasses, 
  getCardClasses, 
  getBadgeClasses,
  getSpinnerClasses,
  layout,
  gradients,
  colors,
  spacing
} from '../utils/designSystem';
import { ArrowRight, Download, Star, Users, MapPin } from 'lucide-react';

/**
 * Design System Example Component
 * 
 * This component demonstrates how to use the centralized design system
 * for consistent styling across the Tuggi application.
 */
const DesignSystemExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className={layout.section.hero}>
        <div className={layout.container.base}>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Design System Showcase
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Examples of how to use the centralized design system for consistent styling
            </p>
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Button Variants
          </h2>
          
          <div className={`${layout.grid['2']} gap-8`}>
            {/* Primary Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Primary Buttons</h3>
              <div className="space-y-3">
                <button className={getButtonClasses('primary', 'sm')}>
                  <Download className="w-4 h-4 mr-2" />
                  Small Primary
                </button>
                <button className={getButtonClasses('primary', 'md')}>
                  <Download className="w-4 h-4 mr-2" />
                  Medium Primary
                </button>
                <button className={getButtonClasses('primary', 'lg')}>
                  <Download className="w-5 h-5 mr-2" />
                  Large Primary
                </button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Secondary Buttons</h3>
              <div className="space-y-3">
                <button className={getButtonClasses('secondary', 'sm')}>
                  Small Secondary
                </button>
                <button className={getButtonClasses('secondary', 'md')}>
                  Medium Secondary
                </button>
                <button className={getButtonClasses('secondary', 'lg')}>
                  Large Secondary
                </button>
              </div>
            </div>
          </div>

          {/* Outline and Ghost Buttons */}
          <div className={`${layout.grid['2']} gap-8 mt-12`}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Outline Buttons</h3>
              <div className="space-y-3">
                <button className={getButtonClasses('outline', 'sm')}>
                  Small Outline
                </button>
                <button className={getButtonClasses('outline', 'md')}>
                  Medium Outline
                </button>
                <button className={getButtonClasses('outline', 'lg')}>
                  Large Outline
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Ghost Buttons</h3>
              <div className="space-y-3">
                <button className={getButtonClasses('ghost', 'sm')}>
                  Small Ghost
                </button>
                <button className={getButtonClasses('ghost', 'md')}>
                  Medium Ghost
                </button>
                <button className={getButtonClasses('ghost', 'lg')}>
                  Large Ghost
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Examples */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Card Patterns
          </h2>
          
          <div className={`${layout.grid['3']} gap-8`}>
            {/* Standard Card */}
            <div className={getCardClasses()}>
              <div className="w-12 h-12 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Standard Card
              </h3>
              <p className="text-neutral-600 mb-4">
                This card uses the standard card pattern with hover effects.
              </p>
              <div className={getBadgeClasses('success', 'sm')}>
                <span>✓</span>
                <span>Active</span>
              </div>
            </div>

            {/* Static Card */}
            <div className={getCardClasses(false)}>
              <div className="w-12 h-12 bg-gradient-to-br from-tuggi-secondary to-tuggi-secondary-dark rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Static Card
              </h3>
              <p className="text-neutral-600 mb-4">
                This card has no hover effects for static content.
              </p>
              <div className={getBadgeClasses('info', 'sm')}>
                <span>ℹ</span>
                <span>Info</span>
              </div>
            </div>

            {/* Gradient Card */}
            <div 
              className="rounded-2xl p-6 text-white"
              style={{ background: gradients.ocean }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Gradient Card
              </h3>
              <p className="text-white/90 mb-4">
                This card uses a gradient background from the design system.
              </p>
              <div className="inline-flex items-center space-x-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium">
                <span>📍</span>
                <span>Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Examples */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Badge Variants
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className={getBadgeClasses('success', 'sm')}>
              <span>✓</span>
              <span>Success Small</span>
            </div>
            <div className={getBadgeClasses('success', 'md')}>
              <span>✓</span>
              <span>Success Medium</span>
            </div>
            <div className={getBadgeClasses('success', 'lg')}>
              <span>✓</span>
              <span>Success Large</span>
            </div>
            
            <div className={getBadgeClasses('warning', 'md')}>
              <span>⚠</span>
              <span>Warning</span>
            </div>
            
            <div className={getBadgeClasses('error', 'md')}>
              <span>✕</span>
              <span>Error</span>
            </div>
            
            <div className={getBadgeClasses('info', 'md')}>
              <span>ℹ</span>
              <span>Info</span>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Spinner Examples */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Loading Spinners
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className={getSpinnerClasses('primary', 'sm')}></div>
              <p className="text-sm text-neutral-600 mt-2">Primary Small</p>
            </div>
            
            <div className="text-center">
              <div className={getSpinnerClasses('primary', 'md')}></div>
              <p className="text-sm text-neutral-600 mt-2">Primary Medium</p>
            </div>
            
            <div className="text-center">
              <div className={getSpinnerClasses('primary', 'lg')}></div>
              <p className="text-sm text-neutral-600 mt-2">Primary Large</p>
            </div>
            
            <div className="text-center">
              <div className={getSpinnerClasses('success', 'md')}></div>
              <p className="text-sm text-neutral-600 mt-2">Success</p>
            </div>
            
            <div className="text-center">
              <div className={getSpinnerClasses('warning', 'md')}></div>
              <p className="text-sm text-neutral-600 mt-2">Warning</p>
            </div>
            
            <div className="text-center">
              <div className={getSpinnerClasses('error', 'md')}></div>
              <p className="text-sm text-neutral-600 mt-2">Error</p>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Examples */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Layout Patterns
          </h2>
          
          {/* Container Examples */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Container Variants</h3>
              <div className="space-y-4">
                <div className={layout.container.base}>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-neutral-600">Base Container (max-w-7xl)</p>
                  </div>
                </div>
                
                <div className={layout.container.narrow}>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-neutral-600">Narrow Container (max-w-4xl)</p>
                  </div>
                </div>
                
                <div className={layout.container.wide}>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-neutral-600">Wide Container (max-w-6xl)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Examples */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Grid Patterns</h3>
              <div className="space-y-6">
                <div className={layout.grid['2']} className="gap-4">
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <p className="text-sm text-neutral-600">Grid 2 Columns</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <p className="text-sm text-neutral-600">Grid 2 Columns</p>
                  </div>
                </div>
                
                <div className={layout.grid['3']} className="gap-4">
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <p className="text-sm text-neutral-600">Grid 3</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <p className="text-sm text-neutral-600">Grid 3</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <p className="text-sm text-neutral-600">Grid 3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flex Examples */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Flex Patterns</h3>
              <div className="space-y-4">
                <div className={layout.flex.center} className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-neutral-600">Centered Content</p>
                </div>
                
                <div className={layout.flex.between} className="bg-white p-4 rounded-lg border">
                  <span className="text-sm text-neutral-600">Left Item</span>
                  <span className="text-sm text-neutral-600">Right Item</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Examples */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Color System
          </h2>
          
          <div className={layout.grid['2']} className="gap-8">
            {/* Brand Colors */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Brand Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: colors.primary.main }}
                  ></div>
                  <span className="text-sm text-neutral-600">Primary Main</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: colors.primary.dark }}
                  ></div>
                  <span className="text-sm text-neutral-600">Primary Dark</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: colors.secondary.main }}
                  ></div>
                  <span className="text-sm text-neutral-600">Secondary Main</span>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Semantic Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: colors.success.main }}
                  ></div>
                  <span className="text-sm text-neutral-600">Success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: colors.warning.main }}
                  ></div>
                  <span className="text-sm text-neutral-600">Warning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: colors.error.main }}
                  ></div>
                  <span className="text-sm text-neutral-600">Error</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Ready to Use the Design System?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Start using the centralized design system in your components for consistent styling and better maintainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getButtonClasses('primary', 'lg')}>
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className={getButtonClasses('outline', 'lg')}>
                <span>View Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemExample; 