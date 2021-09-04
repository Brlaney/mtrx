import { IoGridOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const GoBack = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          duration: .25
        }
      }}
    >
      <IoGridOutline
        className='brandIcon'
        size='2rem'
        color='#e5e5e5'
      />
    </motion.div>
  )
}

export default GoBack
