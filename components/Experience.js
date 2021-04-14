import Image from 'next/image';

import Section from '../components/Section';

function Experience() {
	return (
		<Section title="Experience">
			<div className="mb-12">
				<div className="flex items-center mb-6">
					<Image src="/images/twi-logo.png" height={40} width={40} alt="TWI Logo" />
					{/* TODO Why is there more space around <a> than <div>? */}
					<div className="ml-4">
						<div className="-mb-1">Senior Software Engineer</div>
						<a href="https://www.tech-wizards.com" target="_blank" rel="noopener noreferrer" title="Tech Wizards, Inc.">
							Tech Wizards, Inc.
						</a>
					</div>
				</div>
				<ul className="list-circle ml-9">
					<li className="mb-2">Lead teams of engineers on the design and development of training web applications used by the US Navy</li>
					<li className="mb-2">
						Communicate with engineers, graphic artists, instructional systems designers, and testers to plan, design, develop, test, and improve applications
					</li>
					<li className="mb-2">
						Build full stack applications by writing well-organized, maintainable code in JavaScript and PHP using a variety of frameworks and runtimes such as Vue.js and
						Node.js
					</li>
					<li className="mb-2">Rapidly create application prototypes to confirm project feasibility and transition the prototypes to fully developed applications</li>
					<li className="mb-2">Meet with clients to determine software requirements, demonstrate software, and discuss feedback on applications</li>
					<li className="mb-2">
						Write and review technical documents including Software Requirements Specifications, Software Design Documents, Training Requirements Documents, Software Users
						Guides, Software Installation Instructions, Project Proposals, and White Papers
					</li>
					<li className="mb-2">Deploy and maintain web applications on remote Amazon Elastic Compute Cloud instances</li>
					<li className="mb-2">Facilitate and provide support for beta tests of training applications with US Navy students</li>
				</ul>
			</div>
			<div>
				<div className="flex items-center mb-6">
					<Image src="/images/umw-logo.png" height={40} width={40} alt="UMW Logo" />
					<div className="ml-4">
						<div className="-mb-1">App Development Scholar</div>
						<a href="https://www.umw.edu" target="_blank" rel="noopener noreferrer" title="University of Mary Washington">
							University of Mary Washington
						</a>
					</div>
				</div>
				<ul className="list-circle ml-9">
					<li className="mb-2">Designed and implemented an iPhone application which displayed upcoming concerts in the user’s local area</li>
					<li className="mb-2">Delivered a formal presentation of my work to fellow scholars and professors</li>
				</ul>
			</div>
		</Section>
	);
}

export default Experience;
