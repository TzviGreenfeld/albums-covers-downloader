import { useEffect, useState } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useChosenImages } from '../context/ChosenImagesContext';
import { Typography } from '@mui/material';

export default function Gallery({ title, items }) {
    const [chosenImages, setChosenImages] = useChosenImages();
    const [picked, setPicked] = useState(Array(items.length).fill(false));

    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        // Helper function to set the number of columns based on screen width
        const updateCols = () => {
            if (window.innerWidth <= 1000) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            }
        };

        updateCols();

        window.addEventListener('resize', updateCols);

        return () => window.removeEventListener('resize', updateCols);
    }, []);

    const togglePick = (index) => {
        const newPicked = [...picked];
        newPicked[index] = !newPicked[index];

        setPicked(newPicked);

        // handle chosen images
        const imageToAdd = items[index];
        if (newPicked[index]) {
            setChosenImages([...chosenImages, imageToAdd]);
        } else {
            setChosenImages(chosenImages.filter(i => i.img !== imageToAdd.img));
        }
    };

    return (
        <ImageList >
            <ImageListItem key="Subheader" cols={isDesktop ? 3 : 1}>
                <ListSubheader component="div"><Typography>{title}</Typography></ListSubheader>
            </ImageListItem>
            {items.map((item, index) => (
                <ImageListItem key={item.img} sx={{ maxWidth: isDesktop ? '250px' : '100%' }}>
                    <img
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => togglePick(index)}
                    />
                    <ImageListItemBar
                        title={item.title}
                        actionIcon={
                            picked[index] &&
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)', marginRight: 1 }}
                            >
                                <CheckCircleIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))
            }
            <style jsx>{`
                img{
                    // don't allow user to drag images because it messes with the picking
                    -webkit-user-drag: none;
                    -moz-user-select: none;
                    user-drag: none; 
                    user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }
            `}</style>
        </ImageList >
    );
}

