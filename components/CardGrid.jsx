import * as React from 'react';
import Grid from '@mui/material/Grid';
import ArtistCard from './ArtistCard';
import { useRouter } from 'next/router';

export default function CardGrid({ cardsData }) {
    const router = useRouter();

    const jsx = `
<Grid container spacing={2}>
`;

    return (
        <Grid sx={{ flexGrow: 1, maxWidth: '70%' }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {cardsData.map((card) => (
                        <Grid key={card.imageUrl}
                            item
                            onClick={() => router.push(`albums/${card.id}`)}>
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
