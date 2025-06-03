import { motion, useTransform } from "framer-motion";

export function ShrinkingText({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <motion.p
      style={{ scale }}
      className="text-9xl font-bold tracking-tighter sm:text-6xl text-white"
    >
      Here&apos;s some of my favourite work
    </motion.p>
  );
}
