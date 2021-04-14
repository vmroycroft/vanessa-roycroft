import Section from '../components/Section';
import FlexItem from '../components/FlexItem';

function AboutMe() {
	return (
		<Section title="About Me">
			<p className="mb-4">
				I'm a well-rounded, hard-working team player with 8 years of experience throughout the software development life cycle. I'm dedicated to efficiently solving problems
				and providing an exceptional user experience through thoughtful web application design and development.
			</p>
			<p className="mb-4">
				I write uncluttered and understandable code, as well as the requirements specifications, software design, and user documentation to go along with it.
			</p>
			<p className="mb-4">I have experience with a variety of frameworks, libraries, and tools on both the frontend and backend. Some technologies I use day-to-day are:</p>
			<div className="flex flex-wrap">
				<FlexItem name="JavaScript (ES6)" />
				<FlexItem name="HTML5" />
				<FlexItem name="CSS3" />
				<FlexItem name="Apache" />
				<FlexItem name="jQuery" />
				<FlexItem name="SQL" />
				<FlexItem name="npm" />
				<FlexItem name="React" />
				<FlexItem name="Subversion" />
				<FlexItem name="Git" />
				<FlexItem name="GraphQL" />
				<FlexItem name="PHP" />
				<FlexItem name="MongoDB" />
				<FlexItem name="Node.js" />
				<FlexItem name="Amazon Web Services" />
			</div>
		</Section>
	);
}

export default AboutMe;
