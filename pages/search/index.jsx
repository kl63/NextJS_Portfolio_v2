import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';

import Color from '../../components/utils/page.colors.util';
import colors from '../../jsonData/chromePage/_colors.json';
import LandingContent from '../../components/chromePage/search';
import navbar from '../../jsonData/layout/navbar.json'; // Import your navbar.json

export default function ChromeLandingPage({}) {
    const router = useRouter();
    
    useEffect(() => {
        const currentPath = router.pathname;

        // Find the matching title from the navbar JSON
        const currentPage = navbar.find(page => page.url === currentPath);
        const pageTitle = currentPage ? currentPage.title : 'Search';

        // Set the document title
        document.title = pageTitle;
    }, [router.pathname]);

    return (
        <>
            <Head>
                <title>{navbar.find(page => page.url === router.pathname)?.title || 'Search'}</title>
            </Head>
            <Color colors={colors} />	
            <LandingContent />
        </>
    );
}
