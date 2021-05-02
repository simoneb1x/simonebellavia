import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>always striving for more 👨🏼‍💻🌎</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>About me</h2>
            <p>🎓 BSc in Psychology. I interrupted my studies in Work and Organizational Psychology (MSc) to move to the master's degree course in Data Science.</p>
            <p>Currently working as a Scrum Master at Leonardo and Prisma srl.</p>
            <p>I coordinate numerous teams engaged in software development and digitalization projects. I apply the Agile methodology, in particular Scrum, so that each team can deliver a valuable increment for the end customer.</p>
            <p>In the past I worked as a Team Manager at Vapour International d.o.o, coordinating marketing and graphic design projects (including UX/UI).</p>
        </section>

        <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
    </Layout>
  )
}