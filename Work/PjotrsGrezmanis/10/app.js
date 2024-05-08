document.addEventListener('DOMContentLoaded', () => {
    const dogSelector = document.getElementById('dogSelector');
    const dogImgContainer = document.getElementById('dogImg');


    let renderBreeds = function () {
        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.value;
            option.textContent = breed.name;
            dogSelector.appendChild(option);
        });
    }


    function handleBreedChange() {
        const selectedBreed = dogSelector.value;
        const apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;


        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {

                dogImgContainer.innerHTML = `<img src="${data.message}" alt="Dog breed" />`;
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
            });
    }


    renderBreeds();
    dogSelector.addEventListener('change', handleBreedChange);
});