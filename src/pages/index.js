import Head from 'next/head';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className={styles.camera}>

          <div className={styles.stageContainer}>
            <div className={styles.stage}>
              <img src="/images/mountain-1200x1200.jpg" />
            </div>
          </div>

          <div className={styles.controls}>
            <ul>
              <li>
                <Button>
                  Capture photo
                </Button>
              </li>
              <li>
                <Button color="red">
                  Reset
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.effects}>
          <h2>Filters</h2>
          <ul className={styles.filters}>
            <li data-is-active-filter={false}>
              <button className={styles.filterThumb}>
                <img width="100" height="100" src="/images/mountain-100x100.jpg" alt="Filter Name" />
                <span>Filter Name</span>
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  )
}