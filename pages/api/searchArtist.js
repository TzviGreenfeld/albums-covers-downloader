import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        try {
            const { data } = await axios({
                method: 'POST',
                url: 'https://accounts.spotify.com/api/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.from(
                        process.env.SPOTIFY_CLIENT_ID +
                        ':' +
                        process.env.SPOTIFY_CLIENT_SECRET
                    ).toString('base64')}`,
                },
                data: 'grant_type=client_credentials',
            });

            const accessToken = data.access_token;

            const searchResponse = await axios({
                method: 'GET',
                url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(
                    query
                )}&type=artist&limit=20`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            return res.status(200).json(searchResponse.data);

        } catch (error) {
            console.error('Spotify API Error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
