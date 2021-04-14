import Head from 'next/head';
import { config, dom } from '@fortawesome/fontawesome-svg-core';

import TopBar from '../components/TopBar';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';

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

			<header>
				<TopBar className="px-3 sm:px-8" />
				<Header className="px-5" />
			</header>
			<main>
				<div className="px-5">
					<AboutMe />
					<Experience />
					<Education />
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
