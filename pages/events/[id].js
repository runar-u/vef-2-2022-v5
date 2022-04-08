import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Event } from '../../components/event/Event';



export default function Eventpage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    
    useEffect(() => {
        if (router.isReady) {
            async function fetchData() {
                setLoading(true)
                setError(null);

                let json;
                const id = router.query.id

                try {
                    const result = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${id}`);

                    if (!result.ok) {
                        throw new Error('result not ok');
                    }

                    json = await result.json();
                    setData(json);
                } catch (e) {
                    console.warn('unable to fetch data', e);
                    setError('Gat ekki sótt gögn.');

                } finally {
                    setLoading(false);
                }
            }
            
            fetchData();
        }
    }, [router.isReady, router.query.id]);

    if (error) {
        return <p>Villa kom upp: {error}</p>
    }

    if (loading) {
        return <p>Sæki gögn...</p>;
    }

    const loggedin = false;
    if (data) {
        
        return (
            <Event
              title={data.name}
              description={data.description}
              registrations={data.registrations}
              loggedin={loggedin}
            />
          );
    }

    return null;
    
}
/*
export async function getStaticPaths() {
    // TODO
    const paths =  {params: { id: "1" },
            params: { id: "2" },
            params: { id: "3" }};
    return {paths, fallback: false};
}

export async function getStaticProps({ params }) {

    const result = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${params.id}`);

    if (!result.ok) {
        throw new Error('result not ok');
    }

    const event = await result.json();
    
    return {
        props: { event }
    }
}*/