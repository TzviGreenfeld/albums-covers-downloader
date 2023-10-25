import { useEffect, useState } from 'react';
import axios from 'axios';

import homeStyles from '../styles/Home.module.css';
import Head from 'next/head';
import CardGrid from '../components/CardGrid';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';


export default function Find() {
    const [query, setQuery] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/searchArtist?query=${query}`);
                setCards(data.artists.items
                    .map(
                        result => {
                            return {
                                id: result.id,
                                artistName: result.name,
                                imageUrl: result.images[1].url
                            };
                        })
                );
            } catch (error) {
                // console.error(error);
            }
        };

        fetchData();
    }, [query]);

    return (
        <Layout>
            <div className='container'>
                <Head>
                    <title>milner</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Typography className={homeStyles.description}>
                        Find artists
                    </Typography>
                    <input type='text'
                        className='wide'
                        value={query}
                        onChange={e => setQuery(e.target.value)} />
                    <hr></hr>
                    <CardGrid cardsData={cards}></CardGrid>
                </main>

                <style jsx>{`
                .wide {
                    width: 70%;
                    height: 50px;
                    font-size: 26px;
                }
                `}</style>
            </div >
        </Layout>
    );
}
