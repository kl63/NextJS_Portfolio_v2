// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

// Section scss
import looking 		from '../../styles/homePage/looking.module.scss';
import section 		from '../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I&apos;m currently a</h4>
				<h2 className={looking.json}>Metlife: &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Product Development Intern</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>I am particularly interested in roles where I can contribute to organization-wide initiatives.</h4>
				
			</Container>
		</Section>
	)
}