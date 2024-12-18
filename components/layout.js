import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"
import ThemeToggle from './theme-toggle';
import Footer from './footer'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'HTML+CSS+JS для всіх'
export const siteTitle = '2024: HTML+CSS+JavaScript для всіх'

export default function Layout({ children, home }) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='description' content='Це нова серія відео (друга половина 2024 року)за допомогою якої Ви зможете на кожному уроці паралельно вивчати HTML, CSS та мову програмування JavaScript.' />
                <meta property="og:title" content={siteTitle} />
                <script src="/js/copy-code.js" defer></script>
            </Head>
            <ThemeToggle />
            <header className={styles.header}>
                {
                    home ? (<>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            width={144}
                            height={144}
                            alt=''
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>) : (<>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                width={100}
                                height={100}
                                alt=''
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">{name}</Link>
                        </h2>

                    </>)
                }
            </header>
            
            <main className={styles.mainContent}>
                {children}
                <Analytics />
            </main>

                {!home && (
                    <div>
                        <Link href="/">На головну</Link>
                    </div>
                )}
                <Footer />
        </div>
    )
}