import { IoGridOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const GoBack = () => {
  return (
    <motion.div
      className='brandDiv'
      whileHover={{
        scale: 1.2,
        transition: {
          duration: .25
        }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <IoGridOutline
        className='brandIcon'
        size='2rem'
        color='#ffffff'
      />
    </motion.div>
  )
}

export default GoBack
