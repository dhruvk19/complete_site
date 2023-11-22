document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const recipeQueryInput = document.getElementById('recipeQuery');
    const recipeResultsDiv = document.getElementById('recipeResults');

    searchButton.addEventListener('click', function () {
        const query = recipeQueryInput.value.trim();

        if (query !== '') {
            fetchRecipe(query);
        } else {
            alert('Please enter a recipe query.');
        }
    });

    function fetchRecipe(query) {
        const apiKey = '1TK6LuynOYFzSr/C++nfgA==djleMOZcccRftZ8L'; 
        const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(query)}`;
        fetch(apiUrl, { headers: { 'X-Api-Key': apiKey } })
            .then(response => response.json())
            .then(data => displayRecipes(data))
            .catch(error => console.error('Error fetching recipe:', error));
    }

    function displayRecipes(recipes) {
        recipeResultsDiv.innerHTML = '';

        if (recipes.length > 0) {
            recipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card';
                recipeCard.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <p>Ingredients: ${recipe.ingredients}</p>
                    <p>Servings: ${recipe.servings}</p>
                    <p>Instructions: ${recipe.instructions}</p>
                `;
                recipeResultsDiv.appendChild(recipeCard);
            });
        } else {
            recipeResultsDiv.innerHTML = '<p>No recipes found. Try another query.</p>';
        }
    }
});
