import { useState, useEffect } from "react";
import Recent from '../../components/articles/articles';
import Color from '../../components/utils/page.colors.util';
import colors from '../../jsonData/articles/_colors.json';
import settings from '../../jsonData/layout/_settings.json';

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

    // Log the number of articles fetched
    console.log(`Number of articles fetched: ${mediumArticles.items.length}`);

    // Extract thumbnail URLs from article descriptions using regex
    mediumArticles.items.forEach(item => {
        const description = item.description.toString();
        const thumbnailUrlMatch = description.match(/<img[^>]+src="([^">]+)"/);
        if (thumbnailUrlMatch && thumbnailUrlMatch[1]) {
            item.thumbnail = thumbnailUrlMatch[1]; // Assign the matched thumbnail URL to the thumbnail property
        } else {
            item.thumbnail = ''; // Set a default value if no thumbnail URL is found
        }
    });

    return { props: { mediumArticles } };
}
