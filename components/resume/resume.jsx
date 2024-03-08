import React from 'react';
import Badges from '../utils/badge.list.util';
import Section from '../structure/section';
import Container from '../structure/container';
import SectionTitle from '../blocks/section.title.block';
import career from '../../styles/sections/index/career.module.scss';
import careerData from '/components/resume/resumeData.json'; // Import the JSON data
import FeaturedProjects	from '../../components/sections/projects/featured'

export default function Career() {
    const { education, experience, techSkillsList, softSkillsList, courses, titles } = careerData;

    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <section className={career.area}>
                    {/* Education Section */}
                    <SectionTitle
                        title={titles.education.title}
                        subTitle={titles.education.subTitle}
                    />
                    {education.map((edu, index) => (
                        <article key={index} className={career.company}>
                            <div className={career.companyContent}>
                                <span className={career.companyHeader}>
                                    <h3>{edu.university}</h3>
                                    <h4>{edu.degree}</h4>
                                    <h4>{edu.minor}</h4>
                                    <h4>{edu.gpa}</h4>
                                    <h4>{edu.graduation}</h4>
                                    <h5>{edu.location}</h5>
                                </span>
                            </div>
                            <div className={career.companyAlt}></div>
                        </article>
                    ))}
                </section>
                {/* Technical/Soft  Skills Section */}
                <section className={career.area}>
                    <SectionTitle
                        title={titles.techSkills.title}
                        subTitle={titles.techSkills.subTitle}
                    />
                    <Badges list={techSkillsList.map(techSkillsList => ({ name: techSkillsList.name }))} block="stack" fullContainer="fullContainer" />
                    <SectionTitle
                        subTitle={titles.softSkills.subTitle}
                    />
                    <Badges list={softSkillsList.map(softSkillsList => ({ name: softSkillsList.name }))} block="stack" fullContainer="fullContainer" />
                </section>
                {/* Relevant Courses Section*/}
                <section className={career.area}>
                    <SectionTitle
                        title={titles.courses.title}
                        subTitle={titles.courses.subTitle}
                    />
                    <Badges list={courses.map(course => ({ name: course.name }))} block="stack" fullContainer="fullContainer" />
                    <FeaturedProjects />
                </section>

                {/* Experience Section*/}
                <section className={career.area}>
                    <SectionTitle
                        title={titles.experience.title}
                        subTitle={titles.experience.subTitle}
                    />
                    {experience.map((exp, index) => (
                        <article key={index} className={career.company}>
                            <div className={career.companyContent}>
                                <span className={career.companyHeader}>
                                    <h3>{exp.name}</h3>
                                    <h4>{exp.type}</h4>
                                    <h4>{exp.duration}</h4>
                                    <h5>{exp.location}</h5>
                                </span>
                                <div className={career.companyDescription}>
                                    {Array.isArray(exp.description) ? (
                                        <ul>
                                            {exp.description.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : typeof exp.description === 'string' ? (
                                        <ul>
                                            {exp.description.split('\n').map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            </div>
                            <div className={career.companyAlt}></div>
                        </article>
                    ))}
                </section>
                <section>
                   
                </section>
            </Container>
        </Section>
    );
}
