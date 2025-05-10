'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, icon, bgColorClass }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-2">
          <div className={`rounded-full ${bgColorClass || 'bg-primary-100'} w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
            {icon}
          </div>
          <CardTitle className="text-xl font-bold text-center text-primary mb-2 font-montserrat">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}