import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './button';
import LinkButton from './LinkButton';

function Error() {
 
const error=useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data||error.message}</p>
      <LinkButton to='-1'></LinkButton>
      
    </div>
  );
}

export default Error;
