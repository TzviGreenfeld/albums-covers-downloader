import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const URL = 'https://static01.nyt.com/images/2021/12/08/arts/06drake2/06drake2-jumbo.jpg?quality=75&auto=webp';

export default function ArtistCard({ imageUrl, artistName }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageUrl}
                title={artistName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {artistName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
