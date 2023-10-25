import { useState } from 'react';
import homeStyles from '../styles/Home.module.css';
import Head from 'next/head';
import CardGrid from '../components/CardGrid';


export default function Find() {
    const [query, setQuery] = useState("");
    const cards = Array(20).fill({
        imageUrl: 'https://static01.nyt.com/images/2021/12/08/arts/06drake2/06drake2-jumbo.jpg?quality=75&auto=webp',
        artistName: 'Drake'
    });
    return (
        <div className='container'>
            <Head>
                <title>milner</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <p className={homeStyles.description}>
                    Find artists
                </p>
                <input type='text'
                    className='wide'
                    onChange={e => setQuery(e.target.value)}></input>
                <hr></hr>
                <CardGrid cardsData={cards}></CardGrid>
            </main>

            <style jsx>{`
        main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }   
        .wide {
            width:100%;
        }
        `}</style>
        </div>


    );
}
