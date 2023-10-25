import axios from 'axios';

async function getAccessToken() {
    try {
        const { data } = await axios({
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(
                    process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
                ).toString('base64')}`,
            },
            data: 'grant_type=client_credentials',
        });

        return data.access_token;
    } catch (error) {
        console.error('Error fetching Spotify token:', error);
        return null;
    }
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { artistId } = req.query;

        if (!artistId) {
            return res.status(400).json({ error: 'artistId parameter is required' });
        }

        try {
            const accessToken = await getAccessToken();
            if (!accessToken) {
                return res.status(500).json({ error: 'Failed to obtain access token' });
            }

            const artistResponse = await axios({
                method: 'GET',
                url: `https://api.spotify.com/v1/artists/${artistId}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const artistName = artistResponse.data.name;

            return res.status(200).json({ name: artistName });

        } catch (error) {
            console.error('Spotify API Error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
