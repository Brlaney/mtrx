const easing = [0.5, -0.03, 0.06, 1];

export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: i + 20,
    },
  }),
  hidden: { opacity: 0 },
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
