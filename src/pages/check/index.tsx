import React from 'react';
import { NextPage } from 'next';

interface Props {
  userAgent?: string;
};

const Check: NextPage<Props> = ({ userAgent }) => (
  <div className='uk-flex uk-align-center uk-text-justify uk-width-1-2 uk-margin-top'>
    Your user agent: {userAgent}
  </div>
);

Check.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  console.log(userAgent);
  return { userAgent };
}

export default Check;
