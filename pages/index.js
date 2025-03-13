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
        <p>Матеріали які є допоміжними до серії відео <a href="https://www.youtube.com/playlist?list=PLWuPdIzAqBUiMnOSoJzwt3OHjVm2edPsm">HTML+CSS+JS для всіх</a> на YouTube-каналі <a href="https://www.youtube.com/@itmentor">ITMentor</a>. Це нова серія відео(2024-2025 рр., попередня 2021 року) за допомогою якої Ви зможете на кожному уроці паралельно вивчати HTML, CSS та мову програмування JavaScript.</p>
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
                <div className={utilStyles.cardLinks}>
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
                  {group.posts[0].practic && (
                    <a 
                      href="https://github.com/testeducatorua/frfa-series-code/blob/main/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={utilStyles.githubLink}
                      title="Переглянути код на GitHub"
                    >
                      <svg className={utilStyles.githubIcon} viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
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
