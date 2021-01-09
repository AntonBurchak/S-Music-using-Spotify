export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

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

        return await result.json();
    }

    const getListOfCategories = async () => {
        const limit = 15;

        const result = await fetch(`${basePoint}browse/categories?limit=${limit}`, {
            headers: {
                'Authorization': `${getCookie('token_type')} ${getCookie('token')}`
            }
        })

        return await result.json();
    }

    const searchByTrackName = async (name) => {
        const result = await fetch(`${basePoint}search?q=${name}&type=track`, {
            headers: {
                'Authorization': `${getCookie('token_type')} ${getCookie('token')}`
            }
        })

        const data = await result.json();
        console.log(data);
    }

    getAuthToken().then((data) => {
        document.cookie = `token=${data.access_token}`;
        document.cookie = `token_type=${data.token_type}`;

        console.log(document.cookie)
    });


    return {
        getListOfCategories,
        searchByTrackName
    }
})();

export default APIController;