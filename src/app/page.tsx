import {
  ArrowRight,
  Atom,
  Award,
  BarChart3,
  Battery,
  Building2,
  CheckCircle,
  Clock,
  Coins,
  ExternalLink,
  FileCheck,
  Globe,
  Leaf,
  Lock,
  Network,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import { ctaLink } from '@/lib/cta';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TokensInputs } from '@/components/views/home';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>
          Hydrokken - The world's first security token backed 1-to-1 by natural
          hydrogen equity, bridging clean energy and decentralized finance with
          full legal structure.
        </title>
        <meta
          name='description'
          content='The world’s first security token backed 1-to-1 by natural hydrogen equity, bridging clean energy and decentralized finance with full legal structure.'
        />
      </Head>

      <div className='flex flex-col min-h-screen bg-black'>
        {/* Header */}
        {/* <header className="px-8 lg:px-12 h-24 flex items-center border-b border-zinc-800/30 backdrop-blur-sm bg-black/95 sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-4">
          <span className="text-2xl font-light text-white tracking-[0.15em] uppercase">
            HYDROKKEN
          </span>
        </Link>
        <nav className="ml-auto flex gap-12">
          <Link
            href="#technology"
            className="text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase"
          >
            Technology
          </Link>
          <Link
            href="#hydrogen"
            className="text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase"
          >
            Hydrogen
          </Link>
          <Link
            href="#tokenomics"
            className="text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase"
          >
            Tokenomics
          </Link>
          <Link
            href="#invest"
            className="text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase"
          >
            Invest
          </Link>
          <Link
            href="#roadmap"
            className="text-sm font-light text-zinc-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.1em] uppercase"
          >
            Roadmap
          </Link>
        </nav>
        <div className="ml-12">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 tracking-[0.1em] uppercase text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20">
            Connect Wallet
          </Button>
        </div>
      </header> */}

        <main className='flex-1'>
          {/* Hero Section */}
          <section className='w-full min-h-screen relative overflow-hidden flex items-center'>
            <div className='absolute inset-0'>
              <Image
                src='https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                // src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80"
                // src="https://images.unsplash.com/photo-1644191199586-789b1d75c8c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D"
                alt='Futuristic hydrogen energy facility with glowing blue energy streams'
                fill
                className='object-cover'
                priority
                quality={100}
              />
              <div className='absolute inset-0 bg-black/70'></div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
            </div>

            <div className='container px-8 md:px-12 relative max-w-screen-2xl mx-auto'>
              <div className='grid lg:grid-cols-2 gap-20 items-center'>
                {/* Left Content */}
                <div className='space-y-16'>
                  <div className='space-y-12'>
                    <div className='inline-flex items-center space-x-3 bg-zinc-900/30 backdrop-blur-sm rounded-full px-4 text-sm md:text-base md:px-8 md:py-4 py-2 border border-emerald-500/20'>
                      <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
                      <span className='text-emerald-400 tracking-[0.15em] uppercase'>
                        World&apos;s First Natural Hydrogen Security Token
                      </span>
                    </div>

                    <h1 className='text-6xl md:text-8xl font-semibold text-white leading-[0.9] tracking-tight'>
                      HDKN
                      <span className='inline-block ml-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 font-bold'>
                        TOKEN
                      </span>
                      <span className='block text-4xl md:text-5xl lg:text-7xl text-zinc-300 mt-4'>
                        REVOLUTION
                      </span>
                    </h1>

                    <div className='space-y-8 max-w-2xl'>
                      <p className='text-2xl md:text-3xl text-white font-extralight leading-relaxed tracking-wide'>
                        The world's first security token backed by{' '}
                        <span className='text-emerald-400 font-light'>
                          natural hydrogen equity
                        </span>
                      </p>

                      <div className='w-full h-px bg-gradient-to-r from-emerald-400 to-transparent'></div>

                      {/* <p className="text-lg text-zinc-400 font-light leading-relaxed tracking-wide">
                      HDKN merges sustainable energy production with
                      cutting-edge blockchain technology, enabling investors to
                      participate in the natural hydrogen revolution while
                      offering both financial returns and environmental impact.
                    </p> */}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <Atom className='h-6 w-6 text-emerald-400' />
                        <span className='text-white font-medium text-2xl'>
                          Natural Hydrogen Backed
                        </span>
                      </div>
                      <p className='text-zinc-400'>
                        Real asset backing with verified reserves
                      </p>
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <Shield className='h-6 w-6 text-emerald-400' />
                        <span className='text-white font-medium text-2xl'>
                          Security Token
                        </span>
                      </div>
                      <p className='text-zinc-400'>
                        Regulatory compliant investment vehicle
                      </p>
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <Zap className='h-6 w-6 text-emerald-400' />
                        <span className='text-white font-medium text-2xl'>
                          Clean Energy
                        </span>
                      </div>
                      <p className='text-zinc-400'>
                        Zero-emission sustainable production
                      </p>
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <TrendingUp className='h-6 w-6 text-emerald-400' />
                        <span className='text-white font-medium text-2xl'>
                          Financial Returns
                        </span>
                      </div>
                      <p className='text-zinc-400'>
                        Dual benefit: profit and impact
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-6'>
                    <Button
                      size='lg'
                      className='bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300 shadow-xl shadow-emerald-500/20'
                      asChild
                    >
                      <a href={ctaLink} target='_blank' rel='noreferrer'>
                        Buy HDKN Now Buy HDKN Now
                        <ArrowRight className='ml-3 h-5 w-5' />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className='relative'>
                  <div className='bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-2xl rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10 overflow-hidden'>
                    {/* Card Header */}
                    {/* <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-b border-emerald-500/20 p-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                        <Zap className="h-8 w-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-medium text-white tracking-wide">
                        HDKN Token Sale
                      </h3>
                      <p className="text-emerald-400 font-light text-sm tracking-wide uppercase">
                        Natural Hydrogen Security Token
                      </p>
                    </div>
                  </div> */}

                    <div className='p-8 space-y-8'>
                      {/* Progress Section */}
                      <div className='bg-black/30 rounded-2xl p-6 border border-zinc-800/50'>
                        <div className='space-y-4'>
                          <div className='flex justify-between items-center'>
                            <span className='text-zinc-300 font-medium'>
                              Fund Raised
                            </span>
                            <span className='text-white font-semibold'>
                              $136 / $3,400,000
                            </span>
                          </div>
                          <div className='relative'>
                            <div className='w-full bg-zinc-800/80 rounded-full h-3'>
                              <div
                                className='bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full shadow-lg shadow-emerald-500/30'
                                style={{ width: '0.004%' }}
                              ></div>
                            </div>
                            <div className='absolute -top-1 left-0 w-5 h-5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/50'></div>
                          </div>
                          <div className='text-center'>
                            <span className='text-emerald-400 text-sm font-medium'>
                              0.004% Complete
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Token Price */}
                      {/* <div className="text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
                      <div className="space-y-3">
                        <div className="text-sm text-emerald-400 uppercase tracking-wider font-medium">
                          Current Price
                        </div>
                        <div className="text-4xl font-bold text-white">$34</div>
                        <div className="text-zinc-300 font-medium">
                          1 HDKN = $34 USDT
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-emerald-500/20 rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-xs font-medium uppercase tracking-wide">
                            Live Price
                          </span>
                        </div>
                      </div>
                    </div> */}

                      {/* Network Warning */}
                      <div className='flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-4'>
                        <Network className='h-5 w-5 text-amber-400 flex-shrink-0' />
                        <span className='text-amber-400 text-sm font-medium text-center'>
                          Only BSC Network Approved
                        </span>
                      </div>

                      {/* Purchase Form */}
                      <div className='space-y-6'>
                        <div className='space-y-4'>
                          <label className='text-sm text-zinc-300 font-medium uppercase tracking-wider'>
                            Payment Method
                          </label>
                          <div className='bg-black/40 rounded-xl border border-zinc-700/50 p-4'>
                            <div className='flex items-center space-x-4'>
                              <div className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg'>
                                <span className='text-black text-sm font-bold'>
                                  ₮
                                </span>
                              </div>
                              <div className='flex-1'>
                                <div className='text-white font-semibold'>
                                  USDT
                                </div>
                                <div className='text-zinc-400 text-sm'>
                                  Binance Smart Chain
                                </div>
                              </div>
                              <CheckCircle className='h-5 w-5 text-emerald-400' />
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                          <TokensInputs />
                        </div>

                        <div className='space-y-4'>
                          <Button className='w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black font-bold py-7 text-lg tracking-wide uppercase transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40'>
                            Buy HDKN Now
                            <ArrowRight className='ml-3 h-5 w-5' />
                          </Button>
                        </div>

                        <div className='text-center space-y-3'>
                          <div className='flex items-center justify-center space-x-4 text-xs text-zinc-500'>
                            <span>Affiliate Program</span>
                            <span>•</span>
                            <span>Instant Delivery</span>
                            <span>•</span>
                            <span>24/7 Support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Investment Card */}
                {/* <div className="relative">
                <div className="bg-gradient-to-br from-zinc-900/80 to-black/90 backdrop-blur-xl rounded-3xl border border-zinc-800/30 p-8 shadow-2xl">
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl text-white tracking-wide">
                        Presale Ends In
                      </h3>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            {timeLeft.days}
                          </div>
                          <div className="text-xs text-zinc-400 uppercase tracking-wide">
                            Days
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            {timeLeft.hours}
                          </div>
                          <div className="text-xs text-zinc-400 uppercase tracking-wide">
                            Hours
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            {timeLeft.minutes}
                          </div>
                          <div className="text-xs text-zinc-400 uppercase tracking-wide">
                            Minutes
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            {timeLeft.seconds}
                          </div>
                          <div className="text-xs text-zinc-400 uppercase tracking-wide">
                            Seconds
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Fund Raised</span>
                        <span className="text-white">$136 / $3,400,000</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                          style={{ width: "0.004%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-center space-y-2 py-6 border-y border-zinc-800/30">
                      <div className="text-sm text-zinc-400 uppercase tracking-wide">
                        Listing Price
                      </div>
                      <div className="text-3xl font-bold text-emerald-400">
                        $34
                      </div>
                      <div className="text-sm text-zinc-300">
                        1 HDKN = $34 USDT
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-3 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                      <Network className="h-5 w-5 text-amber-400" />
                      <span className="text-amber-400 text-sm font-medium">
                        Only BSC Network Approved
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-sm text-zinc-400 uppercase tracking-wide">
                          Payment Coin
                        </label>
                        <div className="flex items-center space-x-3 bg-zinc-800/50 rounded-lg p-3">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-black text-xs font-bold">
                              ₮
                            </span>
                          </div>
                          <span className="text-white font-medium">USDT</span>
                          <span className="text-zinc-400 text-sm ml-auto">
                            Binance Smart Chain
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-zinc-400">
                            Amount in USDT
                          </label>
                          <Input
                            type="number"
                            placeholder="0.0"
                            value={usdtAmount}
                            onChange={(e) => setUsdtAmount(e.target.value)}
                            className="bg-zinc-800/50 border-zinc-700/50 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-zinc-400">
                            HDKN Received
                          </label>
                          <Input
                            type="text"
                            value={hdknAmount}
                            readOnly
                            className="bg-zinc-800/50 border-zinc-700/50 text-emerald-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 tracking-wide uppercase">
                          <Wallet className="mr-2 h-5 w-5" />
                          Connect Wallet
                        </Button>
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-3 tracking-wide uppercase">
                          Direct Buy
                        </Button>
                      </div>
                    </div>

                    <div className="text-center">
                      <Link
                        href="#"
                        className="text-emerald-400 text-sm hover:underline"
                      >
                        Add HDKN to MetaMask
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
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
                    <div className='w-1/2 h-px bg-gradient-to-r from-blue-400 to-transparent'></div>
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
                          attached to one Hydroma share—including economic
                          rights, dividends, and exit proceeds. No abstraction,
                          no inflation.
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
                          investment opportunities, asset-backed tokens with
                          legal clarity, and clean energy alternatives with
                          strong fundamentals.
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
                          world-renowned trading innovator, embodying a new
                          class of financial innovation where clean energy meets
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
                <Card className='bg-neutral-900/50 border-zinc-800/30 p-6'>
                  <CardContent className='space-y-4'>
                    <TrendingUp className='h-8 w-8 text-blue-400' />
                    <h4 className='text-white font-medium'>ESG Investors</h4>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Seeking verifiable impact and sustainable investment
                      opportunities
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-neutral-900/50 border-zinc-800/30 p-6'>
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
                <Card className='bg-neutral-900/50 border-zinc-800/30 p-6'>
                  <CardContent className='space-y-4'>
                    <Globe className='h-8 w-8 text-purple-400' />
                    <h4 className='text-white font-medium'>Web3 Communities</h4>
                    <p className='text-zinc-400 text-sm font-extralight'>
                      Seeking legally compliant tokens with real utility
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-neutral-900/50 border-zinc-800/30 p-6'>
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

          {/* What is Natural Hydrogen */}
          <section id='hydrogen' className='w-full py-40 relative'>
            <div className='absolute inset-0'>
              <Image
                src='https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
                alt='Clean hydrogen energy production facility with blue flames'
                fill
                className='object-cover opacity-15'
              />
              <div className='absolute inset-0 bg-black/85'></div>
            </div>
            <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
              <div className='text-center mb-20'>
                <Badge className='bg-emerald-900/20 text-emerald-400 border-emerald-500/30 mb-2 px-6 py-3 text-sm tracking-[0.15em] uppercase'>
                  Revolutionary Energy Source
                </Badge>
                <h2 className='text-6xl md:text-7xl font-light text-white tracking-tight leading-tight mb-8'>
                  Natural
                  <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light ml-2 mt-4'>
                    Hydrogen
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                  Natural hydrogen represents the future of clean energy - a
                  zero-emission fuel source that occurs naturally in the Earth's
                  crust, offering unlimited potential for sustainable power
                  generation.
                </p>
              </div>

              <div className='relative mb-20'>
                {/* Background Image */}
                <Image
                  src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Hydrogen molecule structure'
                  fill
                  className='object-cover z-0 rounded-3xl'
                  priority
                />
                {/* Optional dark overlay */}
                <div className='absolute inset-0 bg-black/60 z-10 rounded-3xl' />

                {/* Foreground Content */}
                <div className='relative z-20 border rounded-xl border-zinc-500 grid lg:grid-cols-2 gap-20 items-center px-6 lg:px-12 py-20'>
                  <div className='space-y-12 text-white'>
                    <div className='space-y-8'>
                      <h3 className='text-5xl font-light tracking-wide'>
                        The Clean Energy Revolution
                      </h3>
                      <div className='w-1/2 h-px bg-gradient-to-r from-emerald-400 to-transparent'></div>
                      <p className='text-xl text-zinc-200 font-extralight leading-relaxed tracking-wide'>
                        Unlike traditional hydrogen production methods that
                        require significant energy input, natural hydrogen is
                        produced through geological processes deep within the
                        Earth...
                      </p>
                    </div>

                    <div className='space-y-8'>
                      {/* Item 1 */}
                      <div className='flex items-start space-x-6'>
                        <div className='w-12 flex-shrink-0 h-12 bg-emerald-500/20 border border-emerald-400/30 rounded-xl flex items-center justify-center'>
                          <Zap className='h-7 w-7 text-emerald-400' />
                        </div>
                        <div className='space-y-3'>
                          <h4 className='text-2xl font-light'>
                            Zero Carbon Emissions
                          </h4>
                          <p className='text-zinc-400 font-light leading-relaxed'>
                            Natural hydrogen production generates no carbon
                            dioxide...
                          </p>
                        </div>
                      </div>
                      {/* Item 2 */}
                      <div className='flex items-start space-x-6'>
                        <div className='w-12 flex-shrink-0 h-12 bg-emerald-500/20 border border-emerald-400/30 rounded-xl flex items-center justify-center'>
                          <Battery className='h-7 w-7 text-emerald-400' />
                        </div>
                        <div className='space-y-3'>
                          <h4 className='text-2xl font-light'>
                            Abundant Resource
                          </h4>
                          <p className='text-zinc-400 font-light leading-relaxed'>
                            Geological surveys indicate vast natural hydrogen
                            reserves worldwide...
                          </p>
                        </div>
                      </div>
                      {/* Item 3 */}
                      <div className='flex items-start space-x-6'>
                        <div className='w-12 flex-shrink-0 h-12 bg-emerald-500/20 border border-emerald-400/30 rounded-xl flex items-center justify-center'>
                          <Globe className='h-7 w-7 text-emerald-400' />
                        </div>
                        <div className='space-y-3'>
                          <h4 className='text-2xl font-light'>Global Impact</h4>
                          <p className='text-zinc-400 font-light leading-relaxed'>
                            Natural hydrogen can power everything from vehicles
                            to industrial processes...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Statistics */}
              <div className='max-lg:mt-16'>
                <hr className='mt-6 border-t border-zinc-800' />
                <dl className='mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
                  <div className='flex flex-col gap-y-2 border-b border-dotted border-zinc-800 pb-4 text-emerald-400'>
                    <dt className='text-base/6 text-zinc-200'>Clean Energy</dt>
                    <dd className='order-first text-6xl font-medium tracking-tight'>
                      <span>100</span>%
                    </dd>
                  </div>
                  <div className='flex flex-col gap-y-2 border-b border-dotted border-zinc-800 pb-4 text-emerald-400'>
                    <dt className='text-base/6 text-zinc-200'>Reserve Value</dt>
                    <dd className='order-first text-6xl font-medium tracking-tight'>
                      $<span>1.2B</span>+
                    </dd>
                  </div>
                  <div className='flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-zinc-800 max-sm:pb-4 text-emerald-400'>
                    <dt className='text-base/6 text-zinc-200'>Emissions</dt>
                    <dd className='order-first text-6xl font-medium tracking-tight'>
                      <span className='font-mono'>0</span> Zero
                    </dd>
                  </div>
                  <div className='flex flex-col gap-y-2 text-emerald-400'>
                    <dt className='text-base/6 text-zinc-200'>Potential</dt>
                    <dd className='order-first text-7xl font-medium tracking-tight'>
                      <span>∞</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section id='performance' className='w-full py-40 relative'>
            <div className='absolute inset-0'>
              <Image
                src='https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
                alt='Abstract financial data visualization with glowing elements'
                fill
                className='object-cover opacity-15'
              />
              <div className='absolute inset-0 bg-black/80'></div>
            </div>
            <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
              <div className='text-center mb-24'>
                <Badge className='bg-emerald-900/20 text-emerald-400 border-emerald-500/30 mb-8 px-6 py-3 text-sm tracking-[0.15em] uppercase'>
                  Unprecedented Performance
                </Badge>
                <h2 className='text-6xl md:text-7xl font-light text-white tracking-tight leading-tight mb-8'>
                  Market
                  <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light ml-2 mt-4'>
                    Dominance
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                  HYDROKKEN&apos;s inaugural performance establishes new
                  benchmarks for institutional cryptocurrency investment,
                  demonstrating unparalleled market confidence and execution
                  excellence.
                </p>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                {/* Round A Success */}
                <div className='space-y-12'>
                  <div className='space-y-8'>
                    <div className='flex items-center space-x-6'>
                      <div className='w-4 h-4 bg-emerald-400 rounded-full'></div>
                      <span className='text-emerald-400 font-light text-sm tracking-[0.2em] uppercase'>
                        Round A • Complete Success
                      </span>
                    </div>
                    <h3 className='text-5xl md:text-6xl font-extralight text-white tracking-tight leading-tight'>
                      Sold Out in
                      <span className='block text-zinc-300 font-thin mt-2'>
                        24 Hours
                      </span>
                    </h3>
                  </div>
                  <div className='space-y-8'>
                    <div className='flex justify-between items-center py-6 border-b border-zinc-800/30'>
                      <span className='text-zinc-400 font-extralight tracking-wide text-lg'>
                        Total Capital Raised
                      </span>
                      <span className='text-emerald-400 font-light text-2xl tracking-wide'>
                        $3,050,000 USDT
                      </span>
                    </div>
                    <div className='flex justify-between items-center py-6 border-b border-zinc-800/30'>
                      <span className='text-zinc-400 font-extralight tracking-wide text-lg'>
                        Market Response
                      </span>
                      <span className='text-white font-light text-2xl tracking-wide'>
                        24 Hours
                      </span>
                    </div>
                    <div className='flex justify-between items-center py-6 border-b border-zinc-800/30'>
                      <span className='text-zinc-400 font-extralight tracking-wide text-lg'>
                        Allocation Status
                      </span>
                      <span className='text-white font-light text-2xl tracking-wide'>
                        100% Filled
                      </span>
                    </div>
                    <div className='flex justify-between items-center py-6'>
                      <span className='text-zinc-400 font-extralight tracking-wide text-lg'>
                        Investor Demand
                      </span>
                      <span className='text-emerald-400 font-light text-2xl tracking-wide'>
                        340% Oversubscribed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Round B Opportunity */}
                <div className='space-y-12'>
                  <div className='space-y-8'>
                    <div className='flex items-center space-x-6'>
                      <div className='w-4 h-4 bg-zinc-600 rounded-full'></div>
                      <span className='text-zinc-400 font-light text-sm tracking-[0.2em] uppercase'>
                        Round B • Exclusive Access
                      </span>
                    </div>
                    <h3 className='text-5xl md:text-6xl font-extralight text-white tracking-tight leading-tight'>
                      Investment
                      <span className='block text-zinc-300 font-thin mt-2'>
                        Excellence
                      </span>
                    </h3>
                  </div>
                  <div className='bg-zinc-950/50 rounded-3xl border border-zinc-800/30 p-12'>
                    <div className='space-y-8'>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-zinc-400 font-extralight tracking-wide'>
                          Token Valuation
                        </span>
                        <span className='text-emerald-400 font-light text-xl tracking-wide'>
                          $32 USDT
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-zinc-400 font-extralight tracking-wide'>
                          Entry Threshold
                        </span>
                        <span className='text-white font-light text-xl tracking-wide'>
                          $320 USDT
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-zinc-400 font-extralight tracking-wide'>
                          Maximum Allocation
                        </span>
                        <span className='text-white font-light text-xl tracking-wide'>
                          $3,000,000 USDT
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4 border-b border-zinc-800/30'>
                        <span className='text-zinc-400 font-extralight tracking-wide'>
                          Token Supply
                        </span>
                        <span className='text-white font-light text-xl tracking-wide'>
                          50,000 - 100,000 HDKN
                        </span>
                      </div>
                      <div className='flex justify-between items-center py-4'>
                        <span className='text-zinc-400 font-extralight tracking-wide'>
                          Launch Timeline
                        </span>
                        <span className='text-white font-light text-xl tracking-wide'>
                          Q3 2025
                        </span>
                      </div>
                    </div>
                    <Button className='w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-5 text-lg tracking-[0.1em] uppercase mt-8 transition-all duration-300'>
                      Secure Position
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blockchain Technology */}
          <section id='technology' className='w-full py-40 bg-zinc-950/30'>
            <div className='container px-8 md:px-12 max-w-8xl mx-auto'>
              <div className='text-center mb-20'>
                <Badge className='bg-blue-900/10 text-blue-400 border-blue-500/30 mb-4 sm:mb-2 px-6 py-3 tracking-[0.15em] uppercase'>
                  Cutting-Edge Technology
                </Badge>
                <h2 className='text-6xl md:text-7xl font-light text-white tracking-tight leading-tight mb-8'>
                  Blockchain
                  <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 ml-2 to-cyan-400 font-light mt-2 sm:mt-4'>
                    Innovation
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                  HDKN leverages advanced blockchain technology to create
                  transparent, secure, and efficient tokenization of natural
                  hydrogen assets, enabling global participation in the clean
                  energy revolution.
                </p>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20'>
                <div className='relative h-72 w-full'>
                  <Image
                    src='https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Blockchain network visualization with glowing nodes'
                    fill
                    quality={100}
                    className='rounded-2xl object-cover w-full border border-zinc-400'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent'></div>
                  <div className='absolute bottom-6 left-6 right-6'>
                    <h3 className='text-2xl font-medium text-white mb-2'>
                      Decentralized Network
                    </h3>
                  </div>
                </div>

                <div className='relative h-72 w-full'>
                  <Image
                    src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Digital trading interface with cryptocurrency charts'
                    fill
                    quality={100}
                    className='rounded-2xl object-cover w-full border border-zinc-400'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent'></div>
                  <div className='absolute bottom-6 left-6 right-6'>
                    <h3 className='text-2xl font-medium text-white mb-2'>
                      Smart Contracts
                    </h3>
                  </div>
                </div>

                <div className='relative h-72 w-full'>
                  <Image
                    src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Secure digital vault with encryption symbols'
                    fill
                    quality={100}
                    className='rounded-2xl object-cover w-full border border-zinc-400'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent'></div>
                  <div className='absolute bottom-6 left-6 right-6'>
                    <h3 className='text-2xl font-medium text-white mb-2'>
                      Security First
                    </h3>
                  </div>
                </div>
              </div>

              {/* Technology Features */}
              <div className='grid md:grid-cols-2 gap-16'>
                <div className='space-y-8'>
                  <h3 className='text-3xl font-light text-white tracking-wide'>
                    Technical Excellence
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-5 w-5 text-white' />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-light text-white'>
                          ERC-20 Compatible
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Full compatibility with existing DeFi protocols and
                          wallet infrastructure
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                      <div className='w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-5 w-5 text-white' />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-light text-white'>
                          Low Transaction Fees
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          BSC network ensures minimal costs for trading and
                          transfers
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                      <div className='w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-5 w-5 text-white' />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-light text-white'>
                          Instant Settlements
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Fast block times enable immediate transaction
                          confirmation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-8'>
                  <h3 className='text-3xl font-light text-white tracking-wide'>
                    Security Features
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <Lock className='h-4 w-4 text-white' />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-light text-white'>
                          Multi-Signature Wallets
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Enhanced security through multiple authorization
                          requirements
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                      <div className='w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <Shield className='h-4 w-4 text-white' />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-light text-white'>
                          Audited Smart Contracts
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Third-party security audits ensure code integrity and
                          safety
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                      <div className='w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <Award className='h-4 w-4 text-white' />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-light text-white'>
                          Regulatory Compliance
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Full compliance with international securities
                          regulations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trading & Investment */}
          <section className='w-full py-40 relative'>
            <div className='absolute inset-0'>
              <Image
                src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
                alt='Professional trading desk with multiple monitors showing financial data'
                fill
                className='object-cover opacity-10'
              />
              <div className='absolute inset-0 bg-black/85'></div>
            </div>
            <div className='container px-8 md:px-12 max-w-8xl mx-auto relative'>
              <div className='text-center mb-20'>
                <Badge className='bg-amber-900/20 text-amber-400 border-amber-500/30 mb-2 px-6 py-3 text-sm tracking-[0.15em] uppercase'>
                  Investment Opportunity
                </Badge>
                <h2 className='text-6xl md:text-7xl font-light text-white tracking-tight leading-tight mb-8'>
                  Trading &
                  <span className='inline-block ml-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 font-light mt-4'>
                    Investment
                  </span>
                </h2>
                <p className='text-2xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                  HDKN offers institutional and retail investors unprecedented
                  access to the natural hydrogen market through a regulated,
                  transparent, and liquid investment vehicle.
                </p>
              </div>

              <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
                <div className='space-y-12'>
                  <div className='space-y-8'>
                    <h3 className='text-4xl font-light text-white tracking-wide'>
                      Investment Benefits
                    </h3>
                    <div className='w-1/2 h-px bg-gradient-to-r from-amber-400 to-transparent'></div>
                  </div>

                  <div className='space-y-8'>
                    <div className='flex items-start space-x-6'>
                      <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                        <TrendingUp className='h-6 w-6 text-amber-400' />
                      </div>
                      <div className=''>
                        <h4 className='text-2xl text-white'>Dual Returns</h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Benefit from both token appreciation and underlying
                          hydrogen asset value growth.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-6'>
                      <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                        <BarChart3 className='h-6 w-6 text-amber-400' />
                      </div>
                      <div className=''>
                        <h4 className='text-2xl text-white'>
                          Portfolio Diversification
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Add exposure to the rapidly growing clean energy
                          sector through tokenized assets.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-6'>
                      <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                        <Coins className='h-6 w-6 text-amber-400' />
                      </div>
                      <div className=''>
                        <h4 className='text-2xl text-white'>
                          Liquidity Access
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Trade 24/7 on decentralized exchanges with instant
                          settlement capabilities.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-6'>
                      <div className='w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                        <Users className='h-6 w-6 text-amber-400' />
                      </div>
                      <div className=''>
                        <h4 className='text-2xl text-white'>
                          Community Governance
                        </h4>
                        <p className='text-zinc-400 font-light leading-relaxed'>
                          Participate in key decisions affecting the hydrogen
                          asset development and management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    alt='Financial growth chart with upward trending arrows'
                    width={600}
                    height={400}
                    className='rounded-3xl'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl'></div>
                </div>
              </div>

              {/* Investment Metrics */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                <Card className='bg-neutral-900/80 border-zinc-800/80 text-center p-4'>
                  <CardContent className='space-y-3'>
                    <div className='text-3xl font-light text-amber-400'>
                      $34
                    </div>
                    <div className='text-zinc-200 font-light uppercase tracking-wide'>
                      Current Price
                    </div>
                  </CardContent>
                </Card>
                <Card className='bg-neutral-900/80 border-zinc-800/80 text-center p-4'>
                  <CardContent className='space-y-3'>
                    <div className='text-3xl font-light text-emerald-400'>
                      100K
                    </div>
                    <div className='text-zinc-200 font-light uppercase tracking-wide'>
                      Total Supply
                    </div>
                  </CardContent>
                </Card>
                <Card className='bg-neutral-900/80 border-zinc-800/80 text-center p-4'>
                  <CardContent className='space-y-3'>
                    <div className='text-3xl font-light text-blue-400'>BSC</div>
                    <div className='text-zinc-200 font-light uppercase tracking-wide'>
                      Network
                    </div>
                  </CardContent>
                </Card>
                <Card className='bg-neutral-900/80 border-zinc-800/80 text-center p-4'>
                  <CardContent className='space-y-3'>
                    <div className='text-3xl font-light text-white'>24/7</div>
                    <div className='text-zinc-200 font-light uppercase tracking-wide'>
                      Trading
                    </div>
                  </CardContent>
                </Card>
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
                    <div className='w-1/2 h-px bg-gradient-to-r from-purple-400 to-transparent'></div>
                    <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                      Based in Barcelona, Brickken transforms traditional equity
                      into legally compliant, blockchain-powered
                      assets—accessible and verifiable worldwide with over $300
                      million in tokenized assets across 16 countries.
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
                          Each HYDROKKEN token represents a full share in
                          Hydroma Inc., ensuring clear legal ownership and full
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
                          Flexible payment options supporting both
                          cryptocurrency and fiat purchases, maintaining
                          transparency and auditability.
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
                          <span className='text-zinc-300'>
                            $300M+ Tokenized
                          </span>
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
                      Built on Binance Smart Chain for fast, low-cost
                      transactions with full compatibility across major wallets
                      and DeFi protocols.
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
                  El Mostafa Belkhayate - World Champion in AI Applied to
                  Trading, Social Impact Pioneer, and the visionary mind behind
                  HYDROKKEN's mission to democratize clean energy investment.
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
                    <div className='w-1/2 h-px bg-gradient-to-r from-amber-400 to-transparent'></div>
                    <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                      "Technology must serve people — not the other way around."
                      This philosophy has guided El Mostafa's 20+ year journey
                      of building AI systems that democratize financial
                      education and empower underserved communities worldwide.
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
                    "The future of finance will be feminine. Women bring
                    emotional intelligence, long-term perspective, and ethical
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
                      Focus on empowering women with financial independence
                      rather than dependency on traditional employment
                      structures.
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
                <Badge className='bg-green-500/10 text-green-400 border-green-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
                  Essential Reading
                </Badge>
                <h2 className='text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
                  The Hydrogen
                  <span className='inline-block ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-light mt-4'>
                    Harvest
                  </span>
                </h2>
                <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                  Earth's Hidden Clean and Renewable Energy - How Natural
                  Hydrogen Could End the Climate Crisis and Transform
                  Civilization
                </p>
              </div>

              <div className='grid lg:grid-cols-2 gap-20 items-center'>
                <div className='relative'>
                  <div className='aspect-[3/4] relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20'>
                    <Image
                      // src='/placeholder.svg?height=600&width=450'
                      src='https://images.unsplash.com/photo-1557313773-74c3490a350d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    <div className='w-1/2 h-px bg-gradient-to-r from-green-400 to-transparent'></div>
                    <p className='text-lg text-zinc-300 font-extralight leading-relaxed tracking-wide'>
                      This comprehensive book explores the revolutionary
                      potential of natural hydrogen - the clean, renewable
                      energy source that forms the foundation of the HYDROKKEN
                      investment opportunity.
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
                          Detailed analysis of how natural hydrogen could end
                          the climate crisis by providing unlimited clean energy
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
                          participate in this transformational energy
                          revolution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <Button
                      size='lg'
                      className='bg-green-500 hover:bg-green-600 text-black font-medium px-12 py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300 shadow-xl shadow-green-500/20'
                      asChild
                    >
                      <a
                        href='/files/THE-HYDROGEN-HARVEST.pdf'
                        target='_blank'
                        rel='noreferrer'
                        // download
                      >
                        Download Free PDF
                        <ExternalLink className='ml-3 h-5 w-5' />
                      </a>
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
                      Economic projections, market size estimates, and
                      competitive analysis of natural hydrogen versus other
                      energy sources.
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

          {/* Roadmap */}
          <section id='roadmap' className='w-full py-40 relative'>
            <div className='absolute inset-0'>
              <Image
                src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80'
                alt='Futuristic timeline visualization with glowing pathways'
                fill
                className='object-cover opacity-5'
              />
              <div className='absolute inset-0 bg-black/90'></div>
            </div>
            <div className='container px-8 md:px-12 max-w-6xl mx-auto relative'>
              <div className='text-center mb-20'>
                <Badge className='bg-cyan-900/10 text-cyan-400 border-cyan-500/30 mb-2 px-6 py-3 text-sm tracking-[0.15em] uppercase'>
                  Development Timeline
                </Badge>
                <h2 className='text-6xl md:text-7xl font-light text-white tracking-tight leading-tight mb-8'>
                  Project
                  <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-4 ml-2'>
                    Roadmap
                  </span>
                </h2>
                <p className='text-2xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
                  Our comprehensive roadmap outlines the strategic development
                  phases of HDKN, from initial token launch to full-scale
                  hydrogen production and global market expansion.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-16 justify-items-center'>
                {/* Q1 2024 */}
                <div className='flex items-start space-x-8'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center'>
                      <CheckCircle className='h-8 w-8 text-black' />
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <h3 className='text-2xl font-light text-white'>
                        Q1 2024
                      </h3>
                      <Badge className='bg-emerald-500/20 text-emerald-400 border-emerald-500/30'>
                        Completed
                      </Badge>
                    </div>
                    <ul className='space-y-2 text-zinc-400 font-extralight'>
                      <li>• Token smart contract development and audit</li>
                      <li>• Initial hydrogen reserve verification</li>
                      <li>• Regulatory compliance framework establishment</li>
                      <li>• Core team assembly and advisory board formation</li>
                    </ul>
                  </div>
                </div>

                {/* Q2 2024 */}
                <div className='flex items-start space-x-8'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center'>
                      <Clock className='h-8 w-8 text-black' />
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <h3 className='text-2xl font-light text-white'>
                        Q2 2024
                      </h3>
                      <Badge className='bg-amber-500/20 text-amber-400 border-amber-500/30'>
                        In Progress
                      </Badge>
                    </div>
                    <ul className='space-y-2 text-zinc-400 font-extralight'>
                      <li>• Public token sale launch</li>
                      <li>• DEX listing and liquidity provision</li>
                      <li>• Community building and marketing campaign</li>
                      <li>• Partnership agreements with energy companies</li>
                    </ul>
                  </div>
                </div>

                {/* Q3 2024 */}
                <div className='flex items-start space-x-8'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-blue-500/50 rounded-full flex items-center justify-center border-2 border-blue-500'>
                      <span className='text-blue-400 font-bold'>3</span>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <h3 className='text-2xl font-light text-white'>
                        Q3 2024
                      </h3>
                      <Badge className='bg-blue-500/20 text-blue-400 border-blue-500/30'>
                        Planned
                      </Badge>
                    </div>
                    <ul className='space-y-2 text-zinc-400 font-extralight'>
                      <li>
                        • Hydrogen extraction facility construction begins
                      </li>
                      <li>• Additional exchange listings</li>
                      <li>• Governance token functionality implementation</li>
                      <li>• First quarterly dividend distribution</li>
                    </ul>
                  </div>
                </div>

                {/* Q4 2024 */}
                <div className='flex items-start space-x-8'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-purple-500/50 rounded-full flex items-center justify-center border-2 border-purple-500'>
                      <span className='text-purple-400 font-bold'>4</span>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <h3 className='text-2xl font-light text-white'>
                        Q4 2024
                      </h3>
                      <Badge className='bg-purple-500/20 text-purple-400 border-purple-500/30'>
                        Planned
                      </Badge>
                    </div>
                    <ul className='space-y-2 text-zinc-400 font-extralight'>
                      <li>• First hydrogen production milestone</li>
                      <li>• Major CEX listings (Binance, Coinbase)</li>
                      <li>• Institutional investor onboarding</li>
                      <li>• Mobile app and dashboard launch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section
            id='invest'
            className='w-full py-40 border-y border-zinc-800/30 relative'
          >
            <div className='absolute inset-0'>
              <Image
                src='https://images.unsplash.com/photo-1695779539236-362815cf2df1?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Elegant abstract composition representing growth and success'
                fill
                className='object-cover opacity-8'
              />
              <div className='absolute inset-0 bg-black/60'></div>
            </div>
            <div className='container px-8 md:px-12 max-w-6xl mx-auto relative'>
              <div className='text-center space-y-20'>
                <div className='space-y-12'>
                  <h2 className='text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight'>
                    Join the Hydrogen
                    <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-light ml-2 mt-4'>
                      Revolution
                    </span>
                  </h2>
                  <p className='text-2xl text-white leading-relaxed max-w-5xl mx-auto tracking-wide'>
                    Don&apos;t miss your opportunity to be part of the clean
                    energy revolution. HDKN represents the future of sustainable
                    investment, combining environmental impact with financial
                    returns through innovative blockchain technology.
                  </p>
                </div>

                <div className='bg-zinc-950/90 rounded-3xl border border-zinc-800/30 p-10 sm:p-16 max-w-4xl mx-auto'>
                  <div className='space-y-12'>
                    <div className='text-center space-y-6'>
                      <h3 className='text-4xl text-white tracking-wide'>
                        Secure Your HDKN Tokens
                      </h3>
                      <p className='text-zinc-300 font-extralight leading-relaxed tracking-wide text-lg'>
                        Join thousands of investors who are already
                        participating in the natural hydrogen revolution. Buy
                        HDKN tokens now and receive them immediately in your
                        wallet.
                      </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                      <div className='text-center p-8 bg-black/30 rounded-2xl border border-zinc-800/30'>
                        <div className='text-3xl text-emerald-400 mb-3'>
                          $34
                        </div>
                        <div className='text-zinc-200 text-sm tracking-[0.2em] uppercase'>
                          Current Price
                        </div>
                      </div>
                      <div className='text-center p-8 bg-black/30 rounded-2xl border border-zinc-800/30'>
                        <div className='text-3xl text-white mb-3'>100K</div>
                        <div className='text-zinc-200 text-sm tracking-[0.2em] uppercase'>
                          Total Supply
                        </div>
                      </div>
                      <div className='text-center p-8 bg-black/30 rounded-2xl border border-zinc-800/30'>
                        <div className='text-3xl text-amber-400 mb-3'>BSC</div>
                        <div className='text-zinc-200 text-sm tracking-[0.2em] uppercase'>
                          Network
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-6'>
                      <Button
                        className='flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-6 text-xl tracking-[0.1em] uppercase transition-all duration-500'
                        asChild
                      >
                        <a href={ctaLink} target='_blank' rel='noreferrer'>
                          Buy HDKN Now
                          <ArrowRight className='ml-4 h-6 w-6' />
                        </a>
                      </Button>
                    </div>

                    <div className='text-center space-y-4'>
                      <p className='text-zinc-400 text-sm font-extralight'>
                        Affiliate Program Available • Add to MetaMask • Instant
                        Token Delivery
                      </p>
                      <p className='text-zinc-500 text-xs font-extralight'>
                        © 2025 Powered by 0xFactory
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
                <p className='text-zinc-400 font-light leading-relaxed tracking-wide'>
                  The world's first security token backed by natural hydrogen
                  equity, merging sustainable energy production with
                  cutting-edge blockchain technology for the future of clean
                  investment.
                </p>
                <p className='text-emerald-400 text-sm font-light tracking-[0.1em] uppercase'>
                  Powering the Clean Energy Revolution
                </p>
              </div>
              <div>
                <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                  Token
                </h4>
                <ul className='space-y-4'>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Buy HDKN
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Add to MetaMask
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Contract Address
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Tokenomics
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                  Technology
                </h4>
                <ul className='space-y-4'>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Natural Hydrogen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Blockchain Tech
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Smart Contracts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Security Audit
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-white font-light tracking-[0.1em] uppercase mb-8'>
                  Community
                </h4>
                <ul className='space-y-4'>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-zinc-400 hover:text-emerald-400 font-extralight transition-colors tracking-wide'
                    >
                      Roadmap
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
            </div>
            <div className='border-t border-zinc-800/30 mt-20 pt-12 flex flex-col md:flex-row justify-between items-center'>
              <p className='text-zinc-500 tracking-wide'>
                © 2025 HYDROKKEN. All rights reserved.
              </p>
              <div className='flex flex-row flex-wrap gap-4 sm:space-x-12 mt-8 md:mt-0 w-full sm:w-auto'>
                <span className='text-zinc-500 text-sm tracking-[0.1em] uppercase'>
                  BSC Network
                </span>
                <span className='text-emerald-400 text-sm tracking-[0.1em] uppercase'>
                  Security Token
                </span>
                <span className='text-zinc-500 text-sm tracking-[0.1em] uppercase'>
                  Regulated
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
