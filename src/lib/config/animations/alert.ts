const easing = [0.4, 0.1, -0.3, 0.95];

export const popUp = {
  initial: {
    y: -50,
    opacity: 0,
    transition: {
      delay: 2.5,
      duration: 0.3,
      ease: easing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 0.3,
      ease: easing
    }
  }
};
