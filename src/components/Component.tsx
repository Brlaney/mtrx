import { motion } from 'framer-motion';
import { useMediaQuery } from '@/lib/utils/hooks';

const Component = () => {
  const isSmall = useMediaQuery('(min-width: 1360px)');
  // const isSmall = useIsSmall()
  const variants = isSmall
    ? {
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
      },
      exit: {
        opacity: 1,
        scale: 1,
        y: 500,
      },
    }
    : {
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        y: -10,
      },
    };

  return (
    <motion.div initial="exit" animate="animate" exit="exit">Animated</motion.div>
  );
}

export default Component;
