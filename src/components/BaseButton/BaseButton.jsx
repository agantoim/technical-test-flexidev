import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function BaseButton({ buttonName, to }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
        <button onClick={handleClick}>{buttonName}</button>
    );
}

BaseButton.propTypes = {
  buttonName: PropTypes.string,
  to: PropTypes.string,
};

export default BaseButton;
