const easing = [0.9, -0.2, 0.5, 0.99]

export const fadeInUp = {
  initial: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
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
      staggerChildren: 0.33
    }
  }
};
