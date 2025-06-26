import {
  Atom,
  Award,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle,
  Coins,
  ExternalLink,
  FileCheck,
  Globe,
  Leaf,
  Lock,
  Mail,
  Play,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
      {/* Header */}
      <header className='px-8 lg:px-12 h-24 flex items-center border-b border-zinc-800/30 backdrop-blur-sm bg-black/95 sticky top-0 z-50'>
        <Link href='/' className='flex items-center space-x-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20'>
            <Leaf className='h-7 w-7 text-black' />
          </div>
          <span className='text-2xl font-light text-white tracking-[0.15em] uppercase'>
            HYDROKKEN
          </span>
        </Link>
        <nav className='ml-auto flex gap-12'>
          <Link
            href='#about'
            className='text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            About
          </Link>
          <Link
            href='#technology'
            className='text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            Technology
          </Link>
          <Link
            href='#tokenomics'
            className='text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            Tokenomics
          </Link>
          <Link
            href='#infrastructure'
            className='text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase'
          >
            Infrastructure
          </Link>
        </nav>
        <div className='ml-12'>
          <Button
            className='bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-8 py-3 tracking-[0.1em] uppercase text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20'
            onClick={() =>
              window.open('https://platform.hydrokken.com', '_blank')
            }
          >
            Launch Platform
            <ExternalLink className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section with CTA */}
        <section className='w-full min-h-screen relative overflow-hidden flex items-center'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Futuristic hydrogen energy facility with glowing blue energy streams'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-emerald-950/50'></div>
            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
          </div>

          <div className='container px-8 md:px-12 relative max-w-8xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-20 items-center'>
              {/* Left Content */}
              <div className='space-y-16'>
                <div className='space-y-12'>
                  <div className='inline-flex items-center space-x-3 bg-zinc-900/30 backdrop-blur-sm rounded-full px-8 py-4 border border-emerald-500/20'>
                    <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
                    <span className='text-emerald-400 font-light text-sm tracking-[0.15em] uppercase'>
                      World's First Natural Hydrogen Security Token
                    </span>
                  </div>

                  <h1 className='text-6xl md:text-8xl font-extralight text-white leading-[0.9] tracking-tight'>
                    HYDROKKEN
                    <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 mt-4 font-thin'>
                      SECURITY TOKEN
                    </span>
                  </h1>

                  <div className='space-y-8 max-w-2xl'>
                    <p className='text-2xl md:text-3xl text-zinc-200 font-extralight leading-relaxed tracking-wide'>
                      1-to-1 backed by{' '}
                      <span className='text-emerald-400 font-light'>
                        real equity shares
                      </span>{' '}
                      in natural hydrogen pioneer Hydroma Inc.
                    </p>

                    <div className='w-24 h-px bg-gradient-to-r from-emerald-400 to-transparent'></div>

                    <p className='text-lg text-zinc-400 font-extralight leading-relaxed tracking-wide'>
                      Built on Binance Smart Chain via Brickken's regulated
                      tokenization platform. Each token represents full
                      shareholder rights in the world's cleanest energy source.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className='grid grid-cols-2 gap-8'>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Atom className='h-6 w-6 text-emerald-400' />
                      <span className='text-white font-medium'>
                        1:1 Equity Backed
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Real Hydroma Inc. shares, not derivatives
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Shield className='h-6 w-6 text-emerald-400' />
                      <span className='text-white font-medium'>
                        EU Regulated
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Brickken STO compliance & legal framework
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Zap className='h-6 w-6 text-emerald-400' />
                      <span className='text-white font-medium'>
                        Natural Hydrogen
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Zero-emission, naturally occurring energy
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <Lock className='h-6 w-6 text-emerald-400' />
                      <span className='text-white font-medium'>
                        Limited Supply
                      </span>
                    </div>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      500,000 tokens max - no minting, no dilution
                    </p>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-6'>
                  <Button
                    size='lg'
                    className='bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300 shadow-xl shadow-emerald-500/20'
                    onClick={() =>
                      window.open(
                        'https://platform.hydrokken.com/buy',
                        '_blank'
                      )
                    }
                  >
                    Buy HDKN Tokens
                    <ExternalLink className='ml-3 h-5 w-5' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border border-zinc-600/50 text-white hover:bg-zinc-900/50 hover:border-emerald-500/50 font-light px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300'
                  >
                    <Play className='mr-3 h-5 w-5' />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Right Content - Token Value & Email Capture */}
              <div className='relative space-y-8'>
                {/* Token Value Breakdown */}
                <div className='bg-black/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 p-8 shadow-2xl'>
                  <div className='space-y-8'>
                    <div className='text-center space-y-4'>
                      <div className='w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto'>
                        <BarChart3 className='h-6 w-6 text-black' />
                      </div>
                      <h3 className='text-xl font-medium text-white'>
                        Token Value Breakdown
                      </h3>
                    </div>

                    <div className='space-y-6'>
                      <div className='text-center py-6 border-y border-zinc-800/50'>
                        <div className='text-4xl font-bold text-emerald-400 mb-2'>
                          $36
                        </div>
                        <div className='text-zinc-400 text-sm'>
                          Current HDKN Price (USDT)
                        </div>
                      </div>

                      <div className='space-y-4'>
                        <div className='flex justify-between items-center'>
                          <span className='text-zinc-400 text-sm'>
                            Hydroma Share Value
                          </span>
                          <span className='text-white font-medium'>$34.20</span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-zinc-400 text-sm'>
                            Tokenization Premium
                          </span>
                          <span className='text-emerald-400 font-medium'>
                            $1.80
                          </span>
                        </div>
                        <div className='flex justify-between items-center border-t border-zinc-800/50 pt-4'>
                          <span className='text-white font-medium'>
                            Total Token Value
                          </span>
                          <span className='text-emerald-400 font-bold'>
                            $36.00
                          </span>
                        </div>
                      </div>

                      <div className='bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20'>
                        <div className='text-center'>
                          <div className='text-emerald-400 text-sm font-medium mb-2'>
                            Limited Time Offer
                          </div>
                          <div className='text-white text-lg font-bold'>
                            500,000 Tokens Available
                          </div>
                          <div className='text-zinc-400 text-xs mt-1'>
                            No minting • No dilution • Real equity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Capture */}
                <div className='bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-700/50 p-8'>
                  <div className='space-y-6'>
                    <div className='text-center space-y-3'>
                      <Mail className='h-8 w-8 text-emerald-400 mx-auto' />
                      <h3 className='text-lg font-medium text-white'>
                        Get Early Access
                      </h3>
                      <p className='text-zinc-400 text-sm'>
                        Join our investor list for exclusive updates and
                        priority access
                      </p>
                    </div>

                    <div className='text-center'>
                      <div className='text-xs text-zinc-500 mb-2'>
                        Referral Program Active
                      </div>
                      <div className='text-emerald-400 text-sm font-medium'>
                        Earn 5% commission on referrals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Hydrokken Company */}
        <section id='about' className='w-full py-40 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-blue-500/20 text-blue-400 border-blue-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Company Overview
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                About
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-light mt-4'>
                  Hydrokken
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                The world's first security token fully backed 1-to-1 by shares
                in a natural hydrogen company, bridging clean energy and
                decentralized finance with full legal structure and investor
                protection.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h3 className='text-4xl font-light text-white tracking-wide'>
                    Our Foundation
                  </h3>
                  <div className='w-24 h-px bg-gradient-to-r from-blue-400 to-transparent'></div>
                  <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                    Hydrokken originates from Krechendo Managers, which owns
                    500,000 shares in Hydroma Inc., the global pioneer in
                    natural hydrogen exploration. These shares—representing
                    approximately 0.264% of Hydroma Inc.—have been tokenized
                    using Brickken's security token infrastructure.
                  </p>
                </div>

                <div className='space-y-8'>
                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Building2 className='h-6 w-6 text-blue-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Real Equity Backing
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Each Hydrokken token represents 100% of the rights
                        attached to one Hydroma share—including economic rights,
                        dividends, and exit proceeds. No abstraction, no
                        inflation.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Globe className='h-6 w-6 text-blue-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Global Impact
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Addressing the historic demand for verified ESG
                        investment opportunities, asset-backed tokens with legal
                        clarity, and clean energy alternatives with strong
                        fundamentals.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Users className='h-6 w-6 text-blue-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Leadership
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Led by Mostafa Belkhayate, founder of Springbox AI and
                        world-renowned trading innovator, embodying a new class
                        of financial innovation where clean energy meets
                        intelligent capital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt="Modern corporate headquarters representing Hydrokken's professional foundation"
                  width={600}
                  height={400}
                  className='rounded-3xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl'></div>
                <div className='absolute bottom-8 left-8 right-8'>
                  <div className='bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50'>
                    <h4 className='text-white font-medium mb-4'>
                      What Makes Hydrokken Unique
                    </h4>
                    <div className='space-y-3 text-sm'>
                      <div className='flex items-center space-x-3'>
                        <CheckCircle className='h-4 w-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-zinc-300'>
                          1 Token = 1 Hydroma Share
                        </span>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <CheckCircle className='h-4 w-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-zinc-300'>
                          Tokenized by Brickken (EU Regulated)
                        </span>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <CheckCircle className='h-4 w-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-zinc-300'>
                          Powered by Springbox AI
                        </span>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <CheckCircle className='h-4 w-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-zinc-300'>
                          Environmental Utility & CO₂ Calculator
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <Card className='bg-black/30 border-zinc-800/30 p-6'>
                <CardContent className='space-y-4'>
                  <TrendingUp className='h-8 w-8 text-blue-400' />
                  <h4 className='text-white font-medium'>ESG Investors</h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Seeking verifiable impact and sustainable investment
                    opportunities
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-6'>
                <CardContent className='space-y-4'>
                  <Building2 className='h-8 w-8 text-emerald-400' />
                  <h4 className='text-white font-medium'>
                    Institutional Investors
                  </h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Interested in real-world asset (RWA) tokens with legal
                    clarity
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-6'>
                <CardContent className='space-y-4'>
                  <Globe className='h-8 w-8 text-purple-400' />
                  <h4 className='text-white font-medium'>Web3 Communities</h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Seeking legally compliant tokens with real utility
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-6'>
                <CardContent className='space-y-4'>
                  <Users className='h-8 w-8 text-amber-400' />
                  <h4 className='text-white font-medium'>
                    Sustainability Leaders
                  </h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Promoting clean energy and environmental responsibility
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Professional portrait setting representing leadership and innovation'
              fill
              className='object-cover opacity-5'
            />
            <div className='absolute inset-0 bg-black/95'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
            <div className='text-center mb-20'>
              <Badge className='bg-amber-500/20 text-amber-400 border-amber-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Visionary Leadership
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Meet the
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 font-light mt-4'>
                  Founder
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                El Mostafa Belkhayate - World Champion in AI Applied to Trading,
                Social Impact Pioneer, and the visionary mind behind HYDROKKEN's
                mission to democratize clean energy investment.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
              <div className='relative'>
                <div className='aspect-[4/5] relative rounded-3xl overflow-hidden'>
                  <Image
                    src='https://bknmaster-master-dapppublicbucket.s3.amazonaws.com/6e259fee-5f59-4c6c-b547-19e634882b4a/publish/assets/teamImage0.png'
                    alt='El Mostafa Belkhayate - Founder of HYDROKKEN and Springbox AI'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                  <div className='absolute bottom-8 left-8 right-8'>
                    <div className='bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50'>
                      <h3 className='text-white font-medium text-xl mb-2'>
                        El Mostafa Belkhayate
                      </h3>
                      <div className='space-y-2 text-sm'>
                        <div className='text-amber-400'>
                          World Champion in AI Applied to Trading
                        </div>
                        <div className='text-emerald-400'>
                          Co-founder, Springbox AI
                        </div>
                        <div className='text-zinc-300'>
                          Social Impact Pioneer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h3 className='text-4xl font-light text-white tracking-wide'>
                    Technology Serving Humanity
                  </h3>
                  <div className='w-24 h-px bg-gradient-to-r from-amber-400 to-transparent'></div>
                  <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                    "Technology must serve people — not the other way around."
                    This philosophy has guided El Mostafa's 20+ year journey of
                    building AI systems that democratize financial education and
                    empower underserved communities worldwide.
                  </p>
                </div>

                <div className='space-y-8'>
                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Award className='h-6 w-6 text-amber-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Global Recognition
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        World Champion in AI Applied to Trading (AIM Congress
                        2025), generating $15,000 in 6 minutes with Springbox
                        AI. Featured in documentaries and recognized as a
                        Financial Education Pioneer.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Users className='h-6 w-6 text-amber-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Social Impact Legacy
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Over 50,000 individuals trained through free global
                        trading academies, with 12,000+ Wall Street
                        certifications completed. Established digital learning
                        centers in Moroccan orphanages, impacting 2,000+
                        children.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Globe className='h-6 w-6 text-amber-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        African Empowerment Mission
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        20+ years across Francophone and Anglophone Africa,
                        conducting AI trading workshops in 20+ countries.
                        Enabling youth to serve global markets while remaining
                        in their communities, creating local wealth and
                        stability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statistics */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>50K+</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  People Trained
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>20+</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Countries Impacted
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>2K+</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Orphans Educated
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-amber-400'>400%</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Average Income Increase
                </div>
              </div>
            </div>

            {/* Women's Empowerment Focus */}
            <div className='bg-black/30 backdrop-blur-sm rounded-3xl border border-zinc-800/30 p-12'>
              <div className='text-center mb-12'>
                <h3 className='text-3xl font-light text-white mb-6'>
                  Champion of Women's Economic Leadership
                </h3>
                <p className='text-lg text-zinc-300 font-extralight leading-relaxed max-w-3xl mx-auto'>
                  "The future of finance will be feminine. Women bring emotional
                  intelligence, long-term perspective, and ethical
                  considerations essential for sustainable economic systems."
                </p>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center space-y-4'>
                  <div className='w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto'>
                    <TrendingUp className='h-8 w-8 text-pink-400' />
                  </div>
                  <h4 className='text-white font-medium'>
                    Superior Performance
                  </h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Women consistently outperform men in trading education
                    programs, showing superior risk management and disciplined
                    thinking.
                  </p>
                </div>
                <div className='text-center space-y-4'>
                  <div className='w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto'>
                    <Users className='h-8 w-8 text-pink-400' />
                  </div>
                  <h4 className='text-white font-medium'>Community Focus</h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    50% scholarship allocation reserved for women, with female
                    mentorship networks and childcare-friendly scheduling.
                  </p>
                </div>
                <div className='text-center space-y-4'>
                  <div className='w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto'>
                    <Shield className='h-8 w-8 text-pink-400' />
                  </div>
                  <h4 className='text-white font-medium'>
                    Financial Independence
                  </h4>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Focus on empowering women with financial independence rather
                    than dependency on traditional employment structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Hydrogen Harvest Book Section */}
        <section className='w-full py-40 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-green-500/20 text-green-400 border-green-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Essential Reading
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                The Hydrogen
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-light mt-4'>
                  Harvest
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                Earth's Hidden Clean and Renewable Energy - How Natural Hydrogen
                Could End the Climate Crisis and Transform Civilization
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-20 items-center'>
              <div className='relative'>
                <div className='aspect-[3/4] relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20'>
                  <Image
                    src='/placeholder.svg?height=600&width=450'
                    alt='The Hydrogen Harvest book cover'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                  <div className='absolute bottom-8 left-8 right-8'>
                    <div className='bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30'>
                      <h3 className='text-white font-medium text-xl mb-2'>
                        The Hydrogen Harvest
                      </h3>
                      <p className='text-green-400 text-sm mb-3'>
                        Earth's Hidden Clean and Renewable Energy
                      </p>
                      <p className='text-zinc-300 text-sm'>
                        The definitive guide to natural hydrogen and its
                        potential to revolutionize global energy systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h3 className='text-4xl font-light text-white tracking-wide'>
                    The Science Behind HYDROKKEN
                  </h3>
                  <div className='w-24 h-px bg-gradient-to-r from-green-400 to-transparent'></div>
                  <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                    This comprehensive book explores the revolutionary potential
                    of natural hydrogen - the clean, renewable energy source
                    that forms the foundation of the HYDROKKEN investment
                    opportunity.
                  </p>
                </div>

                <div className='space-y-8'>
                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Atom className='h-6 w-6 text-green-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Natural Hydrogen Fundamentals
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Deep dive into the geological processes that create
                        natural hydrogen, its abundance worldwide, and why it
                        represents the ultimate clean energy solution.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Globe className='h-6 w-6 text-green-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Climate Crisis Solution
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Detailed analysis of how natural hydrogen could end the
                        climate crisis by providing unlimited clean energy
                        without the environmental costs of traditional
                        renewables.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <TrendingUp className='h-6 w-6 text-green-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Investment Opportunity
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Economic analysis of the natural hydrogen market,
                        investment potential, and how early investors can
                        participate in this transformational energy revolution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='space-y-6'>
                  <Button
                    size='lg'
                    className='bg-green-500 hover:bg-green-600 text-black font-medium px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300 shadow-xl shadow-green-500/20'
                  >
                    Download Free PDF
                    <ExternalLink className='ml-3 h-5 w-5' />
                  </Button>
                  <p className='text-zinc-400 text-sm font-extralight'>
                    Essential reading for understanding the science and
                    investment potential behind HYDROKKEN
                  </p>
                </div>
              </div>
            </div>

            {/* Book Highlights */}
            <div className='mt-20 grid md:grid-cols-3 gap-8'>
              <Card className='bg-black/30 border-zinc-800/30 p-8'>
                <CardContent className='space-y-6'>
                  <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center'>
                    <CheckCircle className='h-6 w-6 text-green-400' />
                  </div>
                  <h4 className='text-xl font-light text-white'>
                    Scientific Foundation
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Comprehensive research on natural hydrogen geology,
                    extraction methods, and environmental impact assessments.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-8'>
                <CardContent className='space-y-6'>
                  <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center'>
                    <BarChart3 className='h-6 w-6 text-green-400' />
                  </div>
                  <h4 className='text-xl font-light text-white'>
                    Market Analysis
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Economic projections, market size estimates, and competitive
                    analysis of natural hydrogen versus other energy sources.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-8'>
                <CardContent className='space-y-6'>
                  <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center'>
                    <Zap className='h-6 w-6 text-green-400' />
                  </div>
                  <h4 className='text-xl font-light text-white'>
                    Future Vision
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Roadmap for global energy transformation and how natural
                    hydrogen could reshape civilization's relationship with
                    energy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Equity-Backed Proof */}
        <section className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Legal documents and contracts representing equity backing'
              fill
              className='object-cover opacity-10'
            />
            <div className='absolute inset-0 bg-black/85'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
            <div className='text-center mb-20'>
              <Badge className='bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Verified Backing
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Equity-Backed
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light mt-4'>
                  Proof
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                Complete transparency and legal verification of our 1-to-1
                equity backing through auditable smart contracts and regulatory
                compliance.
              </p>
            </div>

            <div className='grid lg:grid-cols-3 gap-12 mb-20'>
              <div className='relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Legal documentation and verification process'
                  width={400}
                  height={300}
                  className='rounded-2xl w-full transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-light text-white mb-2'>
                    Legal Documentation
                  </h3>
                  <p className='text-zinc-300 text-sm font-extralight'>
                    European legal opinion, token sale agreement, and
                    shareholder mapping
                  </p>
                </div>
              </div>

              <div className='relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Smart contract audit and security verification'
                  width={400}
                  height={300}
                  className='rounded-2xl w-full transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-light text-white mb-2'>
                    Smart Contract Audit
                  </h3>
                  <p className='text-zinc-300 text-sm font-extralight'>
                    Auditable smart contracts ensuring immutable proof of equity
                    on-chain
                  </p>
                </div>
              </div>

              <div className='relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Financial transparency and reporting'
                  width={400}
                  height={300}
                  className='rounded-2xl w-full transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-light text-white mb-2'>
                    Transparency Reports
                  </h3>
                  <p className='text-zinc-300 text-sm font-extralight'>
                    Regular reporting on share custody and token-to-equity
                    mapping
                  </p>
                </div>
              </div>
            </div>

            {/* Proof Metrics */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>500K</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Hydroma Shares Held
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>
                  0.264%
                </div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Hydroma Ownership
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>1:1</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Token-Share Ratio
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>100%</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Rights Transfer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brickken Infrastructure */}
        <section id='infrastructure' className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Advanced blockchain infrastructure and technology'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/85'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
            <div className='text-center mb-20'>
              <Badge className='bg-purple-500/20 text-purple-400 border-purple-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Trusted Infrastructure
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Powered by
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-light mt-4'>
                  Brickken
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                Europe's leading platform for real-world asset tokenization,
                providing the technological robustness, regulatory compliance,
                and global reach that powers HYDROKKEN's security token
                infrastructure.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h3 className='text-4xl font-light text-white tracking-wide'>
                    Why Brickken
                  </h3>
                  <div className='w-24 h-px bg-gradient-to-r from-purple-400 to-transparent'></div>
                  <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                    Based in Barcelona, Brickken transforms traditional equity
                    into legally compliant, blockchain-powered assets—accessible
                    and verifiable worldwide with over $300 million in tokenized
                    assets across 16 countries.
                  </p>
                </div>

                <div className='space-y-8'>
                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Coins className='h-6 w-6 text-purple-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        One Token = One Share
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Each HYDROKKEN token represents a full share in Hydroma
                        Inc., ensuring clear legal ownership and full
                        shareholder rights.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <FileCheck className='h-6 w-6 text-purple-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Advanced KYC/AML
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Streamlined investor registration with automated
                        compliance checks, ensuring full regulatory adherence
                        while minimizing friction.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Wallet className='h-6 w-6 text-purple-400' />
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-light text-white'>
                        Crypto & Fiat Integration
                      </h4>
                      <p className='text-zinc-400 font-extralight leading-relaxed'>
                        Flexible payment options supporting both cryptocurrency
                        and fiat purchases, maintaining transparency and
                        auditability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Brickken platform interface showing tokenization dashboard'
                  width={600}
                  height={400}
                  className='rounded-3xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl'></div>
                <div className='absolute bottom-8 left-8 right-8'>
                  <div className='bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50'>
                    <h4 className='text-white font-medium mb-4'>
                      Brickken Advantages
                    </h4>
                    <div className='grid grid-cols-2 gap-4 text-sm'>
                      <div className='flex items-center space-x-2'>
                        <CheckCircle className='h-4 w-4 text-purple-400 flex-shrink-0' />
                        <span className='text-zinc-300'>BSC Network</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <CheckCircle className='h-4 w-4 text-purple-400 flex-shrink-0' />
                        <span className='text-zinc-300'>EU Regulated</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <CheckCircle className='h-4 w-4 text-purple-400 flex-shrink-0' />
                        <span className='text-zinc-300'>$300M+ Tokenized</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <CheckCircle className='h-4 w-4 text-purple-400 flex-shrink-0' />
                        <span className='text-zinc-300'>16 Countries</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Features */}
            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='bg-black/30 border-zinc-800/30 p-8'>
                <CardContent className='space-y-6'>
                  <Shield className='h-12 w-12 text-purple-400' />
                  <h4 className='text-xl font-light text-white'>
                    Legal Framework
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Complete legal documentation including European legal
                    opinion, token sale agreements, and institutional-grade
                    investor protections.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-8'>
                <CardContent className='space-y-6'>
                  <Zap className='h-12 w-12 text-emerald-400' />
                  <h4 className='text-xl font-light text-white'>
                    Scalable Technology
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Built on Binance Smart Chain for fast, low-cost transactions
                    with full compatibility across major wallets and DeFi
                    protocols.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-black/30 border-zinc-800/30 p-8'>
                <CardContent className='space-y-6'>
                  <Award className='h-12 w-12 text-amber-400' />
                  <h4 className='text-xl font-light text-white'>
                    Proven Track Record
                  </h4>
                  <p className='text-zinc-400 font-extralight leading-relaxed'>
                    Market-tested protocols across multiple industries, with
                    HYDROKKEN featured as a flagship case study demonstrating
                    live execution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Natural Hydrogen Technology */}
        <section id='technology' className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Clean hydrogen energy production facility with blue flames'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/85'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
            <div className='text-center mb-20'>
              <Badge className='bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Revolutionary Energy Source
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                Natural
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light mt-4'>
                  Hydrogen
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                The world's cleanest energy source, occurring naturally in the
                Earth's crust with zero emissions and unlimited potential for
                sustainable power generation.
              </p>
            </div>

            <div className='grid lg:grid-cols-3 gap-12 mb-20'>
              <div className='relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Hydrogen molecule structure with glowing atoms'
                  width={400}
                  height={300}
                  className='rounded-2xl w-full transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-light text-white mb-2'>
                    Zero Emissions
                  </h3>
                  <p className='text-zinc-300 text-sm font-extralight'>
                    Natural hydrogen production generates no carbon dioxide
                  </p>
                </div>
              </div>

              <div className='relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Renewable energy wind turbines in clean environment'
                  width={400}
                  height={300}
                  className='rounded-2xl w-full transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-light text-white mb-2'>
                    Abundant Resource
                  </h3>
                  <p className='text-zinc-300 text-sm font-extralight'>
                    Vast natural hydrogen reserves worldwide ensure long-term
                    supply
                  </p>
                </div>
              </div>

              <div className='relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Global energy infrastructure network'
                  width={400}
                  height={300}
                  className='rounded-2xl w-full transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-xl font-light text-white mb-2'>
                    Global Impact
                  </h3>
                  <p className='text-zinc-300 text-sm font-extralight'>
                    Powers vehicles to industrial processes, revolutionizing
                    energy
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>100%</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Clean Energy
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>
                  $1.2B+
                </div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Reserve Value
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>Zero</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Emissions
                </div>
              </div>
              <div className='text-center space-y-4'>
                <div className='text-4xl font-light text-emerald-400'>∞</div>
                <div className='text-zinc-400 text-sm font-light uppercase tracking-wide'>
                  Potential
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id='tokenomics' className='w-full py-40 bg-zinc-950/30'>
          <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
            <div className='text-center mb-20'>
              <Badge className='bg-purple-500/20 text-purple-400 border-purple-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                Token Economics
              </Badge>
              <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                HDKN
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-light mt-4'>
                  Tokenomics
                </span>
              </h2>
              <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                Simple, transparent tokenomics with a fixed supply of 500,000
                tokens, each representing one share in Hydroma Inc. with full
                shareholder rights and no dilution.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h3 className='text-4xl font-light text-white tracking-wide'>
                    Token Structure
                  </h3>
                  <div className='w-24 h-px bg-gradient-to-r from-purple-400 to-transparent'></div>
                </div>

                <div className='space-y-8'>
                  <div className='bg-black/30 rounded-2xl p-8 border border-zinc-800/30'>
                    <div className='space-y-6'>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-white font-light'>
                          Total Supply
                        </span>
                        <span className='text-emerald-400 font-light text-xl'>
                          500,000 HDKN
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-white font-light'>
                          Current Price
                        </span>
                        <span className='text-emerald-400 font-light text-xl'>
                          $36 USDT
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-white font-light'>
                          Market Cap
                        </span>
                        <span className='text-white font-light text-xl'>
                          $18M
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-white font-light'>Network</span>
                        <span className='text-amber-400 font-light text-xl'>
                          BSC
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4'>
                        <span className='text-white font-light'>
                          Backing Ratio
                        </span>
                        <span className='text-emerald-400 font-light text-xl'>
                          1:1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Financial data visualization with pie charts and analytics'
                  width={600}
                  height={400}
                  className='rounded-3xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center space-y-6'>
                    <div className='w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto'>
                      <Calculator className='h-10 w-10 text-black' />
                    </div>
                    <h3 className='text-2xl font-light text-white'>
                      Key Features
                    </h3>
                    <div className='space-y-3'>
                      <div className='text-emerald-400 font-light'>
                        No Minting • No Dilution
                      </div>
                      <div className='text-white font-light'>
                        Real Equity Backing
                      </div>
                      <div className='text-amber-400 font-light'>
                        Full Shareholder Rights
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className='w-full py-40 relative'>
          <div className='absolute inset-0'>
            <Image
              src='https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
              alt='Elegant abstract composition representing growth and success'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/90'></div>
          </div>
          <div className='container px-8 md:px-12 max-w-6xl mx-auto relative'>
            <div className='text-center space-y-20'>
              <div className='space-y-12'>
                <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight'>
                  Start Your Investment
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light mt-4'>
                    Journey Today
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-5xl mx-auto tracking-wide'>
                  Join the clean energy revolution with HYDROKKEN. Own real
                  equity in the world's first natural hydrogen company through
                  regulated, transparent, and legally compliant security tokens.
                </p>
              </div>

              <div className='bg-black/60 backdrop-blur-xl rounded-3xl border border-zinc-800/30 p-16 max-w-4xl mx-auto'>
                <div className='space-y-12'>
                  <div className='text-center space-y-6'>
                    <h3 className='text-4xl font-extralight text-white tracking-wide'>
                      Ready to Invest?
                    </h3>
                    <p className='text-zinc-300 font-extralight leading-relaxed tracking-wide text-lg'>
                      Access our secure tokenization platform powered by
                      Brickken. Complete KYC verification and purchase HDKN
                      tokens with crypto or fiat.
                    </p>
                  </div>

                  <div className='grid grid-cols-3 gap-8'>
                    <div className='text-center p-8 bg-black/30 rounded-2xl border border-zinc-800/30'>
                      <div className='text-3xl font-extralight text-emerald-400 mb-3'>
                        $36
                      </div>
                      <div className='text-zinc-500 text-sm font-light tracking-[0.2em] uppercase'>
                        Current Price
                      </div>
                    </div>
                    <div className='text-center p-8 bg-black/30 rounded-2xl border border-zinc-800/30'>
                      <div className='text-3xl font-extralight text-white mb-3'>
                        500K
                      </div>
                      <div className='text-zinc-500 text-sm font-light tracking-[0.2em] uppercase'>
                        Max Supply
                      </div>
                    </div>
                    <div className='text-center p-8 bg-black/30 rounded-2xl border border-zinc-800/30'>
                      <div className='text-3xl font-extralight text-amber-400 mb-3'>
                        1:1
                      </div>
                      <div className='text-zinc-500 text-sm font-light tracking-[0.2em] uppercase'>
                        Equity Ratio
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-6'>
                    <Button
                      className='flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-6 text-xl tracking-[0.1em] uppercase transition-all duration-500'
                      onClick={() =>
                        window.open(
                          'https://platform.hydrokken.com/buy',
                          '_blank'
                        )
                      }
                    >
                      Buy HDKN Tokens
                      <ExternalLink className='ml-4 h-6 w-6' />
                    </Button>
                    <Button
                      className='flex-1 bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-6 text-xl tracking-[0.1em] uppercase transition-all duration-500'
                      onClick={() =>
                        window.open(
                          'https://platform.hydrokken.com/register',
                          '_blank'
                        )
                      }
                    >
                      Create Account
                      <ExternalLink className='ml-4 h-6 w-6' />
                    </Button>
                  </div>

                  <div className='text-center space-y-4'>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      EU Regulated • KYC/AML Compliant • Instant Token Delivery
                    </p>
                    <p className='text-zinc-500 text-xs font-extralight'>
                      Powered by Brickken • Built on BSC
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
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center'>
                  <Leaf className='h-7 w-7 text-black' />
                </div>
                <span className='text-3xl font-extralight text-white tracking-[0.2em] uppercase'>
                  Hydrokken
                </span>
              </div>
              <p className='text-zinc-400 font-extralight leading-relaxed tracking-wide'>
                The world's first security token backed 1-to-1 by natural
                hydrogen equity, bridging clean energy and decentralized finance
                with full legal structure.
              </p>
              <p className='text-emerald-400 text-sm font-light tracking-[0.1em] uppercase'>
                Powered by Brickken • Built on BSC
              </p>
            </div>
            <div>
              <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                Platform
              </h4>
              <ul className='space-y-4'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    onClick={() =>
                      window.open(
                        'https://platform.hydrokken.com/buy',
                        '_blank'
                      )
                    }
                  >
                    Buy HDKN Tokens
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    onClick={() =>
                      window.open(
                        'https://platform.hydrokken.com/register',
                        '_blank'
                      )
                    }
                  >
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Referral Program
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Investor Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                Company
              </h4>
              <ul className='space-y-4'>
                <li>
                  <Link
                    href='#about'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    About Hydrokken
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Hydroma Inc.
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Legal Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Whitepaper
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                Support
              </h4>
              <ul className='space-y-4'>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    KYC Support
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                  >
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-zinc-800/30 mt-20 pt-12 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-zinc-500 font-extralight tracking-wide'>
              © 2025 HYDROKKEN. All rights reserved. Powered by Brickken.
            </p>
            <div className='flex space-x-12 mt-8 md:mt-0'>
              <span className='text-zinc-500 text-sm font-extralight tracking-[0.1em] uppercase'>
                EU Regulated
              </span>
              <span className='text-emerald-400 text-sm font-light tracking-[0.1em] uppercase'>
                Security Token
              </span>
              <span className='text-zinc-500 text-sm font-extralight tracking-[0.1em] uppercase'>
                BSC Network
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
