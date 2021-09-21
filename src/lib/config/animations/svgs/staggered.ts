const easing = [0.3, 0.2, -0.2, 0.95];

export const fadeInUp = {
  initial: {
    y: 150,
    x: 150,
    opacity: 0,
    transition: { duration: 0.8, ease: easing }
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
