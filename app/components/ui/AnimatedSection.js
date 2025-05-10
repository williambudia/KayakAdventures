'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0.2,
  duration = 0.5,
  threshold = 0.1,
  ...props 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}