import React from 'react';
import { ChosenImagesProvider } from '../context/ChosenImagesContext';

export default function App({ Component, pageProps }) {
    return (
        <ChosenImagesProvider>
            <Component {...pageProps} />
        </ChosenImagesProvider>
    );
}