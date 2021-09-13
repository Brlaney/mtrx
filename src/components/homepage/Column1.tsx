import { BsGrid3X3 } from 'react-icons/Bs';
import { motion } from 'framer-motion';

const Column1 = () => {
  return (
    <motion.div
      className='column'
      whileHover={{
        scale: 1.05,
        transition: {
          duration: .25
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <BsGrid3X3
        className='columnIcon'
        size='2rem'
        color='#ffffff'
      />
    </motion.div>
  )
};

export default Column1;
