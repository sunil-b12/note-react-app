




export const curdLocal = (post) => {
    localStorage.setItem('post', JSON.stringify(post))
}

export const getData = () =>{
    const data = localStorage.getItem('post')
    return data === null ? [] : JSON.parse(data)
}



