import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin, faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Section from '../components/Section';
import FlexItem from '../components/FlexItem';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Vanessa Roycroft</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="h-screen flex flex-col justify-center items-center text-center background px-4">
				<div className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-xl border-4 border-silverPink px-4 py-8 sm:p-10">
					<h1 className="text-4xl sm:text-5xl font-accent text-black text-shadow mb-8">Vanessa Roycroft</h1>
					<div className="mb-8 text-silverPink underline text-sm sm:text-base">
						<a
							href="http://vanessaroycroft.com/Vanessa_Roycroft_Resume.pdf"
							target="_blank"
							title="Resume"
							className="mr-5 sm:mr-8 transition duration-500 ease-in-out hover:text-silverPink-light"
						>
							<span>Resume</span>
						</a>
						<a href="mailto:vmroycroft@gmail.com" title="Contact" className="mr-5 sm:mr-8 transition duration-500 ease-in-out hover:text-silverPink-light">
							<span>Contact</span>
						</a>
						<a
							href="https://github.com/vmroycroft/vanessaroycroft-v3"
							target="_blank"
							title="GitHub"
							className="transition duration-500 ease-in-out hover:text-silverPink-light"
						>
							<span>GitHub</span>
						</a>
					</div>
					<h2 className="text-sm sm:text-base text-gray-light mb-2">I'm a full stack web developer with a background in software engineering.</h2>
					<h2 className="text-sm sm:text-base text-gray-light">
						I <FontAwesomeIcon icon={faHeart} className="heartbeat" /> snowboarding, running, & learning.
					</h2>
				</div>
			</header>
			<main>
				<Section title="About Me" className="bg-pink-dark pt-0">
					<p className="mb-4">
						I'm a well-rounded, hard-working team player with 8 years of experience throughout the software development life cycle. I'm dedicated to efficiently solving
						problems and providing an exceptional user experience through thoughtful web application design and development.
					</p>
					<p className="mb-4">
						I write uncluttered and understandable code, as well as the requirements specifications, software design, and user documentation to go along with it.
					</p>
					<p className="mb-4">
						I have experience with a variety of frameworks, libraries, and tools on both the frontend and backend. Some technologies I use day-to-day are:
					</p>
					<div className="flex flex-wrap">
						<FlexItem name="JavaScript (ES6)" className="border-lavender-light" />
						<FlexItem name="HTML5" className="border-gray-dark" />
						<FlexItem name="CSS3" className="border-silver-light" />
						<FlexItem name="Apache" className="border-gray-dark" />
						<FlexItem name="jQuery" className="border-lavender-light" />
						<FlexItem name="SQL" className="border-silver-light" />
						<FlexItem name="npm" className="border-lavender-light" />
						<FlexItem name="React" className="border-gray-dark" />
						<FlexItem name="Subversion" className="border-silver-light" />
						<FlexItem name="Git" className="border-gray-dark" />
						<FlexItem name="GraphQL" className="border-lavender-light" />
						<FlexItem name="PHP" className="border-silver-light" />
						<FlexItem name="MongoDB" className="border-lavender-light" />
						<FlexItem name="Node.js" className="border-gray-dark" />
						<FlexItem name="Amazon Web Services" className="border-silver-light" />
					</div>
				</Section>
				<Section title="Experience" className="bg-gray-light">
					<div className="flex items-center mb-4">
						<Image src="/images/twi-logo.png" height={70} width={70} alt="TWI Logo" />
						<div className="ml-4">
							<p>Senior Software Engineer</p>
							<p>
								Tech Wizards, Inc. <span className="text-gray-dark text-xs ml-2">2011 - Now</span>
							</p>
						</div>
					</div>
					<ul className="fa-ul ml-12">
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-lavender-light mt-1" listItem />
							Lead teams of engineers on the design and development of training web applications used by the US Navy
						</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-gray-dark mt-1" listItem />
							Communicate with engineers, graphic artists, instructional systems designers, and testers to plan, design, develop, test, and improve applications
						</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-silver-light mt-1" listItem />
							Build full stack applications by writing well-organized, maintainable code in JavaScript and PHP using a variety of frameworks and runtimes such as Vue.js and
							Node.js
						</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-gray-dark mt-1" listItem />
							Rapidly create application prototypes to confirm project feasibility and transition the prototypes to fully developed applications
						</li>
						<li className="mb-2">Meet with clients to determine software requirements, demonstrate software, and discuss feedback on applications</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-lavender-light mt-1" listItem />
							Write and review technical documents including Software Requirements Specifications, Software Design Documents, Training Requirements Documents, Software Users
							Guides, Software Installation Instructions, Project Proposals, and White Papers
						</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-silver-light mt-1" listItem />
							Deploy and maintain web applications on remote Amazon Elastic Compute Cloud instances
						</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-lavender-light mt-1" listItem />
							Facilitate and provide support for beta tests of training applications with US Navy students
						</li>
					</ul>
					<div className="flex items-center my-4">
						<Image src="/images/umw-logo.png" height={70} width={70} alt="UMW Logo" />
						<div className="ml-4">
							<p>App Development Scholar</p>
							<p>
								University of Mary Washington <span className="text-gray-dark text-xs ml-2">2010</span>
							</p>
						</div>
					</div>
					<ul className="fa-ul ml-12">
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-gray-dark mt-1" listItem />
							Designed and implemented an iPhone application which displayed upcoming concerts in the user’s local area
						</li>
						<li className="mb-2">
							<FontAwesomeIcon icon={faChevronRight} className="text-silver-light mt-1" listItem />
							Delivered a formal presentation of my work to fellow scholars and professors
						</li>
					</ul>
				</Section>
				<Section title="Education" className="bg-pink-dark">
					<div className="flex items-center my-4">
						<Image src="/images/umw-seal.png" height={69} width={70} alt="UMW Seal" />
						<div className="ml-4">
							<p>Computer Science, B.S.</p>
							<p>
								University of Mary Washington <span className="text-gray-dark text-xs ml-2">2011</span>
							</p>
						</div>
					</div>
				</Section>
			</main>
			<footer className="text-center font-accent text-sm bg-lavender-dark text-gray-light py-4">
				<p>
					Designed & Built by Vanessa Roycroft <FontAwesomeIcon icon={faGrin} />
				</p>
			</footer>
		</div>
	);
}
