
const PostRequest = (url, dataObject, setData = null, setError = null) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObject)
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could save data');
            }
            return res.json();
        })
        .then(data => {
            if (setData) {
                setData(data)
            }
            console.log(data);
        })
        .catch(error => {
            if (setError) { setError(error) }
            console.log(error);
        })
}

export default PostRequest