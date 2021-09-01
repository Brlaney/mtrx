import { IoChevronBackCircleOutline } from 'react-icons/io5'

const Back = ({props}) => {
  return (
    <>
      <IoChevronBackCircleOutline
        className='backIcon'
        size='3rem'
        {...props}
      />
    </>
  )
}

export default Back
