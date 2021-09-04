import { IoReturnUpBackOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Link from 'next/link'

const GoBack = ({ link }) => {
  return (
    <motion.div className='btnRow'>
      <Link href={link}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          id='goback'
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
