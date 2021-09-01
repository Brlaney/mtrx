import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const Forward = ({props}) => {
  return (
    <>
      <IoChevronForwardCircleOutline
        className='forwardIcon'
        size='3rem'
        {...props}
      />
    </>
  )
}

export default Forward
