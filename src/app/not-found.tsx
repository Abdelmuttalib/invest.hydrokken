// import { Metadata } from 'next';
// import * as React from 'react';
// import { RiAlarmWarningFill } from 'react-icons/ri';

// export const metadata: Metadata = {
//   title: 'Not Found',
// };

// export default function NotFound() {
//   return (
//     <main>
//       <section className='bg-white'>
//         <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
//           <RiAlarmWarningFill
//             size={60}
//             className='drop-shadow-glow animate-flicker text-red-500'
//           />
//           <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
//           <a href='/'>Back to home</a>
//         </div>
//       </section>
//     </main>
//   );
// }

import { ArrowLeft, Home, Search } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md bg-white/10 backdrop-blur-md border-white/20'>
        <CardContent className='p-8 text-center'>
          <div className='mb-6'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center'>
              <Search className='w-8 h-8 text-blue-400' />
            </div>
            <h1 className='text-6xl font-bold text-white mb-2'>404</h1>
            <h2 className='text-xl font-semibold text-white mb-2'>
              Page Not Found
            </h2>
            <p className='text-gray-300 text-sm'>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className='space-y-3'>
            <Button
              asChild
              className='w-full bg-blue-600 hover:bg-blue-700 text-white'
            >
              <Link href='/'>
                <Home className='w-4 h-4 mr-2' />
                Go to Homepage
              </Link>
            </Button>

            <Button
              variant='outline'
              className='w-full border-white/20 text-white hover:bg-white/10'
            >
              <ArrowLeft className='w-4 h-4 mr-2' />
              Go Back
            </Button>
          </div>

          <div className='mt-8 pt-6 border-t border-white/10'>
            <p className='text-xs text-gray-400'>
              Need help? Contact our{' '}
              <Link
                href='/contact'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
