import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Про що цей сайт</h2>
        <p>Серія матеріалів які є допоміжними до серії відео <a href="https://www.youtube.com/playlist?list=PLWuPdIzAqBUiMnOSoJzwt3OHjVm2edPsm">2024: HTML+CSS+JS для всіх</a> на YouTube-каналі <a href="https://www.youtube.com/@itmentor">ITMentor</a>. Це нова серія відео (попередня 2021 року) за допомогою якої Ви зможете на кожному уроці паралельно вивчати HTML, CSS та мову програмування JavaScript.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Матеріали</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((group) => (
            <li key={group.date} className={utilStyles.listItem}>
              <div className={utilStyles.lightText}>
                <Date dateString={group.date} />
              </div>
              <ul className={utilStyles.nestedList}>
                {group.posts.map(({ id, title }) => (
                  <li key={id} className={utilStyles.nestedListItem}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
