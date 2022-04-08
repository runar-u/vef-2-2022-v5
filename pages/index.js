import { useEffect, useState } from "react"
import { Events } from "../components/events/Events";

export default function events() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError(null);

            let json;

            try {
                const result = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events');

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
    }, []);

    if (error) {
        return <p>Villa kom upp: {error}</p>
    }

    if (loading) {
        return <p>Sæki gögn...</p>;
    }

    if (data) {
        console.log(data);
        return <Events title="Viðburðir á næstunni" events={data.items} />;
    }

    return null;
}