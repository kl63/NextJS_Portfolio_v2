import Image from 'next/image';
import { useEffect, useState } from 'react';
import data from '../../content/about/aboutData.json';
import Section from '../structure/section';
import Container from '../structure/container';
import SectionTitle from '../blocks/section.title.block';
import SectionGridBg from '../blocks/section.grid.block';
import BadgesBlock from '../blocks/about.badges.block';
import CopyBlock from '../blocks/about.copy.block';
import about from '../../styles/sections/index/about.module.scss';

export default function About() {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
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
            <Image
              src={data.image}
              alt={data.imgAlt}
              width={600} 
              height={995} 
              layout="responsive"
            />
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
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
