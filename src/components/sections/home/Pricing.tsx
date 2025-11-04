'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, MapPin, Plane, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Travel Packages',
  mainTitle: 'Discover Amazing',
  mainTitleHighlight: 'Travel Deals',
  mainDescription:
    'Choose your perfect adventure to France, Morocco, Spain, or Egypt. All packages include flights, accommodation, and guided tours with no hidden fees.',
  billingMonthly: 'Standard',
  billingAnnual: 'Premium',
  billingAnnualBadge: 'Best Value',
  plan1Name: 'Explorer',
  plan1Description: 'Perfect for solo travelers and couples',
  plan1Price: '$899',
  plan1CTA: 'Book Explorer',
  plan1CTAHref: '/contact',
  plan2Name: 'Adventure',
  plan2Description: 'Best for families and small groups',
  plan2Price: '$1,299',
  plan2Period: '/person',
  plan2Badge: 'Most Popular',
  plan2CTA: 'Book Adventure',
  plan2CTAHref: '/contact',
  plan2Trial: 'Free cancellation • 24/7 support included',
  plan3Name: 'Luxury',
  plan3Description: 'For those seeking premium experiences',
  plan3Price: '$2,499',
  plan3Badge: 'Premium',
  plan3CTA: 'Book Luxury',
  plan3CTAHref: '/contact',
  bottomTitle: 'Need a custom itinerary?',
  bottomDescription:
    'We create personalized travel experiences tailored to your preferences. Let our travel experts design the perfect journey to your dream destination.',
  bottomCTA: 'Plan Custom Trip',
  bottomCTAHref: '/contact',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: config.plan1Name,
      description: config.plan1Description,
      price: config.plan1Price,
      period: '',
      badge: null,
      features: [
        '5-day guided tours',
        '3-star accommodation',
        'Daily breakfast included',
        'Airport transfers',
        'Local guide services',
        'Travel insurance',
      ],
      cta: config.plan1CTA,
      ctaHref: config.plan1CTAHref,
      popular: false,
      icon: MapPin,
    },
    {
      name: config.plan2Name,
      description: config.plan2Description,
      price: config.plan2Price,
      period: config.plan2Period,
      badge: config.plan2Badge,
      features: [
        '7-day comprehensive tours',
        '4-star accommodation',
        'All meals included',
        'Private transportation',
        'Expert local guides',
        'Cultural experiences',
        'Photo opportunities',
        '24/7 concierge service',
      ],
      cta: config.plan2CTA,
      ctaHref: config.plan2CTAHref,
      popular: true,
      icon: Plane,
    },
    {
      name: config.plan3Name,
      description: config.plan3Description,
      price: config.plan3Price,
      period: '',
      badge: config.plan3Badge,
      features: [
        '10-day luxury experience',
        '5-star accommodation',
        'Fine dining experiences',
        'Private jet transfers',
        'Personal travel concierge',
        'Exclusive access tours',
        'Professional photography',
        'Spa and wellness services',
      ],
      cta: config.plan3CTA,
      ctaHref: config.plan3CTAHref,
      popular: false,
      icon: Camera,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-red-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-red-200 text-red-700 bg-red-50 dark:border-red-800 dark:text-red-300 dark:bg-red-950/50"
          >
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-red-200 dark:border-red-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingMonthly">{config.billingMonthly}</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingAnnual">{config.billingAnnual}</span>
              <Badge
                variant="secondary"
                className="text-xs bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
              >
                <span data-editable="billingAnnualBadge">{config.billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm',
                  plan.popular
                    ? 'border-red-300 shadow-lg shadow-red-500/20 lg:scale-105 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/30 dark:to-orange-950/30'
                    : 'border-red-200/50 hover:border-red-300/50 dark:border-red-800/50'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 shadow-lg">
                      <Star className="size-3 mr-1 fill-current" />
                      <span data-editable="plan2Badge">{plan.badge}</span>
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 pointer-events-none" />
                )}

                <CardHeader className={cn('relative text-center pb-8', plan.popular && 'pt-10')}>
                  {plan.badge && !plan.popular && (
                    <Badge
                      variant="outline"
                      className="mb-4 mx-auto w-fit border-orange-200 text-orange-700 bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:bg-orange-950/50"
                    >
                      <span data-editable="plan3Badge">{plan.badge}</span>
                    </Badge>
                  )}

                  <div className="size-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                    <Icon className="size-6 text-white" />
                  </div>

                  <CardTitle className="text-2xl mb-2">
                    <span data-editable={`plan${index + 1}Name`}>{plan.name}</span>
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    <span data-editable={`plan${index + 1}Description`}>{plan.description}</span>
                  </CardDescription>

                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                      <span data-editable={`plan${index + 1}Price`}>{plan.price}</span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">
                        <span data-editable="plan2Period">{plan.period}</span>
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      'w-full text-base py-6 transition-all duration-300',
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg'
                        : 'border-red-300 text-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white dark:border-red-700 dark:text-red-400'
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate(plan.ctaHref)}
                    data-editable-href={`plan${index + 1}CTAHref`}
                    data-href={plan.ctaHref}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    <span data-editable={`plan${index + 1}CTA`}>{plan.cta}</span>
                  </Button>

                  {plan.name === config.plan2Name && (
                    <p className="text-center text-sm text-muted-foreground">
                      <span data-editable="plan2Trial">{config.plan2Trial}</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-red-300 text-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white hover:border-transparent dark:border-red-700 dark:text-red-400"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
