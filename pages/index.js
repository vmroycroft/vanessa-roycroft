import Head from 'next/head';
import Image from 'next/image';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faHeart } from '@fortawesome/free-regular-svg-icons';

import Section from '../components/Section';
import FlexItem from '../components/FlexItem';

export default function Home() {
	// See https://github.com/FortAwesome/react-fontawesome/issues/284
	config.autoAddCss = false;

	return (
		<div className="bg-black text-white">
			<Head>
				<title>Vanessa Roycroft</title>
				<link rel="icon" href="/favicon.ico" />
				<style>{dom.css()}</style>
			</Head>

			<div className="sticky top-0 z-50 flex justify-between items-center py-3 px-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg">
				<div className="font-bold sm:text-lg xl:text-2xl">
					<span className="text-gradient">Vanessa</span> Roycroft
				</div>
				<div className="font-mono text-gray-500 text-xs sm:text-sm xl:text-lg">
					<a href="https://github.com/vmroycroft/vanessa-roycroft" target="_blank" rel="noopener noreferrer" title="GitHub" className="mr-6">
						GitHub
					</a>
					<a href="https://vanessaroycroft.com/Vanessa_Roycroft_Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume" className="mr-6">
						Resume
					</a>
					<a href="mailto:vmroycroft@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact" className="mr-2">
						Contact
					</a>
				</div>
			</div>
			<header className="h-screen flex flex-col px-4">
				<div className="flex-grow flex flex-col justify-center items-center font-bold">
					<div>
						<h1 className="text-3xl sm:text-5xl xl:text-7xl">
							Hi, I'm <span className="text-gradient">Vanessa</span>.
						</h1>
						<div className="text-1xl sm:text-3xl xl:text-5xl">
							<h1>I'm a full stack web developer.</h1>
							<h1>
								I <FontAwesomeIcon icon={faHeart} className="text-pink-500" /> snowboarding, running, &amp; learning.
							</h1>
						</div>
					</div>
				</div>
			</header>
			<main>
				<hr />
				<Section title="About Me">
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
				<hr />
				<Section title="Experience" className="bg-gray-light">
					<div className="flex items-center mb-4">
						<Image src="/images/twi-logo.png" height={70} width={70} alt="TWI Logo" />
						<div className="ml-4">
							<p>Senior Software Engineer</p>
							<p>
								Tech Wizards, Inc. <span className="text-pink-500 font-mono text-xs ml-2">2011 - Now</span>
							</p>
						</div>
					</div>
					<ul className="list-circle ml-12">
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
					<div className="flex items-center my-4">
						<Image src="/images/umw-logo.png" height={70} width={70} alt="UMW Logo" />
						<div className="ml-4">
							<p>App Development Scholar</p>
							<p>
								University of Mary Washington <span className="text-pink-500 font-mono text-xs ml-2">2010</span>
							</p>
						</div>
					</div>
					<ul className="list-circle ml-12">
						<li className="mb-2">Designed and implemented an iPhone application which displayed upcoming concerts in the user’s local area</li>
						<li className="mb-2">Delivered a formal presentation of my work to fellow scholars and professors</li>
					</ul>
				</Section>
				<hr />
				<Section title="Education" className="bg-pink-dark">
					<div className="flex items-center my-4">
						<Image src="/images/umw-seal.png" height={69} width={70} alt="UMW Seal" />
						<div className="ml-4">
							<p>Computer Science, B.S.</p>
							<p>
								University of Mary Washington <span className="text-pink-500 font-mono text-xs ml-2">2011</span>
							</p>
						</div>
					</div>
				</Section>
			</main>
			<footer className="text-center text-black font-mono text-xs bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-16 pb-4">
				<p>
					Designed &amp; Built by Vanessa Roycroft <FontAwesomeIcon icon={faLaugh} />
				</p>
			</footer>
		</div>
	);
}
