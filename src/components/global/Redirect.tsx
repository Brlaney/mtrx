import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to)
  }, [to])
  return null
};

export default Redirect;

/* Usage: 

  const [shouldRedirect, setShouldRedirect] = useState(false);
  if (shouldRedirect) {
    return <Redirect to='/create/success' />
  };

  if (errorCompanies) {
    return <div>An error occured (companies): {errorCompanies.message}</div>;
  };
*/