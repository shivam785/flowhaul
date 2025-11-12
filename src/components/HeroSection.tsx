'use client';
import { motion } from 'motion/react';
import { MotionGrid } from './ui/motion-grid';

export default function HeroSection() {
  return (
    <div className='relative w-full min-h-screen'>
      <MotionGrid
        direction='left'
        speed='3s'
        opacity={0.15}
        enableGlow={true}
        lineColor='20, 184, 166'
        className='absolute inset-0 -z-10 w-full h-full'
      />

      <div className='relative mx-auto max-w-7xl flex flex-col items-center px-4 pt-48 pb-20'>
        <h1 className='relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300'>
          {'A modern open source design system.'
            .split(' ')
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: 'easeInOut',
                }}
                className='mr-2 inline-block'
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className='relative z-10 mx-auto max-w-xl mt-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400'
        >
          Build consistent, reusable interfaces for the web.
        </motion.p>
      </div>
    </div>
  );
}
