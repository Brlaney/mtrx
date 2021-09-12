import { IoArrowBack } from 'react-icons/io5';

const Back = ({ props }) => {
  return (
    <>
      <IoArrowBack
        className='backIcon'
        size='1.8rem'
        {...props}
      />
    </>
  )
};

export default Back;
