import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Loading from '../components/loading';
import { useRouter } from 'next/router';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  };
}

export default function Home({ allPostsData }) {
  const router = useRouter();
  const isNavigating = router.isFallback;

  if (isNavigating) {
    return <Loading />;
  }

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
              <div className={utilStyles.cardHeader}>
                <div className={utilStyles.lightText}>
                  <Date dateString={group.date} />
                </div>
                {group.posts[0].youtubeUrl && (
                  <a 
                    href={group.posts[0].youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={utilStyles.youtubeLink}
                    title="Дивитись відео на YouTube"
                  >
                    <svg className={utilStyles.youtubeIcon} viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                )}
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
