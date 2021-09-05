import { IoReturnUpBackOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Link from 'next/link'

const GoBack = ({ link }) => {
  return (
    <motion.div>
      <Link href={link}>
        <motion.button
          id='goback'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className='uk-button uk-button-default uk-button-small uk-align-left'
        >
          <IoReturnUpBackOutline
            className='backIcon'
            size='1.5rem'
            color='white'
          />
        </motion.button>
      </Link>
      <div className='btnRow' />
    </motion.div>
  )
}

export default GoBack
