import { IoReturnUpBackOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Link from 'next/link'

const GoBack = ({ link }) => {
  return (
    <motion.div className='btnRow'>
      <Link href={link}>
        <motion.button
          id='goback'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }} 
          className='uk-button uk-button-default uk-button-small uk-align-left'
        >
          <IoReturnUpBackOutline
            className='backIcon'
            size='1.5rem'
            color='white'
          />
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default GoBack
