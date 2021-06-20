import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/utils.module.css'
import utilStyles from '../../styles/utils.module.css'

import Link from 'next/link'

// Funzione che pusha caratteri in un array
let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

// Costanti
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));


export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>hello 👨🏼‍💻🌎</p>
        </section>


        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Password Generator</h2>
            <p>Test</p>
        </section>

        <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
    </Layout>
  )
}