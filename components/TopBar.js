function TopBar({ className }) {
	return (
		<div className={`fixed w-full z-50 flex justify-between items-center py-3 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg ${className}`}>
			<div className="font-bold sm:text-xl xl:text-3xl">
				<span className="text-gradient">Vanessa</span> Roycroft
			</div>
			<div>
				<a href="https://github.com/vmroycroft/vanessa-roycroft" target="_blank" rel="noopener noreferrer" title="GitHub" className="mr-6">
					GitHub
				</a>
				<a href="https://vanessaroycroft.com/Vanessa_Roycroft_Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume" className="mr-6">
					Resume
				</a>
				<a href="mailto:vmroycroft@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact">
					Contact
				</a>
			</div>
		</div>
	);
}

export default TopBar;
