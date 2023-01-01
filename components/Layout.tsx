import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from 'components/ui/Navbar';
import Footer from 'components/ui/Footer';
import { ReactNode } from 'react';
import { PageMeta } from '../types';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://subscription-starter.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-249613012-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-249613012-1');
            `,
          }}
        />

        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </Head>
      <Navbar />
      <main id="skip" className="bg-transparent">
        {children}
      </main>
      <Footer />
    </>
  );
}
{
  /* <CodeEditor
                  value={solution}
                  language="js"
                  placeholder="Please enter JS code."
                  onChange={(evn:any) => setSkeleton(evn.target.value)}
                  padding={12}
                  style={{
                    fontSize: 14,
                    backgroundColor: "#1e1e1e",
                    borderRadius:'12px',
                    color:'white',
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                  }}
                /> */
}
