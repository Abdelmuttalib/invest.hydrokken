import { cn } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';

export function SectionBadge({
  t,
  className,
}: {
  t: string;
  className?: string;
}) {
  return (
    <Badge
      className={cn(
        'bg-blue-500/20 text-blue-400 border-blue-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase',
        className
      )}
    >
      {t}
    </Badge>
  );
}

export function SectionHeading({
  t1,
  t2,
  t2ClassName,
  b,
  description,
}: {
  t1: string;
  t2: string;
  t2ClassName?: string;
  b: { t: string; className?: string };
  description: string;
}) {
  return (
    <div className='text-center mb-20'>
      <SectionBadge t={b.t} className={b.className} />
      {/* <Badge className='bg-blue-500/20 text-blue-400 border-blue-500/30 mb-8 px-6 py-3 text-sm font-light tracking-[0.15em] uppercase'>
        {t1}
      </Badge> */}
      {/* xl:text-7xl */}
      <h2 className='text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-8'>
        {t1}
        <span
          className={cn(
            'block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-light mt-4',
            t2ClassName
          )}
        >
          {t2}
        </span>
      </h2>
      <p className='text-xl text-zinc-300 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide'>
        {description}
      </p>
    </div>
  );
}
