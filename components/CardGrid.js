import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArtistCard from './ArtistCard';

export default function CardGrid({ cardsData }) {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (
        <Grid sx={{ flexGrow: 1, maxWidth: '70%' }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {cardsData.map((card) => (
                        <Grid key={card.imageUrl} item>
                            <ArtistCard
                                imageUrl={card.imageUrl}
                                artistName={card.artistName}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
