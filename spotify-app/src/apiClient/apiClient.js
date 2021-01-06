
const APIController = (function() {
    const clientId = 'd08f348eb8f4452fac895c872a8dc6db';
    const clientSecret = '5220576e1d024c9392bae5cf8599aa04';

    const basePoint = 'https://api.spotify.com/v1/';

    const getAuthToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();

        return {
            token: data.access_token,
            token_type: data.token_type
        }
    }

    const getListOfCategories = async () => {
        const limit = 5;

        const result = await fetch(`${basePoint}browse/categories?limit=${limit}`, {
            headers: {
                'Authorization': (await getAuthToken()).token_type + (await getAuthToken()).token
            }
        })

        const data = await result.json();
        console.log(data);

        return data;
    }

    return {
        getAuthToken,
        getListOfCategories
    }
})();

export default APIController;