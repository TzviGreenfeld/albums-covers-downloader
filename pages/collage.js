
import Head from 'next/head';
import { useChosenImages } from '../context/ChosenImagesContext';
import Layout from '../components/Layout';



export default () => {
    const [inputValue, setInputValue] = useState('');
    const [chosenImages, setChosenImages] = useChosenImages();

    const handleSubmit = () => {
        console.log("submit!");
    };
    return (
        <Layout>
            <Head>
                <title>Collage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>

            </main>
        </Layout>

    );
};
