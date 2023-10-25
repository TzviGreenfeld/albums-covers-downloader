import React, { createContext, useContext, useState } from 'react';

const ChosenImagesContext = createContext();

export const ChosenImagesProvider = ({ children }) => {
    const [chosenImages, setChosenImages] = useState([]);

    return (
        <ChosenImagesContext.Provider value={[chosenImages, setChosenImages]}>
            {children}
        </ChosenImagesContext.Provider>
    );
};

export const useChosenImages = () => {
    return useContext(ChosenImagesContext);
};