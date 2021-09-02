const searcherror = document.getElementById('error');
const searchBook = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;

    if (searchText === "") {
        searcherror.innerText = "Search field cannot be empty.";
    } else {
        searchField.value = '';


        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        //console.log(url);
        // fetch url
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
    }
    // console.log(searchText);
    // clear data

}
// apply new function for result
const displaySearchResult = docs => {
    console.log(docs);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        //console.log(doc);
        // create new div
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 p-1" style="width: 18rem;">
                    <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="img-fluid card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Book Name: ${doc.title}</h5>   
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Author Name: ${doc.author_name}</li>
                        <li class="list-group-item">First Published: ${doc.first_publish_year}</li>
                        <li class="list-group-item">Publisher: ${doc.publisher}</li>
                        
                    </ul>
                </div>`;
        // append child for showing result
        searchResult.appendChild(div);
    })
}