import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function Header({ className }) {
	return (
		<div className={`flex flex-col justify-center items-center h-screen font-bold ${className}`}>
			<div>
				<h1 className="text-4xl sm:text-6xl xl:text-7xl">
					Hi, I'm <span className="text-gradient">Vanessa</span>.
				</h1>
				<div className="text-2xl sm:text-4xl xl:text-5xl">
					<h1>I'm a full stack web developer.</h1>
					<h1>
						I <FontAwesomeIcon icon={faHeart} className="text-pink-500" /> snowboarding, running, &amp; learning.
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Header;
