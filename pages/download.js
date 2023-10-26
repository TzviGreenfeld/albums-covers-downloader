import { useState } from 'react';

import Head from 'next/head';

import { useChosenImages } from '../context/ChosenImagesContext';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import DownloadImagesAsZip from '../components/DownloadImagesAsZip';



export default () => {
    const [chosenImages, setChosenImages] = useChosenImages();


    return (
        <Layout>
            <Head>
                <title>milner</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='container'>
                <Typography variant="h5"
                    sx={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                        marginTop: '150px',
                        cursor: 'pointer'
                    }}>
                    Download all {chosenImages.length} covers
                    <DownloadImagesAsZip imageUrls={chosenImages.map(i => i.img)} />
                </Typography>

                <main>
                    <Gallery title={"all artists"} items={chosenImages} />
                </main>
            </div>
        </Layout>

    );
};
