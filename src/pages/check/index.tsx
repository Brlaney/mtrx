import React from 'react';
import {
  WithUserAgentProps,
  withUserAgent
} from 'next-useragent';

class Check extends React.Component<WithUserAgentProps> {
  static async getInitialProps(ctx) {
    return { useragent: ctx.ua.source }
  };
  
  render() {
    const { ua, useragent } = this.props;
    
    console.log(ua);
    console.log(useragent);

    return (
      <>
        <p>{useragent}</p>
        {ua.isMobile ? (
          <div>Mobile device is being used</div>
        ) : (
          <div> Desktop/laptop device is being used</div>
        )}
      </>
    )
  }
};

export default withUserAgent(Check);
