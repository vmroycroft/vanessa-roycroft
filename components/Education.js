import Image from 'next/image';

import Section from '../components/Section';

function Education() {
	return (
		<Section title="Education">
			<div className="flex items-center">
				<Image src="/images/umw-seal.png" height={39} width={40} alt="UMW Seal" />
				<div className="ml-4">
					<div className="-mb-1">Computer Science, B.S.</div>
					<a href="https://www.umw.edu" target="_blank" rel="noopener noreferrer" title="University of Mary Washington">
						University of Mary Washington
					</a>
				</div>
			</div>
		</Section>
	);
}

export default Education;
