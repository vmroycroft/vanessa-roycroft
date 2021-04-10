function Section({ title, className, children }) {
	return (
		<section className={`py-12 px-4 ${className}`}>
			<div className="max-w-prose mx-auto">
				<h1 className="text-2xl sm:text-3xl font-accent border-l-4 border-silverPink pl-3 mb-4">{title}</h1>
				<div className="text-sm sm:text-base">{children}</div>
			</div>
		</section>
	);
}

export default Section;
