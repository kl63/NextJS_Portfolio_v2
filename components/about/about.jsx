// Core packages
import { useEffect, useState } from 'react';


// Section structure
import Section from '../structure/section';
import Container from '../structure/container';

// Section general blocks
import SectionTitle from '../blocks/section.title.block';

// Section specific blocks
import BadgesBlock from '../blocks/about.badges.block';
import CopyBlock from '../blocks/about.copy.block';

// Section scss
import about from '../../styles/sections/index/about.module.scss';

//JSON import
import data from '../../content/index/aboutData.json'; 

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
  const [methods, setMethods] = useState([]); // State to hold methods

  useEffect(() => {
    // Set methods from the imported JSON data
    setMethods(data.methods);
  }, []);

  return (
    <Section classProp={about.section}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title={data.title} 
          preTitle={data.preTitle}
          subTitle={data.subTitle}
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src={data.image} alt={data.imgAlt} />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title={data.aboutBlock}
              containerClass={about.container}
              iconClass={about.icon}
              icon={['fat', 'ear-listen']}
              copy={data.aboutDescription}
            />
            <BadgesBlock
              title={data.skillsBlock}
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy={data.skilsDescription}
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
