

const PostFormData = (url, formData) => {
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not save data');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}

export default PostFormData
