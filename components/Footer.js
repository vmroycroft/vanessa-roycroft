import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh } from '@fortawesome/free-regular-svg-icons';

function Footer() {
	return (
		<div className="text-center text-black font-mono text-xs sm:text-sm xl:text-base bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4">
			{/* <div className="text-center text-black font-mono text-xs xl:text-sm bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-20 pb-8"> */}
			Designed &amp; Built by Vanessa Roycroft <FontAwesomeIcon icon={faLaugh} />
		</div>
	);
}

export default Footer;
