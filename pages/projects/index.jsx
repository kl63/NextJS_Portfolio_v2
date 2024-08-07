import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';

// Sections
import GitRecentProjects from '../../components/projects/recent';
import FeaturedProjects from '../../components/projects/featured';
import Color from '../../components/utils/page.colors.util';

import settings from '../../jsonData/layout/_settings.json';
import colors from '../../jsonData/projects/_colors.json';
import navbar from '../../jsonData/layout/navbar.json'; 

export default function Projects({ user, repos }) {
    const router = useRouter();
    
    useEffect(() => {
        const currentPath = router.pathname;
        const currentPage = navbar.find(page => page.url === currentPath);
    }, [router.pathname]);

    return (
        <>
            <Head>
                <title>{navbar.find(page => page.url === router.pathname)?.title}</title>
            </Head>
            <Color colors={colors} />
            <FeaturedProjects />
            <GitRecentProjects user={user} repos={repos} />
        </>
    );
}

// This gets called on every request
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=600, stale-while-revalidate=59'
    );

    const [gitUserRes, gitReposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${settings.username.github}`),
        fetch(`https://api.github.com/users/${settings.username.github}/repos`),
    ]);
    
    let [user, repos] = await Promise.all([
        gitUserRes.json(),
        gitReposRes.json(),
    ]);

    if (user.login) {
        user = [user].map(
            ({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
        );
    }
    
    if (repos.length) {
        repos = repos.map(
            ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
                const timestamp = Math.floor(new Date(pushed_at) / 1000);
                return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at });
            }
        );

        repos.sort((a, b) => b.timestamp - a.timestamp);

        repos = repos.filter((e, i) => {
            if (i < 8 && !e.topics.includes('github-config')) return e;
            return false;
        });
    }

    if (!repos || !user) { return { notFound: true, } }

    return { props: { repos, user } }
}
