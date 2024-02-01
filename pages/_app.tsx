import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Owl Top</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;800&family=Noto+Sans:wght@300;400;500;700&family=Press+Start+2P&family=Racing+Sans+One&display=swap"
                    rel="stylesheet"
                />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
                <meta property="og:locale" content="ru_RU" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
