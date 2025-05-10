'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "", 
  strength = 100, 
  ...props 
}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-strength, strength]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      <motion.div
        className="absolute inset-0" 
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </motion.div>
    </div>
  );
}