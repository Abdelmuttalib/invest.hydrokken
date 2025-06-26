'use client';

import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Globe,
  Heart,
  Linkedin,
  Mail,
  Play,
  Shield,
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

export default function FounderLanding() {
  const [email, setEmail] = useState('');

  return (
    <div className='flex flex-col min-h-screen bg-black'>
      {/* Header */}
      <header className='px-8 lg:px-12 h-24 flex items-center border-b border-zinc-800/30 backdrop-blur-sm bg-black/95 sticky top-0 z-50'>
        <Link href='/' className='flex items-center space-x-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20'>
            <Brain className='h-7 w-7 text-black' />
          </div>
          <span className='text-2xl font-light text-white tracking-[0.15em] uppercase'>
            Belkhayate Method
          </span>
        </Link>
        <nav className='ml-auto flex gap-12'>
          <Link
            href='#about'
            className='text-sm font-light text-zinc-400 hover:text-amber-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            About
          </Link>
          <Link
            href='#training'
            className='text-sm font-light text-zinc-400 hover:text-amber-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            Training
          </Link>
          <Link
            href='#impact'
            className='text-sm font-light text-zinc-400 hover:text-amber-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            Impact
          </Link>
          <Link
            href='#contact'
            className='text-sm font-light text-zinc-400 hover:text-amber-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            Contact
          </Link>
        </nav>
        <div className='ml-12'>
          <Button className='bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 tracking-[0.1em] uppercase text-sm transition-all duration-300 shadow-lg shadow-amber-500/20'>
            Start Learning
          </Button>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full min-h-screen relative overflow-hidden flex items-center'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Professional trading environment with advanced technology'
              fill
              className='object-cover object-center'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-amber-950/50'></div>
            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
          </div>

          <div className='container px-8 md:px-12 relative max-w-8xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-20 items-center'>
              {/* Left Content */}
              <div className='space-y-16'>
                <div className='space-y-12'>
                  <div className='inline-flex items-center space-x-3 bg-zinc-900/30 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-500/20'>
                    <div className='w-2 h-2 bg-amber-400 rounded-full animate-pulse'></div>
                    <span className='text-amber-400 font-light text-sm tracking-[0.15em] uppercase'>
                      World Champion in AI Applied to Trading
                    </span>
                  </div>

                  <h1 className='text-6xl md:text-7xl font-extralight text-white leading-[0.9] tracking-tight'>
                    EL MOSTAFA
                    <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 mt-4 font-thin'>
                      BELKHAYATE
                    </span>
                  </h1>

                  <div className='space-y-8 max-w-2xl'>
                    <p className='text-2xl md:text-3xl text-zinc-200 font-extralight leading-relaxed tracking-wide'>
                      <span className='text-amber-400 font-light'>
                        Technology must serve people
                      </span>{' '}
                      — not the other way around.
                    </p>

                    <div className='w-24 h-px bg-gradient-to-r from-amber-400 to-transparent'></div>

                    <p className='text-lg text-zinc-400 font-extralight leading-relaxed tracking-wide'>
                      Creator of the revolutionary Belkhayate Method, co-founder
                      of Springbox AI, and social impact pioneer who has
                      transformed over 50,000 lives through democratized
                      financial education.
                    </p>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className='grid grid-cols-2 gap-8'>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Trophy className='h-6 w-6 text-amber-400' />
                      <span className='text-white font-medium'>
                        World Champion 2025
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      AI Applied to Trading - AIM Congress
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Users className='h-6 w-6 text-amber-400' />
                      <span className='text-white font-medium'>
                        50,000+ Trained
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Global financial education impact
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Globe className='h-6 w-6 text-amber-400' />
                      <span className='text-white font-medium'>
                        20+ Countries
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      African youth empowerment mission
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Heart className='h-6 w-6 text-amber-400' />
                      <span className='text-white font-medium'>
                        2,000+ Children
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Orphanage technology initiatives
                    </p>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-6'>
                  <Button
                    size='lg'
                    className='bg-amber-500 hover:bg-amber-600 text-black font-medium px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300 shadow-xl shadow-amber-500/20'
                  >
                    Start Training
                    <ArrowRight className='ml-3 h-5 w-5' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border border-zinc-600/50 text-white hover:bg-zinc-900/50 hover:border-amber-500/50 font-light px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300'
                  >
                    <Play className='mr-3 h-5 w-5' />
                    Watch Story
                  </Button>
                </div>
              </div>

              {/* Right Content - Professional Portrait */}
              <div className='relative'>
                <div className='aspect-[4/5] relative rounded-3xl overflow-hidden'>
                  <Image
                    src='/placeholder.svg?height=600&width=480'
                    alt='El Mostafa Belkhayate - Professional Portrait'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                  <div className='absolute bottom-8 left-8 right-8'>
                    <div className='bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30'>
                      <div className='space-y-4'>
                        <h3 className='text-white font-medium text-xl'>
                          30+ Years Experience
                        </h3>
                        <div className='space-y-2 text-sm'>
                          <div className='text-amber-400'>
                            • $100M to $1.3B fund growth (2004-2006)
                          </div>
                          <div className='text-amber-400'>
                            • Bloomberg #1 Commodity Fund (2006)
                          </div>
                          <div className='text-amber-400'>
                            • Best Technical Analyst Paris (2009)
                          </div>
                          <div className='text-amber-400'>
                            • 120% Annual Return Champion (2012)
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

        {/* About Section */}
        <section id='about' className='w-full py-40 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-amber-500/20 text-amber-400 border-amber-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Visionary Leader
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Transforming Lives Through
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 font-light mt-4'>
                  Financial Education
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                At the intersection of cutting-edge technology and profound
                social impact, El Mostafa Belkhayate has dedicated over two
                decades to democratizing financial education and empowering
                underserved communities worldwide.
              </p>
            </div>

            <div className='grid lg:grid-cols-3 gap-12 mb-20'>
              <div className='space-y-8'>
                <div className='w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center'>
                  <BookOpen className='h-8 w-8 text-amber-400' />
                </div>
                <h3 className='text-2xl font-light text-white'>
                  Education as Liberation
                </h3>
                <p className='text-zinc-400 font-extralight leading-relaxed'>
                  "Financial illiteracy is one of the most effective tools of
                  oppression. When people understand how money and markets work,
                  they can't be exploited as easily."
                </p>
              </div>

              <div className='space-y-8'>
                <div className='w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center'>
                  <Target className='h-8 w-8 text-amber-400' />
                </div>
                <h3 className='text-2xl font-light text-white'>
                  Empowerment Over Dependency
                </h3>
                <p className='text-zinc-400 font-extralight leading-relaxed'>
                  Rather than creating dependency, El Mostafa focuses on
                  teaching understanding. Technology augments human intelligence
                  rather than replacing it, emphasizing long-term wealth
                  building strategies.
                </p>
              </div>

              <div className='space-y-8'>
                <div className='w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center'>
                  <Users className='h-8 w-8 text-amber-400' />
                </div>
                <h3 className='text-2xl font-light text-white'>
                  Community Over Competition
                </h3>
                <p className='text-zinc-400 font-extralight leading-relaxed'>
                  His programs emphasize collaborative learning where alumni
                  mentor new students, success stories inspire participation,
                  and knowledge sharing creates network effects benefiting
                  entire regions.
                </p>
              </div>
            </div>

            {/* Impact Statistics */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>50K+</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  People Trained
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>12K+</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Wall Street Certified
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>3.5K+</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Managing Funds
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>400%</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Average Income Increase
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact Section */}
        <section id='impact' className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Educational technology and community empowerment'
              fill
              className='object-cover opacity-10'
            />
            <div className='absolute inset-0 bg-black/90'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
            <div className='text-center mb-20'>
              <Badge className='bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Global Impact
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                A Legacy of
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light mt-4'>
                  Social Innovation
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                From Moroccan orphanages to African youth empowerment, discover
                how technology and education create lasting change in
                communities worldwide.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h3 className='text-4xl font-light text-white tracking-wide'>
                    Orphanage Technology Initiative
                  </h3>
                  <div className='w-24 h-px bg-gradient-to-r from-emerald-400 to-transparent'></div>
                  <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                    For 15 years, El Mostafa has personally equipped orphanages
                    across Morocco with computers and internet access,
                    establishing free digital learning centers where he
                    volunteers teaching financial markets education.
                  </p>
                </div>

                <div className='space-y-8'>
                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Heart className='h-6 w-6 text-emerald-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        2,000+ Children Impacted
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Over 2,000 orphaned children have received foundational
                        financial education, with dozens now working remotely
                        for international financial institutions.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Globe className='h-6 w-6 text-emerald-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        African Youth Empowerment
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        20+ years across Francophone and Anglophone Africa,
                        conducting AI trading workshops in Morocco, Tunisia,
                        Senegal, Mali, Nigeria, Kenya, South Africa, and 10+
                        other countries.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Users className='h-6 w-6 text-emerald-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Free Global Academy
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Comprehensive free trading courses across social media
                        platforms in multiple languages (Arabic, French,
                        English), breaking down traditional cost barriers to
                        financial education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Educational technology and community empowerment in action'
                  width={600}
                  height={400}
                  className='rounded-3xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl'></div>
                <div className='absolute bottom-8 left-8 right-8'>
                  <div className='bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30'>
                    <h4 className='text-white font-medium mb-4'>
                      Revolutionary Approach
                    </h4>
                    <p className='text-zinc-300 text-sm'>
                      Rather than extracting talent from Africa, his programs
                      enable young Africans to serve international markets while
                      remaining in their communities, creating local wealth and
                      stability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Women's Empowerment Section */}
        <section className='w-full py-40 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-pink-500/20 text-pink-400 border-pink-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Women's Leadership
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                The Future of Finance
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-light mt-4'>
                  Will Be Feminine
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                "Women bring emotional intelligence, long-term perspective, and
                ethical considerations essential for sustainable economic
                systems. My role is to ensure they have the tools and knowledge
                to lead this transformation."
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-12 mb-20'>
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto'>
                  <TrendingUp className='h-8 w-8 text-pink-400' />
                </div>
                <h3 className='text-xl font-light text-white'>
                  Superior Performance
                </h3>
                <p className='text-zinc-400 text-sm font-extralight leading-relaxed'>
                  Women consistently outperform men in trading education
                  programs, demonstrating superior risk management and more
                  disciplined long-term thinking.
                </p>
              </div>

              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto'>
                  <Users className='h-8 w-8 text-pink-400' />
                </div>
                <h3 className='text-xl font-light text-white'>
                  Community Focus
                </h3>
                <p className='text-zinc-400 text-sm font-extralight leading-relaxed'>
                  Greater commitment to community benefit over individual gain,
                  with natural collaborative learning approaches that create
                  lasting impact.
                </p>
              </div>

              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto'>
                  <Shield className='h-8 w-8 text-pink-400' />
                </div>
                <h3 className='text-xl font-light text-white'>
                  Financial Independence
                </h3>
                <p className='text-zinc-400 text-sm font-extralight leading-relaxed'>
                  50% scholarship allocation reserved for women, with female
                  mentorship networks and childcare-friendly scheduling for
                  mothers in developing regions.
                </p>
              </div>
            </div>

            <div className='bg-black/30 backdrop-blur-sm rounded-3xl border border-pink-500/20 p-12'>
              <div className='text-center space-y-8'>
                <h3 className='text-3xl font-light text-white'>
                  Seeking Transformational Leadership
                </h3>
                <p className='text-lg text-zinc-300 font-extralight leading-relaxed max-w-3xl mx-auto'>
                  "I've spent 20 years creating tools and systems that empower
                  others. Now I want to find a woman who can take these
                  resources and build something even more
                  transformational—something that doesn't just teach people to
                  participate in existing systems, but creates entirely new
                  systems that serve humanity better."
                </p>
                <Button className='bg-pink-500 hover:bg-pink-600 text-black font-medium px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300'>
                  Join the Mission
                  <ArrowRight className='ml-3 h-5 w-5' />
                </Button>
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
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Belkhayate Method
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-light mt-4'>
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
              <Card className='bg-black/30 border-zinc-800/30 p-8 relative overflow-hidden'>
                <div className='absolute top-0 right-0 bg-blue-500 text-black px-4 py-2 text-sm font-medium'>
                  POPULAR
                </div>
                <CardContent className='space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-light text-white'>
                      Basics Package
                    </h3>
                    <div className='flex items-baseline space-x-2'>
                      <span className='text-4xl font-light text-blue-400'>
                        €695
                      </span>
                      <span className='text-zinc-400 line-through'>€817</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-blue-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Basics" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-blue-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Gold" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-blue-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
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
              <Card className='bg-black/30 border-zinc-800/30 p-8 relative overflow-hidden'>
                <div className='absolute top-0 right-0 bg-emerald-500 text-black px-4 py-2 text-sm font-medium'>
                  BEST VALUE
                </div>
                <CardContent className='space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-light text-white'>
                      Advanced Package
                    </h3>
                    <div className='flex items-baseline space-x-2'>
                      <span className='text-4xl font-light text-emerald-400'>
                        €1,134
                      </span>
                      <span className='text-zinc-400 line-through'>€1,416</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Basics" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Gold" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Management tests" training (€479.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-emerald-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
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
              <Card className='bg-black/30 border-zinc-800/30 p-8 relative overflow-hidden'>
                <div className='absolute top-0 right-0 bg-amber-500 text-black px-4 py-2 text-sm font-medium'>
                  COMPLETE
                </div>
                <CardContent className='space-y-8'>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-light text-white'>
                      Premium Package
                    </h3>
                    <div className='flex items-baseline space-x-2'>
                      <span className='text-4xl font-light text-amber-400'>
                        €1,551
                      </span>
                      <span className='text-zinc-400 line-through'>€2,066</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Basics" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Gold" training (€359.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Management tests" training (€479.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
                        "Order book" training (€479.4)
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='h-5 w-5 text-amber-400 flex-shrink-0' />
                      <span className='text-zinc-300 text-sm'>
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
              <Card className='bg-black/30 border-zinc-800/30 p-6'>
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

              <Card className='bg-black/30 border-zinc-800/30 p-6'>
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

              <Card className='bg-black/30 border-zinc-800/30 p-6'>
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

              <Card className='bg-black/30 border-zinc-800/30 p-6'>
                <CardContent className='space-y-6'>
                  <Zap className='h-12 w-12 text-purple-400' />
                  <h4 className='text-xl font-light text-white'>Order Flow</h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Master Order Flow trading by understanding order flows to
                    anticipate market movements and make informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-black/30 border-zinc-800/30 p-6'>
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

              <Card className='bg-black/30 border-zinc-800/30 p-6'>
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
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Why Choose
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-light mt-4'>
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

        {/* Contact Section */}
        <section id='contact' className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Professional contact and collaboration'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/90'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-6xl mx-auto relative'>
            <div className='text-center space-y-20'>
              <div className='space-y-12'>
                <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight'>
                  Ready to Transform
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 font-light mt-4'>
                    Your Future?
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-5xl mx-auto tracking-wide'>
                  Join thousands of successful traders who have transformed
                  their lives through the Belkhayate Method. Start your journey
                  to financial independence today.
                </p>
              </div>

              <div className='bg-black/60 backdrop-blur-xl rounded-3xl border border-zinc-800/30 p-16 max-w-4xl mx-auto'>
                <div className='space-y-12'>
                  <div className='text-center space-y-6'>
                    <h3 className='text-4xl font-extralight text-white tracking-wide'>
                      Get Started Today
                    </h3>
                    <p className='text-zinc-300 font-extralight leading-relaxed tracking-wide text-lg'>
                      Choose your training package and join our global community
                      of successful traders. For collaboration inquiries and
                      partnerships, reach out directly.
                    </p>
                  </div>

                  <div className='space-y-6'>
                    <Input
                      type='email'
                      placeholder='Enter your email address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='bg-black/50 border-zinc-600 text-white h-14 text-lg'
                    />
                    <Button className='w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-6 text-xl tracking-[0.1em] uppercase transition-all duration-500'>
                      Start Your Journey
                      <ArrowRight className='ml-4 h-6 w-6' />
                    </Button>
                  </div>

                  <div className='grid grid-cols-2 gap-8'>
                    <div className='text-center space-y-4'>
                      <Mail className='h-8 w-8 text-amber-400 mx-auto' />
                      <div>
                        <div className='text-white font-medium'>Email</div>
                        <div className='text-zinc-400 text-sm'>
                          belkhayate@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className='text-center space-y-4'>
                      <Linkedin className='h-8 w-8 text-amber-400 mx-auto' />
                      <div>
                        <div className='text-white font-medium'>LinkedIn</div>
                        <div className='text-zinc-400 text-sm'>
                          linkedin.com/in/belkhayate
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='text-center space-y-4'>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Seeking female leadership for transformational social
                      impact projects
                    </p>
                    <p className='text-zinc-500 text-xs font-extralight'>
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
      <footer className='bg-black border-t border-zinc-800/30 py-20'>
        <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
          <div className='grid gap-16 md:grid-cols-4'>
            <div className='space-y-8'>
              <div className='flex items-center space-x-5'>
                <div className='w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center'>
                  <Brain className='h-7 w-7 text-black' />
                </div>
                <span className='text-3xl font-extralight text-white tracking-[0.2em] uppercase'>
                  Belkhayate
                </span>
              </div>
              <p className='text-zinc-400 font-extralight leading-relaxed tracking-wide'>
                World Champion in AI Applied to Trading, creator of the
                revolutionary Belkhayate Method, and social impact pioneer
                transforming lives through financial education.
              </p>
              <p className='text-amber-400 text-sm font-light tracking-[0.1em] uppercase'>
                Technology Serving Humanity
              </p>
            </div>
            <div>
              <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                Training
              </h4>
              <ul className='space-y-4'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Base Trading
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Gold Trading
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Prop-Firm Tests
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Live Trading Space
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                Impact
              </h4>
              <ul className='space-y-4'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Social Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Women's Empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    African Youth Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Free Global Academy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                Connect
              </h4>
              <ul className='space-y-4'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-amber-400 font-extralight transition-colors tracking-wide'
                  >
                    Media Inquiries
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-zinc-800/30 mt-20 pt-12 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-zinc-500 font-extralight tracking-wide'>
              © 2025 BELKHAYATE METHOD. All rights reserved.
            </p>
            <div className='flex space-x-12 mt-8 md:mt-0'>
              <span className='text-zinc-500 text-sm font-extralight tracking-[0.1em] uppercase'>
                World Champion
              </span>
              <span className='text-amber-400 text-sm font-light tracking-[0.1em] uppercase'>
                Social Impact
              </span>
              <span className='text-zinc-500 text-sm font-extralight tracking-[0.1em] uppercase'>
                AI Trading
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
