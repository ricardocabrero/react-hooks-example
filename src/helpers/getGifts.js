
const getGifts = async(category) => {

    const apiKey = 'bHWFGmDYKUIMvTL4lB4RWkf86dTvzak1';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`

    try {
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifts = data.map( img => {
            const { images } = img;
            return {
                id: img.id,
                title: img.title,
                url: images?.downsized_medium.url
            }
        })
        return gifts;

    } catch(e) {
        console.log(e.message)
    }
}

export {
    getGifts as default
}