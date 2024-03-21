import { useState, useEffect } from "react";
import Recent from '../../components/sections/articles/recent';
import Color from '../../components/utils/page.colors.util';
import colors from '../../content/articles/_colors.json';
import settings from '../../content/layout/settings.json';

export default function Articles({ mediumArticles }) {
    return (
        <>
            <Color colors={colors} />
            <Recent mediumArticles={mediumArticles} />
        </>
    );
}

export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=600, stale-while-revalidate=59'
    );

    console.log(settings.username.medium);

    const [mediumRSS] = await Promise.all([
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
    ]);

    let [mediumArticles] = await Promise.all([
        mediumRSS.json(),
    ]);

    console.log(`Number of articles fetched: ${mediumArticles.items.length}`);

    mediumArticles.items.forEach(item => {
        const description = item.description.toString();
        const thumbnailUrlMatch = description.match(/<img[^>]+src="([^">]+)"/);
        if (thumbnailUrlMatch && thumbnailUrlMatch[1]) {
            item.thumbnail = thumbnailUrlMatch[1]; 
        } else {
            item.thumbnail = ''; 
        }
    });

    return { props: { mediumArticles } };
}
