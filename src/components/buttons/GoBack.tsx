import { IoReturnUpBackOutline } from 'react-icons/io5'
import Link from 'next/link'

const GoBack = ({ link }) => {
  return (
    <>
      <Link href={link}>
        <button
          id='goback'
          className='uk-button uk-button-default uk-button-small uk-align-left'
        >
          <IoReturnUpBackOutline
            className='backIcon'
            size='1.5rem'
            color='white'
          />
        </button>
      </Link>
    </>
  )
}

export default GoBack
