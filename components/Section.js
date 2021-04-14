function Section({ title, className, children }) {
	return (
		<>
			<hr />
			<section className={`py-20 ${className}`}>
				<div className="max-w-prose mx-auto">
					<h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold mb-6">{title}</h1>
					<div className="sm:text-lg xl:text-xl">{children}</div>
				</div>
			</section>
		</>
	);
}

export default Section;
