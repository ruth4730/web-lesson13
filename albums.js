async function albumsApi() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/albums'
        const resp = await fetch(url)
        const data = await resp.json()
        const items = data.map(album => {
            const li = document.createElement('li')
            li.textContent = `${album.title}`
            li.setAttribute('id', album.id)
            li.addEventListener('click', () => showPhotos(album.id))
            li.style.cursor = 'pointer'
            return li
        })
        document.querySelector('ul').append(...items)
    } catch (error) {
        console.log(error);
    }
}
postsApi()
async function showPhotos(id) {
    document.querySelector('ul').style.display = 'none'
    try {
        const url = `https://jsonplaceholder.typicode.com/photos?photoId=${id}`
        const resp = await fetch(url)
        const data = await resp.json()
        const items = data.map(photo => {
            const img = document.createElement('img')
            //img.setAttribute('src', photo.url)
            img.setAttribute('alt', photo.title)
            return img
        })
        document.querySelector('body').append(...items)
    } catch (error) {
        console.log(error);
    }
}