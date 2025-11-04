'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react';

const DEFAULT_CONTACT = {
  badge: 'Contact Us',
  mainTitle: 'Plan Your Perfect',
  mainTitleHighlight: 'Travel Experience',
  mainDescription:
    'Ready to explore France, Morocco, Spain, or Egypt? Contact our travel experts to create your personalized journey.',
  formTitle: 'Start Planning Your Trip',
  formDescription:
    "Tell us about your dream destination and we'll create a customized travel package just for you.",
  submitButton: 'Send Inquiry',
  contactSectionTitle: 'Get Travel Assistance',
  method1Title: 'Email Support',
  method1Description: 'Send us your travel questions',
  method1Contact: 'travel@dreamdestinations.com',
  method2Title: 'Call Our Experts',
  method2Description: 'Speak with travel specialists',
  method2Contact: '+1 (555) TRAVEL-1',
  method3Title: 'Live Chat',
  method3Description: 'Instant travel assistance',
  method3Contact: 'Available 9 AM - 9 PM',
  officesSectionTitle: 'Our Travel Offices',
  office1City: 'Paris Office',
  office1Address: '123 Champs-Élysées, 75008 Paris',
  office1Timezone: 'CET (UTC+1)',
  office2City: 'Marrakech Office',
  office2Address: '456 Avenue Mohammed V, Marrakech',
  office2Timezone: 'WET (UTC+0)',
  office3City: 'Madrid Office',
  office3Address: '789 Gran Vía, 28013 Madrid',
  office3Timezone: 'CET (UTC+1)',
  hoursTitle: 'Travel Consultation Hours',
  hoursWeekdayLabel: 'Monday - Friday',
  hoursWeekdayTime: '9:00 AM - 9:00 PM',
  hoursSaturdayLabel: 'Saturday',
  hoursSaturdayTime: '10:00 AM - 6:00 PM',
  hoursSundayLabel: 'Sunday',
  hoursSundayTime: '12:00 PM - 5:00 PM',
  supportNote: '24/7 emergency support available during your travels',
  nameLabel: 'Full Name *',
  namePlaceholder: 'Your full name',
  emailLabel: 'Email Address *',
  emailPlaceholder: 'your.email@example.com',
  companyLabel: 'Preferred Destination *',
  companyPlaceholder: 'Select your dream destination',
  messageLabel: 'Travel Details *',
  messagePlaceholder:
    'Tell us about your travel preferences, dates, group size, and any special requirements...',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: config.method1Title,
      description: config.method1Description,
      contact: config.method1Contact,
    },
    {
      icon: Phone,
      title: config.method2Title,
      description: config.method2Description,
      contact: config.method2Contact,
    },
    {
      icon: MessageSquare,
      title: config.method3Title,
      description: config.method3Description,
      contact: config.method3Contact,
    },
  ];

  const offices = [
    {
      city: config.office1City,
      address: config.office1Address,
      timezone: config.office1Timezone,
    },
    {
      city: config.office2City,
      address: config.office2Address,
      timezone: config.office2Timezone,
    },
    {
      city: config.office3City,
      address: config.office3Address,
      timezone: config.office3Timezone,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-red-50/30 via-orange-50/20 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-red-500/20 text-red-600 bg-gradient-to-r from-red-500/10 to-orange-500/10"
          >
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-red-500/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-red-500" />
                <span data-editable="formTitle">{config.formTitle}</span>
              </CardTitle>
              <CardDescription>
                <span data-editable="formDescription">{config.formDescription}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      <span data-editable="nameLabel">{config.nameLabel}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                      placeholder={config.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      <span data-editable="emailLabel">{config.emailLabel}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                      placeholder={config.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    <span data-editable="companyLabel">{config.companyLabel}</span>
                  </label>
                  <select
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select your destination</option>
                    <option value="France">France</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Spain">Spain</option>
                    <option value="Egypt">Egypt</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    <span data-editable="messageLabel">{config.messageLabel}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors resize-none"
                    placeholder={config.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0"
                >
                  <span data-editable="submitButton">{config.submitButton}</span>
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-red-500" />
                <span data-editable="contactSectionTitle">{config.contactSectionTitle}</span>
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-red-500/10 hover:border-red-500/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 flex items-center justify-center group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-colors">
                            <Icon className="size-6 text-red-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              <span data-editable={`method${index + 1}Title`}>{method.title}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span data-editable={`method${index + 1}Description`}>
                                {method.description}
                              </span>
                            </p>
                            <p className="font-medium text-red-600">
                              <span data-editable={`method${index + 1}Contact`}>
                                {method.contact}
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-red-500" />
                <span data-editable="officesSectionTitle">{config.officesSectionTitle}</span>
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-4 border border-red-500/10 rounded-lg bg-gradient-to-r from-red-50/30 to-orange-50/20"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-red-700">
                          <span data-editable={`office${index + 1}City`}>{office.city}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span data-editable={`office${index + 1}Address`}>{office.address}</span>
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">
                        <span data-editable={`office${index + 1}Timezone`}>{office.timezone}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-red-500/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-red-500" />
                  <span data-editable="hoursTitle">{config.hoursTitle}</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursWeekdayLabel">{config.hoursWeekdayLabel}</span>
                    </span>
                    <span data-editable="hoursWeekdayTime">{config.hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSaturdayLabel">{config.hoursSaturdayLabel}</span>
                    </span>
                    <span data-editable="hoursSaturdayTime">{config.hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayLabel">{config.hoursSundayLabel}</span>
                    </span>
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayTime">{config.hoursSundayTime}</span>
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg">
                  <p className="text-sm text-red-600 font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    <span data-editable="supportNote">{config.supportNote}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
