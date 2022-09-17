import { useState, useEffect } from 'react';


const usePost = (url, dataObject) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObject)
        })
            .then(res => { 
                res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.log(error);
                setError(error);
            })
    }, [url])

    return [data, error]
}

export default usePost