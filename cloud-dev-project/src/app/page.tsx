import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from '@/constants';

function page() {
  return (
    <div>
      <h1>font here!!</h1>
      <FontAwesomeIcon icon={faEnvelope} style={{color: COLORS.PRIMARY}}/>
    </div>
  );
}

export default page;
