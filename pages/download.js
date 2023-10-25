import Head from 'next/head';
import Layout from '../components/Layout';

export default () => {

    return (
        <Layout>
            <div className='container'>
                <Head>
                    <title>milner</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    wow!
                </main>
            </div>
        </Layout>

    );
};