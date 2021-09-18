import React from 'react';
import { useUserAgent } from 'next-useragent';

export default props => {
  let ua;
  if (props.uaString) {
    ua = useUserAgent(props.uaString);
  } else {
    ua = useUserAgent(window.navigator.userAgent);
  }

  return (
    <div>
      <p>{ua.source}</p>
      {ua.isMobile ? (
        <div>Mobile device is being used</div>
      ) : (
        <div> Desktop/laptop device is being used</div>
      )}
    </div>
  )
};

export function getServerSideProps(context) {
  return {
    props: {
      uaString: context.req.headers['user-agent']
    }
  }
};
