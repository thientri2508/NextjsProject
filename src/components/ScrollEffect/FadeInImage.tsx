"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const FadeInImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-[250px] h-[261px] overflow-hidden"
    >
      <Image src={src} alt={alt} width={250} height={261} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default FadeInImage;
