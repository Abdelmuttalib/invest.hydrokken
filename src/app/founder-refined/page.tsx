'use client';

import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle,
  Globe,
  Heart,
  Linkedin,
  Mail,
  Play,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function FounderLandingRefined() {
  const [email, setEmail] = useState('');

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black'>
      {/* Header */}
      <header className='px-8 lg:px-12 h-20 flex items-center border-b border-amber-500/10 backdrop-blur-xl bg-black/80 sticky top-0 z-50'>
        <Link href='/' className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/25'>
            <Brain className='h-6 w-6 text-black' />
          </div>
          <span className='text-xl font-medium text-white tracking-wide'>
            Belkhayate Method
          </span>
        </Link>
        <nav className='ml-auto flex gap-8'>
          <Link
            href='#story'
            className='text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300'
          >
            Story
          </Link>
          <Link
            href='#impact'
            className='text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300'
          >
            Impact
          </Link>
          <Link
            href='#training'
            className='text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300'
          >
            Training
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
            Start Learning
          </Button>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full min-h-screen relative overflow-hidden flex items-center'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.08),transparent_50%)]'></div>
          </div>

          <div className='container px-8 md:px-12 relative max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <div className='inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-500/20'>
                    <Sparkles className='w-4 h-4 text-amber-400' />
                    <span className='text-amber-400 font-medium text-sm'>
                      World Champion in AI Applied to Trading
                    </span>
                  </div>

                  <div className='space-y-6'>
                    <h1 className='text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight'>
                      El Mostafa
                      <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500'>
                        Belkhayate
                      </span>
                    </h1>

                    <p className='text-xl md:text-2xl text-amber-100 font-light leading-relaxed'>
                      "Technology must serve people — not the other way around."
                    </p>
                  </div>

                  <div className='space-y-6'>
                    <p className='text-lg text-zinc-300 leading-relaxed'>
                      Creator of the revolutionary Belkhayate Method and
                      co-founder of Springbox AI. Over 30 years of experience
                      transforming lives through democratized financial
                      education and cutting-edge AI trading technology.
                    </p>

                    <div className='grid grid-cols-2 gap-6'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                          <Trophy className='h-4 w-4 text-amber-400' />
                        </div>
                        <div>
                          <div className='text-white font-semibold'>
                            World Champion
                          </div>
                          <div className='text-zinc-400 text-sm'>
                            AI Trading 2025
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                          <Users className='h-4 w-4 text-amber-400' />
                        </div>
                        <div>
                          <div className='text-white font-semibold'>
                            50,000+
                          </div>
                          <div className='text-zinc-400 text-sm'>
                            Lives Transformed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    size='lg'
                    className='bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-xl shadow-amber-500/25'
                  >
                    Start Your Journey
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-amber-500/30 text-amber-100 hover:bg-amber-500/10 hover:border-amber-400 font-medium px-8 py-4 text-lg transition-all duration-300'
                  >
                    <Play className='mr-2 h-5 w-5' />
                    Watch Story
                  </Button>
                </div>
              </div>

              {/* Right Content - Enhanced Portrait */}
              <div className='relative'>
                <div className='relative'>
                  {/* Decorative elements */}
                  <div className='absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl'></div>
                  <div className='absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-amber-500/15 to-yellow-400/15 rounded-full blur-2xl'></div>

                  <div className='relative aspect-[4/5] rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10'>
                    <Image
                      // src='/placeholder.svg?height=600&width=480'
                      // src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2148803681/settings_images/cafcdb0-4a4a-6fa-46a8-fc5b0b123453_mostafa_belkhayate.png'
                      src='https://bknmaster-master-dapppublicbucket.s3.amazonaws.com/6e259fee-5f59-4c6c-b547-19e634882b4a/publish/assets/teamImage0.png'
                      alt='El Mostafa Belkhayate - Professional Portrait'
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

                    {/* Floating achievement cards */}
                    <div className='absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-amber-500/30'>
                      <div className='text-center'>
                        <div className='text-2xl font-medium tracking-tight text-amber-400'>
                          $1.3B
                        </div>
                        <div className='text-xs text-zinc-300'>Fund Growth</div>
                      </div>
                    </div>

                    <div className='absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-amber-500/30'>
                      <div className='grid grid-cols-3 gap-4 text-center'>
                        <div>
                          <div className='text-lg font-medium tracking-tight text-amber-400'>
                            2006
                          </div>
                          <div className='text-xs text-zinc-300'>
                            Bloomberg #1
                          </div>
                        </div>
                        <div>
                          <div className='text-lg font-medium tracking-tight text-amber-400'>
                            120%
                          </div>
                          <div className='text-xs text-zinc-300'>
                            Annual Return
                          </div>
                        </div>
                        <div>
                          <div className='text-lg font-medium tracking-tight text-amber-400'>
                            30+
                          </div>
                          <div className='text-xs text-zinc-300'>
                            Years Exp.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id='story' className='w-full py-32 relative'>
          <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-amber-500/10 text-amber-400 border-amber-500/20 mb-6 px-4 py-2'>
                The Journey
              </Badge>
              <h2 className='text-4xl md:text-5xl font-medium tracking-tight text-white mb-6'>
                From Fund Manager to
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400'>
                  Social Impact Pioneer
                </span>
              </h2>
              <p className='text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed'>
                A remarkable journey spanning three decades, from managing
                billion-dollar funds to empowering underserved communities
                worldwide through financial education.
              </p>
            </div>

            {/* Timeline */}
            <div className='relative'>
              <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full'></div>

              <div className='space-y-16'>
                {/* Timeline Item 1 */}
                <div className='flex items-center'>
                  <div className='w-1/2 pr-8 text-right'>
                    <div className='bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50'>
                      <div className='text-amber-400 font-semibold mb-2'>
                        2004-2006
                      </div>
                      <h3 className='text-xl font-medium tracking-tight text-white mb-3'>
                        The Breakthrough
                      </h3>
                      <p className='text-zinc-300'>
                        Managed a Canadian fund specializing in gold, growing it
                        from $100 million to $1.3 billion in just two years with
                        consistent 4% monthly returns.
                      </p>
                    </div>
                  </div>
                  <div className='w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center relative z-10'>
                    <TrendingUp className='h-6 w-6 text-black' />
                  </div>
                  <div className='w-1/2 pl-8'></div>
                </div>

                {/* Timeline Item 2 */}
                <div className='flex items-center'>
                  <div className='w-1/2 pr-8'></div>
                  <div className='w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center relative z-10'>
                    <Award className='h-6 w-6 text-black' />
                  </div>
                  <div className='w-1/2 pl-8'>
                    <div className='bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50'>
                      <div className='text-amber-400 font-semibold mb-2'>
                        2006-2015
                      </div>
                      <h3 className='text-xl font-medium tracking-tight text-white mb-3'>
                        Global Recognition
                      </h3>
                      <p className='text-zinc-300'>
                        Bloomberg ranked his fund #1 globally. Won Best
                        Technical Analyst Trophy in Paris (2009) and structured
                        Dubai's first Sharia-compliant gold-backed bond.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className='flex items-center'>
                  <div className='w-1/2 pr-8 text-right'>
                    <div className='bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50'>
                      <div className='text-amber-400 font-semibold mb-2'>
                        2015-Present
                      </div>
                      <h3 className='text-xl font-medium tracking-tight text-white mb-3'>
                        Social Impact Mission
                      </h3>
                      <p className='text-zinc-300'>
                        Launched free global trading academies, equipped
                        Moroccan orphanages with technology, and empowered
                        50,000+ individuals across 20+ African countries.
                      </p>
                    </div>
                  </div>
                  <div className='w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center relative z-10'>
                    <Heart className='h-6 w-6 text-black' />
                  </div>
                  <div className='w-1/2 pl-8'></div>
                </div>

                {/* Timeline Item 4 */}
                <div className='flex items-center'>
                  <div className='w-1/2 pr-8'></div>
                  <div className='w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center relative z-10'>
                    <Zap className='h-6 w-6 text-black' />
                  </div>
                  <div className='w-1/2 pl-8'>
                    <div className='bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50'>
                      <div className='text-amber-400 font-semibold mb-2'>
                        2025
                      </div>
                      <h3 className='text-xl font-medium tracking-tight text-white mb-3'>
                        AI Revolution
                      </h3>
                      <p className='text-zinc-300'>
                        Achieved World Champion status in AI Applied to Trading,
                        generating $15,000 in 6 minutes with Springbox AI at the
                        AIM Congress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section
          id='impact'
          className='w-full py-32 bg-gradient-to-br from-amber-500/5 to-yellow-500/5'
        >
          <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6 px-4 py-2'>
                Global Impact
              </Badge>
              <h2 className='text-4xl md:text-5xl font-medium tracking-tight text-white mb-6'>
                Transforming Lives
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400'>
                  Worldwide
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
              <div className='text-center group'>
                <div className='w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Users className='h-10 w-10 text-amber-400' />
                </div>
                <div className='text-4xl font-medium tracking-tight text-white mb-2'>
                  50,000+
                </div>
                <div className='text-zinc-400'>People Trained</div>
              </div>

              <div className='text-center group'>
                <div className='w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Globe className='h-10 w-10 text-emerald-400' />
                </div>
                <div className='text-4xl font-medium tracking-tight text-white mb-2'>
                  20+
                </div>
                <div className='text-zinc-400'>Countries Impacted</div>
              </div>

              <div className='text-center group'>
                <div className='w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Heart className='h-10 w-10 text-pink-400' />
                </div>
                <div className='text-4xl font-medium tracking-tight text-white mb-2'>
                  2,000+
                </div>
                <div className='text-zinc-400'>Orphans Educated</div>
              </div>

              <div className='text-center group'>
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <TrendingUp className='h-10 w-10 text-blue-400' />
                </div>
                <div className='text-4xl font-medium tracking-tight text-white mb-2'>
                  400%
                </div>
                <div className='text-zinc-400'>Income Increase</div>
              </div>
            </div>

            {/* Impact Stories */}
            <div className='grid lg:grid-cols-3 gap-8'>
              <Card className='bg-zinc-900/30 border-zinc-800/30 overflow-hidden group hover:border-amber-500/30 transition-all duration-300'>
                <div className='aspect-video relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Orphanage technology initiative'
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-white font-semibold mb-2'>
                      Orphanage Initiative
                    </h3>
                    <p className='text-zinc-300 text-sm'>
                      15 years of providing technology and education to Moroccan
                      orphanages
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 overflow-hidden group hover:border-emerald-500/30 transition-all duration-300'>
                <div className='aspect-video relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='African youth empowerment'
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-white font-semibold mb-2'>
                      African Empowerment
                    </h3>
                    <p className='text-zinc-300 text-sm'>
                      20+ countries across Africa receiving AI trading education
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='bg-zinc-900/30 border-zinc-800/30 overflow-hidden group hover:border-pink-500/30 transition-all duration-300'>
                <div className='aspect-video relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt="Women's empowerment in trading"
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-white font-semibold mb-2'>
                      Women's Leadership
                    </h3>
                    <p className='text-zinc-300 text-sm'>
                      50% scholarship allocation for women's financial
                      independence
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Preview */}
        <section id='training' className='w-full py-32'>
          <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-blue-500/10 text-blue-400 border-blue-500/20 mb-6 px-4 py-2'>
                Master the Method
              </Badge>
              <h2 className='text-4xl md:text-5xl font-medium tracking-tight text-white mb-6'>
                Transform Your Trading
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                  With Proven Strategies
                </span>
              </h2>
              <p className='text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed'>
                Learn the exact methods that generated billions in returns and
                transformed thousands of lives worldwide.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
              <div className='space-y-8'>
                <div className='space-y-6'>
                  <h3 className='text-3xl font-medium tracking-tight text-white'>
                    The Belkhayate Method
                  </h3>
                  <p className='text-lg text-zinc-300 leading-relaxed'>
                    30+ years of trading expertise distilled into a
                    comprehensive system that's helped students achieve
                    consistent profitability and pass prop firm tests worldwide.
                  </p>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <CheckCircle className='h-5 w-5 text-blue-400' />
                    </div>
                    <div>
                      <h4 className='text-white font-semibold mb-1'>
                        Proven Track Record
                      </h4>
                      <p className='text-zinc-400'>
                        Bloomberg #1 ranked fund manager with $1.3B in managed
                        assets
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <CheckCircle className='h-5 w-5 text-emerald-400' />
                    </div>
                    <div>
                      <h4 className='text-white font-semibold mb-1'>
                        Real Results
                      </h4>
                      <p className='text-zinc-400'>
                        12,000+ Wall Street certifications and 400% average
                        income increase
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <CheckCircle className='h-5 w-5 text-amber-400' />
                    </div>
                    <div>
                      <h4 className='text-white font-semibold mb-1'>
                        AI-Enhanced
                      </h4>
                      <p className='text-zinc-400'>
                        World Champion AI trading technology integrated into
                        education
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link href='/gold-training'>
                    <Button className='bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg transition-all duration-300 shadow-xl shadow-blue-500/25'>
                      Explore Training Programs
                      <ArrowRight className='ml-2 h-5 w-5' />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className='relative'>
                <div className='aspect-video bg-zinc-900/50 rounded-2xl border border-zinc-800/50 overflow-hidden'>
                  <Image
                    src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Trading education preview'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <div className='w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30'>
                      <Play className='h-10 w-10 text-white ml-1' />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className='absolute -top-4 -right-4 bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold text-sm'>
                  World Champion Method
                </div>
                <div className='absolute -bottom-4 -left-4 bg-emerald-500 text-black px-4 py-2 rounded-lg font-semibold text-sm'>
                  50,000+ Students
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Packages Section */}
        <section id='training' className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Advanced trading technology and education'
              fill
              className='object-cover opacity-5'
            />
            <div className='absolute inset-0 bg-black/95'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
            <div className='text-center mb-20'>
              <Badge className='bg-blue-500/20 text-blue-400 border-blue-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Master the Method
              </Badge>
              {/* <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>

                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-light mt-4'>
                  Training Programs
                </span>
              </h2> */}
              <h2 className='text-4xl md:text-5xl font-medium tracking-tight text-white mb-6'>
                Belkhayate Method
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                  Training Programs
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                Simplify your course of trading with the revolutionary
                Belkhayate Method. Learn from 30+ years of experience and join
                thousands of successful traders worldwide.
              </p>
            </div>

            {/* Training Packages */}
            <div className='grid lg:grid-cols-3 gap-8 mb-20'>
              {/* Basic Package */}
              <Card className='bg-neutral-900/40 border-zinc-800/30 p-8 relative overflow-hidden'>
                <div className='absolute top-2 right-2 bg-blue-900/30 text-blue-500 text-black px-4 py-2 text-sm font-medium rounded-lg border border-blue-500/60'>
                  POPULAR
                </div>
                <CardContent className='space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-light text-white'>
                      Basics Package
                    </h3>
                    <div className='flex items-baseline space-x-2'>
                      <span className='text-4xl text-blue-400'>€695</span>
                      <span className='text-zinc-400 line-through'>€817</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-blue-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Basics" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-blue-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Gold" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-blue-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        1 month Live Trading area (€99)
                      </span>
                    </div>
                  </div>

                  <Button className='w-full bg-blue-500 hover:bg-blue-600 text-black font-medium py-3'>
                    Start Learning
                  </Button>
                </CardContent>
              </Card>

              {/* Advanced Package */}
              <Card className='bg-neutral-900/40 border-zinc-800/30 p-8 relative overflow-hidden'>
                <div className='absolute top-2 right-2 border border-emerald-500/60 rounded-lg bg-emerald-900/30 text-emerald-500 px-4 py-2 text-sm font-medium'>
                  BEST VALUE
                </div>
                <CardContent className='space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-light text-white'>
                      Advanced Package
                    </h3>
                    <div className='flex items-baseline space-x-2'>
                      <span className='text-4xl text-emerald-400'>€1,134</span>
                      <span className='text-zinc-400 line-through'>€1,416</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Basics" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Gold" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Management tests" training (€479.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        3 months Live Trading area (€219)
                      </span>
                    </div>
                  </div>

                  <Button className='w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-3'>
                    Start Learning
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Package */}
              <Card className='bg-neutral-900/40 border-zinc-800/30 p-8 relative overflow-hidden'>
                <div className='absolute top-2 right-2 bg-amber-500 text-black px-4 py-2 text-sm font-medium rounded-lg border border-amber-500/60'>
                  COMPLETE
                </div>
                {/* <div className='absolute top-2 right-2 border border-emerald-500/60 rounded-lg bg-emerald-900/30 text-emerald-500 px-4 py-2 text-sm font-medium'>
                  BEST VALUE
                </div> */}
                <CardContent className='space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-light text-white'>
                      Premium Package
                    </h3>
                    <div className='flex items-baseline space-x-2'>
                      <span className='text-4xl text-amber-400'>€1,551</span>
                      <span className='text-zinc-400 line-through'>€2,066</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Basics" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Gold" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Management tests" training (€479.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        "Order book" training (€479.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300'>
                        6 months Live Trading area (€390)
                      </span>
                    </div>
                  </div>

                  <Button className='w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-3'>
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Training Modules */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Card className='bg-neutral-900/40 border-zinc-800/30 px-4 pt-8'>
                <CardContent className='space-y-6'>
                  <BookOpen className='h-12 w-12 text-blue-400' />
                  <h4 className='text-xl font-light text-white'>
                    Base Trading
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Acquire the essential basics of trading with the Belkhayate
                    method, exploring fundamental principles for an informed
                    approach to financial markets.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-neutral-900/40 border-zinc-800/30 px-4 pt-8'>
                <CardContent className='space-y-6'>
                  <Trophy className='h-12 w-12 text-amber-400' />
                  <h4 className='text-xl font-light text-white'>
                    Gold Trading
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Plan your trading strategy and trade the gold market like
                    the experts at major US banks with advanced techniques and
                    insights.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-neutral-900/40 border-zinc-800/30 px-4 pt-8'>
                <CardContent className='space-y-6'>
                  <Target className='h-12 w-12 text-emerald-400' />
                  <h4 className='text-xl font-light text-white'>
                    Prop-Firm Tests
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Develop skills to pass prop-firm tests with practical tips,
                    tailored strategies and in-depth understanding of evaluation
                    criteria.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-neutral-900/40 border-zinc-800/30 px-4 pt-8'>
                <CardContent className='space-y-6'>
                  <Zap className='h-12 w-12 text-purple-400' />
                  <h4 className='text-xl font-light text-white'>Order Flow</h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Master Order Flow trading by understanding order flows to
                    anticipate market movements and make informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-neutral-900/40 border-zinc-800/30 px-4 pt-8'>
                <CardContent className='space-y-6'>
                  <Globe className='h-12 w-12 text-green-400' />
                  <h4 className='text-xl font-light text-white'>
                    Training Darija
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    First Trading Course by Mr. Belkhayate in Darija (Arabic),
                    making financial education accessible to Arabic-speaking
                    communities.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-neutral-900/40 border-zinc-800/30 px-4 pt-8'>
                <CardContent className='space-y-6'>
                  <Users className='h-12 w-12 text-pink-400' />
                  <h4 className='text-xl font-light text-white'>
                    Live Trading Space
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Live trading 4-5 times per week, VIP Telegram chat, trading
                    groups by market, and exclusive technical indicators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='w-full py-40 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-green-500/20 text-green-400 border-green-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Student Success
              </Badge>
              <h2 className='text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8'>
                Why Choose
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mt-4'>
                  Our Method?
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                Discover how our students transformed the way they think about
                trading using the Belkhayate Method.
              </p>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              {/* Testimonial Video Placeholders */}
              <Card className='bg-black/30 border-zinc-800/30 overflow-hidden'>
                <div className='aspect-video relative'>
                  <Image
                    src='/placeholder.svg?height=300&width=400'
                    alt='Student testimonial video'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center'>
                      <Play className='h-8 w-8 text-black ml-1' />
                    </div>
                  </div>
                </div>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-4 w-4 text-amber-400 fill-current'
                        />
                      ))}
                    </div>
                    <h4 className='text-white font-medium'>
                      Sarah M. - Morocco
                    </h4>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      "The Belkhayate Method changed my life. From unemployment
                      to managing funds for European institutions in 18 months."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-black/30 border-zinc-800/30 overflow-hidden'>
                <div className='aspect-video relative'>
                  <Image
                    src='/placeholder.svg?height=300&width=400'
                    alt='Student testimonial video'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center'>
                      <Play className='h-8 w-8 text-black ml-1' />
                    </div>
                  </div>
                </div>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-4 w-4 text-amber-400 fill-current'
                        />
                      ))}
                    </div>
                    <h4 className='text-white font-medium'>
                      Ahmed K. - Senegal
                    </h4>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      "I went from knowing nothing about trading to passing my
                      Wall Street certification. The community support is
                      incredible."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-black/30 border-zinc-800/30 overflow-hidden'>
                <div className='aspect-video relative'>
                  <Image
                    src='/placeholder.svg?height=300&width=400'
                    alt='Student testimonial video'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center'>
                      <Play className='h-8 w-8 text-black ml-1' />
                    </div>
                  </div>
                </div>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-4 w-4 text-amber-400 fill-current'
                        />
                      ))}
                    </div>
                    <h4 className='text-white font-medium'>
                      Fatima L. - Nigeria
                    </h4>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      "As a single mother, this training gave me financial
                      independence. I can now support my family while working
                      from home."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id='contact' className='w-full py-32 relative'>
          <div className='absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10'></div>
          <div className='container px-8 md:px-12 max-w-4xl mx-auto relative'>
            <div className='text-center space-y-12'>
              <div className='space-y-6'>
                <h2 className='text-4xl md:text-5xl font-medium tracking-tight text-white'>
                  Ready to Transform
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400'>
                    Your Future?
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed'>
                  Join the global community of successful traders and start your
                  journey to financial independence today.
                </p>
              </div>

              <div className='bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-zinc-800/30 p-12 max-w-xl w-full mx-auto'>
                <div className='space-y-8'>
                  <div className='grid md:grid-cols-2 gap-8'>
                    <div className='text-center space-y-4'>
                      <Mail className='h-8 w-8 text-amber-400 mx-auto' />
                      <div>
                        <div className='text-white font-semibold'>
                          Direct Contact
                        </div>
                        <div className='text-zinc-400'>
                          belkhayate@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className='text-center space-y-4'>
                      <Linkedin className='h-8 w-8 text-amber-400 mx-auto' />
                      <div>
                        <div className='text-white font-semibold'>
                          Professional Network
                        </div>
                        <div className='text-zinc-400'>
                          linkedin.com/in/belkhayate
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <Input
                      type='email'
                      placeholder='Enter your email to get started'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='bg-black/50 border-zinc-600 text-white h-12 text-lg'
                    />
                    <Button className='w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-4 text-lg transition-all duration-300'>
                      Start Your Journey
                      <ArrowRight className='ml-2 h-5 w-5' />
                    </Button>
                  </div>

                  <div className='text-center'>
                    <p className='text-zinc-400 text-sm italic'>
                      "Success isn't measured by the wealth you accumulate, but
                      by the number of lives you elevate along the way."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-black/50 border-t border-zinc-800/30 py-16'>
        <div className='container px-8 md:px-12 max-w-7xl mx-auto'>
          <div className='grid gap-12 md:grid-cols-4'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center'>
                  <Brain className='h-6 w-6 text-black' />
                </div>
                <span className='text-xl font-semibold text-white'>
                  Belkhayate Method
                </span>
              </div>
              <p className='text-zinc-400 leading-relaxed'>
                World Champion in AI Applied to Trading, transforming lives
                through democratized financial education and social impact.
              </p>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Training</h4>
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
              <h4 className='text-white font-semibold mb-4'>Impact</h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Social Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Women's Empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    African Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Free Academy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Connect</h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-zinc-800/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-zinc-500'>
              © 2025 Belkhayate Method. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <span className='text-zinc-500 text-sm'>World Champion</span>
              <span className='text-amber-400 text-sm'>Social Impact</span>
              <span className='text-zinc-500 text-sm'>AI Trading</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
