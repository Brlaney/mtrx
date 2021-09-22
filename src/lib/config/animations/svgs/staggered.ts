const easing = [0.4, 0.1, -0.3, 0.95];

export const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.8, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 2,
      ease: easing
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};
