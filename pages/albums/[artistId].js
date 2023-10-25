import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Gallery from '../../components/Gallery';
import Head from 'next/head';
import Layout from '../../components/Layout';


export default () => {
    const router = useRouter();
    const [albums, setAlbums] = useState([]);
    const [artistName, setArtistName] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/artistAlbums?artistId=${router.query.artistId}`);
                setAlbums(data.items
                    .map(
                        result => {
                            return {
                                id: result.id,
                                title: result.name,
                                img: result.images[0].url
                            };
                        })
                );
            } catch (error) {
                console.error(error);
            }
        };

        const fetchArtistName = async () => {
            try {
                const { data } = await axios.get(`/api/artistName?artistId=${router.query.artistId}`);
                setArtistName(data.name);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        fetchArtistName();
    }, []);

    return (
        <Layout>
            <div className='container'>
                <Head>
                    <title>milner</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Gallery title={artistName} items={albums} />
                </main>
            </div>
        </Layout>

    );
};
