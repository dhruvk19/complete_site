// disregard this file 
var btn = document.querySelector('#genloc');

btn.addEventListener('click', function () {
    console.log("im here, testing, debugging"); // debugging code
    fetch('https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exintro&format=json')
        .then(res => res.json())
        .then(data => {

            const pageId = Object.keys(data.query.pages)[0];
            const destinationInfo = data.query.pages[pageId];

            const destination = destinationInfo.title;
            const description = destinationInfo.extract;

            document.getElementById('travelDestination').innerHTML = `
                <h2>${destination}</h2>
                <p>${description}</p>
            `;
        })
        .catch(err => console.error('Error fetching random travel destination:', err));
})
