import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/layout/footer.json' //JSON FILE
import settings from '../../content/layout/_settings.json' //JSON FILE

export default function Footer() {

	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	const githubRepoApiUrl = 'https://api.github.com/repos/kl63/NextJS_Portfolio_v2';

	useEffect(() => {
		fetch(githubRepoApiUrl)
			.then(response => response.json())
			.then(json => {
				const { updated_at } = json;
				const lastUpdateDate = new Date(updated_at).toLocaleDateString(); // Convert timestamp to a readable date
				setGitHubInfo(prevState => ({
					...prevState,
					lastUpdate: lastUpdateDate
				}));
			})
			.catch(error => {
				console.error('Error fetching GitHub repository information:', error);
			});
	}, []);
	
	

	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li><h4>{content.footerHeader}</h4></li>
						{
							content.footer.map(({ title, link, note }, index) => {
								return (
									<li key={index}>
										<a href={link} rel="noreferrer">{title}</a>

										<p>{note}</p>
									</li>
								)
							})
						}
					</ul>
					<ul className={css.links}>
						<li><h4>{content.linkHeader}</h4></li>
						{
							content.links.map(({ title, link, note }, index) => {
								return (
									<li key={index}>
										<a href={link} rel="noreferrer">{title} </a>
										<p>{note}</p>
									</li>
								)
							})
						}
					</ul>
					<ul className={css.social}>
						<li><h4>{content.socialHeader}</h4></li>
						<li className={css.socialList}>
							{
								content.social.map(({ url, icon }, index) => {
									return (
										<a key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={['fab', icon]} /></a>
									)
								})
							}
						</li>
					</ul>
				</section>
				<section className={css.github}>
					<a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
						<h5>{settings.portfolio.copyright}</h5>
						<h5>Last Updated: {gitHubInfo.lastUpdate}</h5>
					</a>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}

