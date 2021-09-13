// Homepage column 3 = Bridge design
import { GiCableStayedBridge } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Column3 = () => {
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
      <GiCableStayedBridge
        className='columnIcon'
        size='2rem'
        color='#ffffff'
      />
    </motion.div>
  )
};

export default Column3;
