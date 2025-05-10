'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';

export default function FeatureCard({ title, description, icon, bgColorClass = "bg-primary-100" }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className={`rounded-full ${bgColorClass} w-14 h-14 flex items-center justify-center mx-auto mb-4`}>
            {icon}
          </div>
          
          <h3 className="text-xl font-semibold text-center text-primary mb-3 font-montserrat">{title}</h3>
          
          <p className="text-muted-foreground text-center font-opensans">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}