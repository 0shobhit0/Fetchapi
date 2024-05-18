fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>{
    if(!response.ok){
        throw new Error('Network is not responsible')
    }
return response.json();
})
.then(data => {
    const postTitlesDiv = document.getElementById('postTitles')
    data.forEach(element => {
        const titleElement = document.createElement('p')
        titleElement.textContent= element.title;
        postTitlesDiv.appendChild(titleElement);
    console.log(element.title)
    });
})
.catch(error => console.log(error))