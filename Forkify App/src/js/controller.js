import recipeView from './Views/recipeView';
import searchView from './Views/searchView';
import * as model from './model.js';
import icons from '../img/icons.svg';
import 'regenerator-runtime/runtime';
import searchView from './Views/searchView';
// console.log(icons);

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

export const controlSearchResults = async function () {
  try {
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render search results.
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();

// controlRecipes();

const init = function () {
  recipeView.addHandleRender(controlRecipes);
  searchView.addHandleSearch(controlSearchResults);
};

init();
