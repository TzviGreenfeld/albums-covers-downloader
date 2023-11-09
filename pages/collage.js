
import Head from 'next/head';
import { useChosenImages } from '../context/ChosenImagesContext';
import Layout from '../components/Layout';
import { useState } from 'react';



export default () => {

    const [inputValue, setInputValue] = useState('');
    const [chosenImages, setChosenImages] = useChosenImages();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit!", inputValue);
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
