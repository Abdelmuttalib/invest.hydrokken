'use client';

import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle,
  Globe,
  Play,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function GoldTraining() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black'>
      {/* Header */}
      <header className='px-8 lg:px-12 h-20 flex items-center border-b border-amber-500/10 backdrop-blur-xl bg-black/80 sticky top-0 z-50'>
        <Link
          href='/founder-landing-refined'
          className='flex items-center space-x-3'
        >
          <div className='w-10 h-10 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/25'>
            <Award className='h-6 w-6 text-black' />
          </div>
          <span className='text-xl font-medium text-white tracking-wide'>
            Belkhayate Method
          </span>
        </Link>
        <nav className='ml-auto flex gap-8'>
          <Link
            href='/founder-landing-refined#training'
            className='text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300'
          >
            All Training
          </Link>
          <Link
            href='#curriculum'
            className='text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300'
          >
            Curriculum
          </Link>
          <Link
            href='#contact'
            className='text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300'
          >
            Contact
          </Link>
        </nav>
        <div className='ml-8'>
          <Button className='bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-medium px-6 py-2 text-sm transition-all duration-300 shadow-lg shadow-amber-500/20'>
            Enroll Now
          </Button>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]'></div>
          </div>

          <div className='container px-8 md:px-12 relative max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <div className='inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-500/20'>
                    <Award className='w-4 h-4 text-amber-400' />
                    <span className='text-amber-400 font-medium text-sm'>
                      Bloomberg #1 Gold Fund Manager
                    </span>
                  </div>

                  <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight'>
                      Master the
                      <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500'>
                        GOLD Market
                      </span>
                    </h1>

                    <p className='text-xl text-amber-100 font-light leading-relaxed'>
                      Learn the strategies of major American banks, simplified
                      for accessible use
                    </p>
                  </div>

                  <div className='space-y-6'>
                    <p className='text-lg text-zinc-300 leading-relaxed'>
                      In 2006, Mostafa Belkhayate was recognized by{' '}
                      <strong className='text-amber-400'>BLOOMBERG</strong> as
                      the best manager in the world on the gold market, with a
                      stable performance of
                      <strong className='text-amber-400'>
                        {' '}
                        4% per month for 36 months
                      </strong>{' '}
                      by managing a multi-million Canadian fund.
                    </p>

                    <div className='bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20'>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='text-2xl font-bold text-amber-400'>
                          Special Offer
                        </div>
                        <Badge className='bg-red-500 text-white'>
                          Limited Time
                        </Badge>
                      </div>
                      <div className='flex items-baseline space-x-4'>
                        <span className='text-4xl font-bold text-white'>
                          €359.40
                        </span>
                        <span className='text-2xl text-zinc-400 line-through'>
                          €599.00
                        </span>
                        <span className='text-emerald-400 font-semibold'>
                          Save 40%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    size='lg'
                    className='bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-xl shadow-amber-500/25'
                  >
                    Become a Gold Pro
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-amber-500/30 text-amber-100 hover:bg-amber-500/10 hover:border-amber-400 font-medium px-8 py-4 text-lg transition-all duration-300'
                  >
                    Learn More
                    <BookOpen className='ml-2 h-5 w-5' />
                  </Button>
                </div>
              </div>

              {/* Right Content - Video Preview */}
              <div className='relative'>
                <div className='relative'>
                  {/* Decorative elements */}
                  <div className='absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl'></div>

                  <div className='relative aspect-video rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10'>
                    <Image
                      src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                      alt='Gold trading masterclass preview'
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                      <div className='w-20 h-20 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-500/30 hover:scale-110 transition-transform duration-300 cursor-pointer'>
                        <Play className='h-10 w-10 text-amber-400 ml-1' />
                      </div>
                    </div>

                    {/* Video info overlay */}
                    <div className='absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-amber-500/30'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <div className='text-white font-semibold'>
                            Gold Trading Masterclass
                          </div>
                          <div className='text-amber-400 text-sm'>
                            Preview • 5:32
                          </div>
                        </div>
                        <div className='flex items-center space-x-1'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className='h-4 w-4 text-amber-400 fill-current'
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className='w-full py-20'>
          <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Why Trade
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400'>
                  {' '}
                  GOLD{' '}
                </span>
                Exclusively?
              </h2>
              <p className='text-xl text-zinc-300 max-w-3xl mx-auto'>
                Discover the secrets behind the world's most predictable and
                profitable market
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <Card className='bg-zinc-900/30 border-zinc-800/30 p-8 hover:border-amber-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <div className='w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center'>
                    <TrendingUp className='h-8 w-8 text-amber-400' />
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    Predictable Behavior
                  </h3>
                  <p className='text-zinc-400 leading-relaxed'>
                    Gold market is governed by players with predictable behavior
                    patterns, making it the perfect market for systematic
                    trading approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 p-8 hover:border-emerald-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <div className='w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center'>
                    <Shield className='h-8 w-8 text-emerald-400' />
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    Safe Haven Asset
                  </h3>
                  <p className='text-zinc-400 leading-relaxed'>
                    Gold serves as a hedge against inflation and economic
                    uncertainty, providing stability and consistent trading
                    opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 p-8 hover:border-blue-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <div className='w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center'>
                    <BarChart3 className='h-8 w-8 text-blue-400' />
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    High Liquidity
                  </h3>
                  <p className='text-zinc-400 leading-relaxed'>
                    The gold market offers exceptional liquidity with tight
                    spreads, allowing for precise entry and exit points with
                    minimal slippage.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Success Story */}
            <div className='bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-3xl p-12 border border-amber-500/20'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                  <h3 className='text-3xl font-bold text-white'>
                    The Belkhayate Gold System
                  </h3>
                  <p className='text-lg text-zinc-300 leading-relaxed'>
                    This training reveals the technical configurations that
                    allowed Mostafa to achieve his legendary performance. Learn
                    how gold influences commodities and currencies, and discover
                    the tactics used by market manipulators.
                  </p>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-6 w-6 text-emerald-400' />
                      <span className='text-white'>
                        Pass trading tests with confidence
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-6 w-6 text-emerald-400' />
                      <span className='text-white'>
                        Get recruited by prop firms
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-6 w-6 text-emerald-400' />
                      <span className='text-white'>
                        Manage your capital effectively
                      </span>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Gold trading charts and analysis'
                    width={500}
                    height={300}
                    className='rounded-2xl'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                  <div className='absolute bottom-4 left-4 right-4 text-center'>
                    <div className='text-2xl font-bold text-amber-400'>
                      4% Monthly
                    </div>
                    <div className='text-white'>
                      Consistent Returns for 36 Months
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id='curriculum' className='w-full py-20 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <Badge className='bg-blue-500/10 text-blue-400 border-blue-500/20 mb-6 px-4 py-2'>
                Complete Curriculum
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                What You'll
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                  {' '}
                  Learn
                </span>
              </h2>
              <p className='text-xl text-zinc-300 max-w-3xl mx-auto'>
                Comprehensive training covering every aspect of professional
                gold trading
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8'>
              {/* Curriculum Items */}
              <div className='space-y-6'>
                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Target className='h-5 w-5 text-amber-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Why TRADE exclusively GOLD?
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Understanding the unique advantages and characteristics of
                      the gold market
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Zap className='h-5 w-5 text-emerald-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      The winning certainty of Belkhayate Gold System
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Core principles and methodology behind consistent
                      profitability
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <BarChart3 className='h-5 w-5 text-blue-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      The Hourly Corridor and Volume
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Keys to GOLD trading - understanding market structure and
                      volume analysis
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <BookOpen className='h-5 w-5 text-purple-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      The 3 configurations of Belkhayate Method
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Master the three core trading setups for consistent
                      profits
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <TrendingUp className='h-5 w-5 text-pink-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Advanced study of the 3 configurations
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Deep dive into advanced applications and market scenarios
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Play className='h-5 w-5 text-green-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      First trades on Gold with Belkhayate Method
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Practical application and live trading examples
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Zap className='h-5 w-5 text-cyan-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Let the Indicators Belkhayate Method direct us
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Using proprietary indicators for precise market timing
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Users className='h-5 w-5 text-amber-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Human values to become a Trading Champion
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Psychology and mindset development for trading success
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Target className='h-5 w-5 text-red-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Belkhayate Gold system with magnifying glass
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Detailed analysis and fine-tuning of the trading system
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Shield className='h-5 w-5 text-orange-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Gold trading and the difficult problem of STOPs
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Risk management and stop-loss strategies for gold trading
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Award className='h-5 w-5 text-yellow-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      Hunting for Stop Loss
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Understanding market manipulation and protecting your
                      positions
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/30'>
                  <div className='w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <Star className='h-5 w-5 text-emerald-400' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      GoldenPoint & Daily Golden Point
                    </h4>
                    <p className='text-zinc-400 text-sm'>
                      Identifying key price levels and optimal entry/exit points
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Indicators */}
            <div className='mt-20'>
              <h3 className='text-2xl font-bold text-white text-center mb-12'>
                Technical Indicators
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400'>
                  {' '}
                  (Included)
                </span>
              </h3>

              <div className='grid md:grid-cols-2 gap-8'>
                <Card className='bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-500/20 p-8'>
                  <CardContent className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center'>
                        <BarChart3 className='h-6 w-6 text-amber-400' />
                      </div>
                      <h4 className='text-xl font-bold text-white'>
                        BELKHAYATE VWAP
                      </h4>
                    </div>
                    <p className='text-zinc-300 leading-relaxed'>
                      The Belkhayate VWAP is a powerful indicator that helps you
                      maintain your positions and follow the trend with complete
                      peace of mind. Essential for professional gold trading.
                    </p>
                  </CardContent>
                </Card>

                <Card className='bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 p-8'>
                  <CardContent className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center'>
                        <TrendingUp className='h-6 w-6 text-blue-400' />
                      </div>
                      <h4 className='text-xl font-bold text-white'>
                        BELKHAYATE19
                      </h4>
                    </div>
                    <p className='text-zinc-300 leading-relaxed'>
                      The Belkhayate19 is a popular technical indicator for
                      traders to assess the strength of a trend and identify
                      end-of-cycle signals. Provides essential market
                      information and trading signals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id='contact' className='w-full py-20'>
          <div className='container px-8 md:px-12 max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Contact us for
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400'>
                  {' '}
                  more information
                </span>
              </h2>
              <p className='text-xl text-zinc-300'>
                Ready to master the gold market? Get in touch with our team
              </p>
            </div>

            <div className='bg-zinc-900/30 backdrop-blur-sm rounded-3xl border border-zinc-800/30 p-12'>
              <form className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-medium mb-2'>
                      First Name
                    </label>
                    <Input
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className='bg-black/50 border-zinc-600 text-white h-12'
                      placeholder='Enter your first name'
                    />
                  </div>
                  <div>
                    <label className='block text-white font-medium mb-2'>
                      Last Name
                    </label>
                    <Input
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className='bg-black/50 border-zinc-600 text-white h-12'
                      placeholder='Enter your last name'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-white font-medium mb-2'>
                    E-mail
                  </label>
                  <Input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='bg-black/50 border-zinc-600 text-white h-12'
                    placeholder='Enter your email address'
                  />
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-medium mb-2'>
                      Area Code
                    </label>
                    <Input
                      name='countryCode'
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className='bg-black/50 border-zinc-600 text-white h-12'
                      placeholder='+1, +212, +33...'
                    />
                  </div>
                  <div>
                    <label className='block text-white font-medium mb-2'>
                      Phone Number
                    </label>
                    <Input
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='bg-black/50 border-zinc-600 text-white h-12'
                      placeholder='WhatsApp number'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-white font-medium mb-2'>
                    Country
                  </label>
                  <Input
                    name='country'
                    value={formData.country}
                    onChange={handleInputChange}
                    className='bg-black/50 border-zinc-600 text-white h-12'
                    placeholder='Enter your country'
                  />
                </div>

                <div>
                  <label className='block text-white font-medium mb-2'>
                    Message
                  </label>
                  <Textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    className='bg-black/50 border-zinc-600 text-white min-h-[120px]'
                    placeholder='Tell us about your trading goals...'
                  />
                </div>

                <div className='space-y-4'>
                  <div className='text-white font-medium'>Payment Method</div>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <div className='bg-black/50 rounded-lg p-4 border border-zinc-600 text-center'>
                      <div className='text-white font-medium'>Credit Card</div>
                    </div>
                    <div className='bg-black/50 rounded-lg p-4 border border-zinc-600 text-center'>
                      <div className='text-white font-medium'>PayPal</div>
                    </div>
                    <div className='bg-black/50 rounded-lg p-4 border border-zinc-600 text-center'>
                      <div className='text-white font-medium'>
                        Bank Transfer
                      </div>
                    </div>
                    <div className='bg-black/50 rounded-lg p-4 border border-zinc-600 text-center'>
                      <div className='text-white font-medium'>Crypto</div>
                    </div>
                  </div>
                </div>

                <Button className='w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-4 text-lg transition-all duration-300'>
                  Submit
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Other Training Section */}
        <section className='w-full py-20 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Other
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                  {' '}
                  Training
                </span>
              </h2>
              <p className='text-xl text-zinc-300'>
                Expand your trading knowledge with our comprehensive course
                catalog
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              <Card className='bg-zinc-900/30 border-zinc-800/30 p-6 hover:border-blue-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <BookOpen className='h-12 w-12 text-blue-400' />
                  <h4 className='text-xl font-semibold text-white'>
                    Base Trading
                  </h4>
                  <p className='text-zinc-400 text-sm leading-relaxed'>
                    Acquire the essential basics of trading with the Belkhayate
                    method, exploring fundamental principles for an informed
                    approach to financial markets.
                  </p>
                  <Button
                    variant='outline'
                    className='w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10'
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 p-6 hover:border-emerald-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <Target className='h-12 w-12 text-emerald-400' />
                  <h4 className='text-xl font-semibold text-white'>
                    Prop-Firm Tests
                  </h4>
                  <p className='text-zinc-400 text-sm leading-relaxed'>
                    Develop your skills to pass prop-firm tests with practical
                    tips, tailored strategies and an in-depth understanding of
                    evaluation criteria.
                  </p>
                  <Button
                    variant='outline'
                    className='w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 p-6 hover:border-purple-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <BarChart3 className='h-12 w-12 text-purple-400' />
                  <h4 className='text-xl font-semibold text-white'>
                    Order Flow
                  </h4>
                  <p className='text-zinc-400 text-sm leading-relaxed'>
                    Master Order Flow trading by understanding order flows to
                    anticipate market movements and make informed decisions.
                  </p>
                  <Button
                    variant='outline'
                    className='w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 p-6 hover:border-amber-500/30 transition-all duration-300'>
                <CardContent className='space-y-6'>
                  <Globe className='h-12 w-12 text-amber-400' />
                  <h4 className='text-xl font-semibold text-white'>
                    Training Darija
                  </h4>
                  <p className='text-zinc-400 text-sm leading-relaxed'>
                    1st Trading Course by Mr. Belkhayate in Darija (Arabic),
                    making financial education accessible to Arabic-speaking
                    communities.
                  </p>
                  <Button
                    variant='outline'
                    className='w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Live Trading Space */}
            <div className='bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-12 border border-emerald-500/20'>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Your Space Live Trading
                </h3>
                <p className='text-zinc-300'>
                  Join our exclusive live trading community
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='h-6 w-6 text-emerald-400 flex-shrink-0' />
                  <span className='text-white'>
                    Live TRADING 4/5 per week positions in real time
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='h-6 w-6 text-emerald-400 flex-shrink-0' />
                  <span className='text-white'>VIP Telegram Chat</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='h-6 w-6 text-emerald-400 flex-shrink-0' />
                  <span className='text-white'>Groups trading by market</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='h-6 w-6 text-emerald-400 flex-shrink-0' />
                  <span className='text-white'>
                    Exclusive technical indicators
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-black/50 border-t border-zinc-800/30 py-16'>
        <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
          <div className='grid gap-12 md:grid-cols-5'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center'>
                  <Award className='h-6 w-6 text-black' />
                </div>
                <span className='text-xl font-semibold text-white'>
                  Belkhayate Method
                </span>
              </div>
              <p className='text-zinc-400 leading-relaxed'>
                Master the gold market with strategies from the world's #1
                Bloomberg-ranked fund manager.
              </p>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Our Packs</h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Basic Package
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Advanced Package
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Premium Package
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Our Training</h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Gold Trading
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Base Trading
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Prop Firm Tests
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Order Flow
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Live Trading</h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Live Trading Space
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    VIP Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Market Groups
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Legal</h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-zinc-800/30 mt-12 pt-8 text-center'>
            <p className='text-zinc-500'>
              © 2025 BELKHAYATE METHOD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
