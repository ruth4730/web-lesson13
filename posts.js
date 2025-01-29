async function postsApi() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const resp = await fetch(url)
        const data = await resp.json()
        const items = data.map(post => {
            const li = document.createElement('li')
            li.textContent = `${post.title}`
            li.setAttribute('id', post.id)
            li.addEventListener('click', () => showcomments(post.id))
            li.style.cursor = 'pointer'
            return li
        })
        document.querySelector('ul').append(...items)
    } catch (error) {
        console.log(error);
    }
}
postsApi()
async function showcomments(id) {
    document.querySelector('ul').style.display = 'none'
    try {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        const resp = await fetch(url)
        const data = await resp.json()
        const items = data.map(comment => {
            const div = document.createElement('div')
            const h=document.createElement('h1')
            h.textContent=comment.name
            div.appendChild(h)
            const p=document.createElement('p')
            p.textContent=comment.body
            div.appendChild(p)
            return div
        })
        document.querySelector('body').append(...items)
    } catch (error) {
        console.log(error);
    }
}