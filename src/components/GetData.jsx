import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function GetData(props) {
    const [{ data, loading, error }] = useJsonFetch(props.url, []);
    console.log(props);

    return (
        <div className='data-container'>
            {loading && <div>Loading...</div>}
            {error && <div>{error.toString}</div>}
            <div className='data-status'>{data.status}</div>
        </div>
    )
}