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
const NUMBERS_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Home function
export default function Home({ allPostsData }) {

    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(20);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const handleGenerationPassword = (e) => {
        if(
            !includeUppercase &&
            !includeLowercase &&
            !includeNumbers &&
            !includeSymbols
        ) {
            notify("You must select at least one option", true)
        }

        let characterList = '';

        if (includeLowercase) {
            characterList =  characterList.concat(LOWERCASE_CODES);
        }

        if(includeUppercase) {
            characterList = characterList.concat(UPPERCASE_CODES);
        }

        if(includeNumbers) {
            characterList = characterList.concat(NUMBERS_CODES);
        }

        if(includeSymbols){
            characterList = characterList.concat(SYMBOLS_CODES);
        }

        setPassword(createPassword(characterList));
    }

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
            


        </section>

        <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
    </Layout>
  )
}