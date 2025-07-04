import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

import { PageContainer } from '@/components/common/page-container';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className='relative bg-black'>
      <AuroraBackground />
      <section className='bg-black'>
        <PageContainer>
          <div className=' flex min-h-screen flex-col items-center justify-center text-center text-white space-y-6'>
            <div className='mt-8 space-y-2'>
              <h1 className='text-4xl md:text-5xl text-white'>
                <span className='font-mono bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 bg-clip-text text-transparent'>
                  404
                </span>
              </h1>
              <h3 className='text-3xl md:text-4xl text-white'>
                page not found!
              </h3>
            </div>
            <p className='text-gray-300 mb-6'>
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className='grid grid-cols-1 gap-4 mt-4'>
              <Button asChild>
                <Link href='/'>
                  <HomeIcon className='w-5 h-5' />
                  Go to Home
                </Link>
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
