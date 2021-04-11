function Section({ title, className, children }) {
	return (
		<section className={`py-20 px-4 ${className}`}>
			<div className="max-w-prose mx-auto">
				<h1 className="text-1xl sm:text-3xl xl:text-5xl font-bold mb-4">{title}</h1>
				<div className="text-sm sm:text-base">{children}</div>
			</div>
		</section>
	);
}

export default Section;
