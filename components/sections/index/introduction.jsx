// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Section scss
import introduction 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

//JSON import
import introductionData from '../../../content/index/introductionData.json'

/**
 * Section: Introduction
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Introduction />
 */
export default function Introduction() {
	return (
	  <Section classProp={`${introduction.section} borderBottom`}>
		<Container classProp={`${section.title} ${introduction.container}`} spacing={['verticalXXXLrg']}>
		  <h4>I&apos;m currently a</h4>
		  {/* Accessing data from the JSON */}
		  <h2 className={introduction.json}>{introductionData.organization}: &#123;</h2>
		  <h2 className={introduction.jsonSub}><span className={introduction.highlight}>{introductionData.jobTitle}</span></h2>
		  <h2 className={introduction.json}>&#125;</h2>
		  {/* Including the <h4> text from the JSON */}
		  <h4>{introductionData.interests}</h4>
		</Container>
	  </Section>
	);
  }