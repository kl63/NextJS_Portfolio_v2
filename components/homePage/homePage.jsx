import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import data from '../../jsonData/about/aboutData.json';
import Section from '../structure/section';
import Container from '../structure/container';
import SectionTitle from '../blocks/section.title.block';
import BadgesBlock from '../blocks/about.badges.block';
import CopyBlock from '../blocks/about.copy.block';
import about from '../../styles/homePage/about.module.scss';
import navbar from '../../jsonData/layout/navbar.json'; // Import your navbar.json

export default function About() {
  const [methods, setMethods] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    // Set methods from JSON data
    setMethods(data.methods);

    // Set the page title based on the current URL
    const currentPath = router.pathname;
    const currentPage = navbar.find(page => page.url === currentPath);

  }, [router.pathname]);

  return (
    <>
    <Head>
                <title>{navbar.find(page => page.url === router.pathname)?.title}</title>
            </Head>
      
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
                copy={data.skillsDescription}
                headerIcon={`${about.icon}`}
              />
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}
