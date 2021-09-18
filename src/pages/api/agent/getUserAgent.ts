import * as React from 'react';
import { useUserAgent } from 'next-useragent';

export default props => {
  const [isMobile, setIsMobile] = React.useState('');
  let ua;

  if (props.uaString) {
    ua = useUserAgent(props.uaString)
  } else {
    ua = useUserAgent(window.navigator.userAgent)
  };

  if (ua.isMobile) {
    setIsMobile('y');
  } else {
    setIsMobile('n');
  }

  return isMobile;
};

export function getServerSideProps(context) {
  return {
    props: {
      uaString: context.req.headers['user-agent']
    }
  }
};

// <div>
//   <p>{ ua.source }</p>
//   { ua.isMobile ? (
//     <MobileContent />
//   ) : (
//     <DesktopContent />
//   ) }
// </div>
