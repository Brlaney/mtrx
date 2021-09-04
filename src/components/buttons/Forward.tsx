import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Forward = ({ props }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: {
          duration: .2
        }
      }}
    >
      <IoChevronForwardCircleOutline
        className='forwardIcon'
        size='3rem'
        {...props}
      />
    </motion.div>
  )
}

export default Forward
