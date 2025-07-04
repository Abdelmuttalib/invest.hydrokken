import { cn } from '@/lib/utils';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        'transition-bg fixed flex h-[100vh] flex-col items-center justify-center bg-black text-white',
        className
      )}
      {...props}
    >
      <div
        className='fixed inset-0 z-50 overflow-hidden pointer-events-none'
        style={
          {
            '--aurora':
              'repeating-linear-gradient(100deg,#00d4ff_10%,#0ea5e9_15%,#06b6d4_20%,#0891b2_25%,#0284c7_30%)',
            '--dark-gradient':
              'repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)',

            '--cyan-400': '#22d3ee',
            '--cyan-500': '#06b6d4',
            '--blue-400': '#60a5fa',
            '--blue-500': '#3b82f6',
            '--blue-600': '#2563eb',
            '--teal-400': '#2dd4bf',
            '--teal-500': '#14b8a6',
            '--black': '#000',
            '--transparent': 'transparent',
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-30 blur-[10px] will-change-transform`,
            `[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `[--aurora:repeating-linear-gradient(100deg,var(--cyan-400)_10%,var(--blue-400)_15%,var(--cyan-500)_20%,var(--teal-400)_25%,var(--blue-500)_30%)]`,
            `[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]`,
            `after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-screen after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_50%_0%,black_20%,var(--transparent)_80%)]`
          )}
        ></div>

        {/* Additional subtle glow layer */}
        <div className='absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-blue-950/20 pointer-events-none' />
      </div>
      {/* {children} */}
    </div>
  );
};
