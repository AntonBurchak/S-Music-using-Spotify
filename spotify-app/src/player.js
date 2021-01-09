
window.play = function ({
                   spotify_uri,
                   playerInstance: {
                       _options: {
                           getOAuthToken,
                           id
                       }
                   }
               })  {

    getOAuthToken(access_token => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [spotify_uri, 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr'] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        });
    });
}

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = `BQBFs3MCjoJFeaWng7huEemzi0y2SXmweFfAixyexfsDFlXx2ntr9gnDW5kqqE1fswkQDTql54u3FYItJ9m2SNUMoQ5-tS6iqbUF_xyMinYUhhbPoi9CKwAojwie_B_XHYdAoeAICYPvnSw3Eni6fo8KY84kgyY4hjYp0rX7N1_PbSx_SYavCOw`;
    let player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken(cb) { cb(token); }
    });
    window.player = player;

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);

        window.play({
            playerInstance: player,
            spotify_uri: "spotify:track:6eqth4FmYzrreFVlTlp53I",
        });
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
};