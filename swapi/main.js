
const button = document.querySelector('#btn');

const btn = () => {
    console.log('button clicked');
    

    axios.get('https://swapi.dev/api/planets?search=alderaan').then(function(search) {
        const residentsURLS = search.data.results[0].residents;

        for(const url of residentsURLS) {
            axios.get(url).then(function(residentResponse) {
                const residentName = residentResponse.data.name;
                const h2 = document.createElement('h2')
                h2.textContent = residentName;
                document.body.appendChild(h2)
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }) 
    .catch(function(error) {
        console.log(error);
    })
};

button.addEventListener('click', btn);

