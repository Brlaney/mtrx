import React from 'react';
import { NextPage } from 'next';

interface Props {
  userAgent?: string;
};

const UserAgent: NextPage<Props> = ({ userAgent }) => (
  <div className='uk-container uk-height-large'>
    <div className='uk-flex uk-flex-middle uk-flex-center'>
      <div className='uk-card uk-card-secondary uk-card-large'>
        <div className='uk-flex uk-align-center uk-text-justify uk-width-1-2 uk-margin-top'>
          Your user agent: {userAgent}
        </div>
      </div>
    </div>
  </div>
);

UserAgent.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  console.log(userAgent);
  return { userAgent };
}

export default UserAgent;
