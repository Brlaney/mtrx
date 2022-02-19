import useWindowSize from '@/lib/utils/viewport';

export default function Viewport() {
  const size = useWindowSize();

  return (
    <div className='uk-container uk-height-large uk-margin-large-top'>
      <div className='uk-flex uk-flex-middle uk-flex-center'>
        <div className='uk-card uk-card-secondary uk-card-large'>
          <div
            className='uk-flex uk-align-center uk-text-justify uk-margin-top uk-padding-large'
          >
            Width: {size.width}px
          </div>
          <div
            className='uk-flex uk-align-center uk-text-justify uk-padding-large'
          >
            Height: {size.height}px
          </div>
        </div>
      </div>
    </div>
  )
};
