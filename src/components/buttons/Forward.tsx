import { IoArrowForward } from 'react-icons/io5';

const Forward = ({ props }) => {
  return (
    <>
      <IoArrowForward
        className='forwardIcon'
        size='1.8rem'
        {...props}
      />
    </>
  )
};

export default Forward;
