'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'WanderLux',
  companyDescription:
    "Discover the world's most breathtaking destinations with our expertly curated travel experiences. From the romantic streets of Paris to the ancient wonders of Egypt, we create unforgettable journeys tailored just for you.",
  contactEmail: 'hello@wanderlux.com',
  contactPhone: '+1 (555) 123-TRIP',
  contactAddress: '123 Travel Plaza, Suite 100, New York, NY',
  newsletterTitle: 'Travel Updates',
  newsletterPlaceholder: 'Enter your email for deals',
  newsletterDisclaimer:
    'Get exclusive travel deals and destination guides. No spam, unsubscribe anytime.',
  section1Title: 'Destinations',
  section2Title: 'Company',
  section3Title: 'Support',
  section4Title: 'Legal',
  copyrightText: '© 2024 WanderLux. All rights reserved.',
  madeWithText: 'by travel enthusiasts',
  socialText: 'Follow our journey:',
  social1Href: 'https://twitter.com/wanderlux',
  social2Href: 'https://facebook.com/wanderlux',
  social3Href: 'https://instagram.com/wanderlux',
  social4Href: 'https://linkedin.com/company/wanderlux',
  social5Href: 'https://youtube.com/wanderlux',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // ✅ FIXED: Added editableId to all footer links
  const footerSections = [
    {
      title: config.section1Title,
      links: [
        { name: 'France', href: '#france', editableId: 'link-footer-features' },
        { name: 'Morocco', href: '#morocco', editableId: 'link-footer-pricing' },
        { name: 'Spain', href: '#spain', editableId: 'link-footer-templates' },
        { name: 'Egypt', href: '#egypt', editableId: 'link-footer-integrations' },
        { name: 'All Packages', href: '#pricing', editableId: 'link-footer-api' },
        { name: 'Custom Tours', href: '#contact', editableId: 'link-footer-documentation' },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'About Us', href: '#about', editableId: 'link-footer-about' },
        { name: 'Travel Blog', href: '/blog', editableId: 'link-footer-blog' },
        { name: 'Careers', href: '/careers', editableId: 'link-footer-careers' },
        { name: 'Press Kit', href: '/press', editableId: 'link-footer-press' },
        { name: 'Travel Partners', href: '/partners', editableId: 'link-footer-partners' },
        { name: 'Contact Us', href: '#contact', editableId: 'link-footer-contact' },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'Help Center', href: '/help', editableId: 'link-footer-help' },
        { name: 'Travel Community', href: '/community', editableId: 'link-footer-community' },
        { name: 'Travel Guides', href: '/guides', editableId: 'link-footer-tutorials' },
        { name: 'Travel Tips', href: '/tips', editableId: 'link-footer-webinars' },
        { name: 'Reviews', href: '/reviews', editableId: 'link-footer-case-studies' },
        { name: 'Booking Status', href: '/status', editableId: 'link-footer-status' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        { name: 'Privacy Policy', href: '/privacy', editableId: 'link-footer-privacy' },
        { name: 'Terms of Service', href: '/terms', editableId: 'link-footer-terms' },
        { name: 'Booking Terms', href: '/booking-terms', editableId: 'link-footer-cookies' },
        { name: 'Travel Insurance', href: '/insurance', editableId: 'link-footer-gdpr' },
        { name: 'Safety Guidelines', href: '/safety', editableId: 'link-footer-security' },
        { name: 'Refund Policy', href: '/refunds', editableId: 'link-footer-compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'YouTube', icon: Youtube, href: config.social5Href },
  ];

  // ✅ FIXED: Added editableId to bottom bar links
  const bottomLinks = [
    { name: 'Sitemap', href: '/sitemap', editableId: 'link-footer-sitemap' },
    { name: 'Accessibility', href: '/accessibility', editableId: 'link-footer-accessibility' },
    { name: 'Cookie Settings', href: '/cookies', editableId: 'link-footer-cookie-settings' },
    { name: '24/7 Support', href: '/support', editableId: 'link-footer-support' },
  ];

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold">{config.logoText.charAt(0)}</span>
                </div>
                <span className="font-bold text-xl text-white" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-white" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500"
                />
                <Button
                  size="sm"
                  className="px-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-400">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4
                  className="font-semibold text-sm text-white"
                  data-editable={`section${index + 1}Title`}
                >
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400 mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-slate-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center transition-all duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-slate-700/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-slate-400 hover:text-orange-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
