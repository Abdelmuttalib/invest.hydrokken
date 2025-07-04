'use client';

import { HomeIcon, RefreshCwIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { PageContainer } from '@/components/common/page-container';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('ERROR: ', error);
  }, [error]);

  return (
    <main className='relative bg-black'>
      <AuroraBackground />
      <section className='bg-black'>
        <PageContainer>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-white space-y-6'>
            <h1 className='mt-8 text-4xl md:text-5xl text-white'>
              <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 bg-clip-text text-transparent'>
                Oops
              </span>
              , something went wrong!
            </h1>
            <p className='text-gray-300 mb-6'>
              An unexpected error occurred while loading this page. We're
              working to fix it.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
              <Button asChild>
                <Link href='/'>
                  <HomeIcon className='w-5 h-5' />
                  Go to Home
                </Link>
              </Button>
              <Button className='text-cyan-500' onClick={reset}>
                {/* icon */}
                <RefreshCwIcon className='w-5 h-5' />
                Try Again
              </Button>
            </div>
            <p className='text-xs text-gray-400 mt-6'>
              If the problem persists, please contact support or try again
              later.
            </p>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
