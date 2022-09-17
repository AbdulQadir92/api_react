import {useEffect, useState} from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const abortController = new AbortController();

    useEffect(() => {
        fetch(url, {signal: abortController.signal})
          .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data');
            }
                return res.json();
          })
          .then(data => {
              setData(data);
          })
          .catch(error => {
            if(error.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setError(error);
            }
          })

          return () => abortController.abort();
    }, [url])

    return [data, error]
}

export default useFetch