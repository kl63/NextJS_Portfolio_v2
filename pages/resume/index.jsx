import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Color from '../../components/utils/page.colors.util';
import colors from '../../jsonData/resume/_colors.json';
import Resume from '../../components/resume/resume';
import navbar from '../../jsonData/layout/navbar.json'; // Import your navbar.json

export default function ResumePage({}) {
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
            <Resume />
        </>
    );
}
