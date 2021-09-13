import { BiShapeTriangle } from 'react-icons/Bi';
import { motion } from 'framer-motion';

const Column2 = () => {
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
      <BiShapeTriangle
        className='columnIcon'
        size='2rem'
        color='#ffffff'
      />
    </motion.div>
  )
};

export default Column2;
