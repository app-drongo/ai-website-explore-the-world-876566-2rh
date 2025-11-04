'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Shield,
  MapPin,
  Plane,
  Camera,
  Globe,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  badge: 'Start Your Adventure Today',
  mainTitle: 'Ready to Explore Your',
  mainTitleHighlight: 'Dream Destination?',
  description:
    'Join thousands of travelers who have discovered the magic of France, Morocco, Spain, and Egypt with our expert-guided tours. Your unforgettable journey awaits.',
  primaryCTA: 'Book Your Trip Now',
  primaryCTAHref: '/contact',
  secondaryCTA: 'View Destinations',
  secondaryCTAHref: '/contact',
  trustText: 'Trusted by adventurous travelers worldwide',
  stat1Value: '15K+',
  stat1Label: 'Happy Travelers',
  stat2Value: '99.8%',
  stat2Label: 'Satisfaction Rate',
  stat3Value: '4',
  stat3Label: 'Amazing Countries',
  stat4Value: '24/7',
  stat4Label: 'Travel Support',
  feature1Title: 'Expert Guides',
  feature1Description: 'Local experts who know every hidden gem',
  feature2Title: 'Safe & Secure',
  feature2Description: 'Fully insured trips with 24/7 emergency support',
  feature3Title: 'Easy Booking',
  feature3Description: 'Simple online booking with flexible payment options',
} as const;

type CTAProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CTAProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();

  const stats = [
    { value: config.stat1Value, label: config.stat1Label, icon: Users },
    { value: config.stat2Value, label: config.stat2Label, icon: Shield },
    { value: config.stat3Value, label: config.stat3Label, icon: Globe },
    { value: config.stat4Value, label: config.stat4Label, icon: Sparkles },
  ];

  const features = [
    {
      title: config.feature1Title,
      description: config.feature1Description,
      icon: MapPin,
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      iconColor: 'text-red-500',
    },
    {
      title: config.feature2Title,
      description: config.feature2Description,
      icon: Shield,
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      iconColor: 'text-orange-500',
    },
    {
      title: config.feature3Title,
      description: config.feature3Description,
      icon: Plane,
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 dark:from-red-950/30 dark:via-orange-950/30 dark:to-red-950/40" />
      <div className="absolute top-0 left-1/4 size-96 bg-red-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-orange-500/20 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-red-200/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl shadow-red-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 border border-red-200 dark:border-red-800 rounded-full text-sm font-medium text-red-700 dark:text-red-300 mb-8">
                <Sparkles className="size-4 mr-2" />
                <span data-editable="badge">{config.badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span data-editable="mainTitle">{config.mainTitle}</span>
                <span className="block bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg"
                  onClick={() => navigate(config.primaryCTAHref)}
                  data-editable-href="primaryCTAHref"
                  data-href={config.primaryCTAHref}
                >
                  <span data-editable="primaryCTA">{config.primaryCTA}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4 border-red-300 text-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white hover:border-transparent dark:border-red-700 dark:text-red-400"
                  onClick={() => navigate(config.secondaryCTAHref)}
                  data-editable-href="secondaryCTAHref"
                  data-href={config.secondaryCTAHref}
                >
                  <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  <span data-editable="trustText">{config.trustText}</span>
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Destination flags/logos placeholders */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-red-200 to-orange-200 dark:from-red-800 dark:to-orange-800 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                        <Icon className="size-6 text-white" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="space-y-2">
                  <div
                    className={`size-12 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    <Icon className={`size-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-semibold">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
