import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Back = ({ props }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: {
          duration: .2
        }
      }}
    >
      <IoChevronBackCircleOutline
        className='backIcon'
        size='3rem'
        {...props}
      />
    </motion.div>
  )
}

export default Back
