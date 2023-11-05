// recipe data here 
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        // "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "imageSrc": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=1617&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        // "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "imageSrc": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMHRhY29zfGVufDB8fDB8fHww",

        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const showAllBtn = document.getElementById("showAll");
const showVegBtn = document.getElementById("showVeg");
const showNonVegBtn = document.getElementById("showNonVeg");
const ratingFilters = document.querySelectorAll('input[type="radio"][name="rating"]');
const openDrawerButton = document.getElementById("openDrawerButton");
const mobileDrawer = document.getElementById("mobileDrawer");
const mobileDrawerClose = document.getElementById("mobDrawerClose");

// Function to render recipe cards
function renderRecipes(recipesToShow) {
    recipeContainer.innerHTML = "";
    recipesToShow.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        // Create the card content here (name, image, type, time, rating, like button)
        card.innerHTML = 
            `<img src="${recipe.imageSrc}" alt="${recipe.name}">
            <p>${recipe.type}</p>
            <div class="titleRating">
            <h2>${recipe.name}</h2>
            <p><img src="star.png" alt="rating"> ${recipe.rating}</p></div>
            <div class="timeLike">
            <p>${recipe.time}</p>
            <button class="like-button"></button>
            <img src="msg.png" alt="comment" width="30px" height="30px">
            </div>
        `;
        // Add a click event listener to the like button
        const likeButton = card.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
        // Toggle the isLiked property
            recipe.isLiked = !recipe.isLiked;
        // Toggle the "liked" class to change the background image
            likeButton.classList.toggle("liked", recipe.isLiked);
        });
      // Set the initial state of the "liked" class and background image
        if (recipe.isLiked) {
            likeButton.classList.add("liked");
        }
        recipeContainer.appendChild(card);
    });
}

// Function to handle search input
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
    renderRecipes(filteredRecipes);
});

openDrawerButton.addEventListener("click",()=> {
    mobileDrawer.style.display = "block";
    mobileDrawer.style.position= "fixed";
    mobileDrawer.style.top ="0px";
    mobileDrawer.style.textDecoration="none";

});
mobileDrawerClose.addEventListener("click",()=> {
    mobileDrawer.style.display = "none";

});


// Function to handle toggle buttons
showAllBtn.addEventListener("click", () => {
    renderRecipes(recipes);
});

showVegBtn.addEventListener("click", () => {
    const vegRecipes = recipes.filter(recipe => recipe.type === "veg");
    renderRecipes(vegRecipes);
});

showNonVegBtn.addEventListener("click", () => {
    const nonVegRecipes = recipes.filter(recipe => recipe.type === "non-veg");
    renderRecipes(nonVegRecipes);
});

// Function to handle rating filters
ratingFilters.forEach(filter => {
    filter.addEventListener("change", () => {
        const filterValue = filter.value;
        let filteredRecipes = [];
        if (filterValue === "above4.5") {
            filteredRecipes = recipes.filter(recipe => recipe.rating > 4.0);
        } else if (filterValue === "below4.0") {
            filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
        } else {
            filteredRecipes = recipes;
        }
        renderRecipes(filteredRecipes);
    });
});

// Initial rendering of recipes
renderRecipes(recipes);
