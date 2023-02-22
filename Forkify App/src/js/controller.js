import recipeView from './Views/recipeView';
import * as model from './model.js';
import icons from '../img/icons.svg';
import 'regenerator-runtime/runtime';
// console.log(icons);

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

///////////////////////////////////////
console.log('This is js file for forkify app');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

// controlRecipes();

const init = function () {
  recipeView.addHandleRender(controlRecipes);
};

init();
