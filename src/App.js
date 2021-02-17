import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function App() {

    //Authentication
  const APP_ID = '';
  const APP_KEY = '';

  // States
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('beef');


  useEffect(() => {
    getRecipes();
  }, [query]);

  // Get data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  

  return (
    <MyApp> 
      <SearchForm onSubmit={getSearch}>
        <SearchBar type="text" value={search} onChange={updateSearch} />
        <SearchButton>
          Search
        </SearchButton>
      </SearchForm>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))
      };
    </MyApp>
  );
}

export default App;

const MyApp = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
`;

const H1 = styled.h1`
`;

const SearchForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 50%;
  border: none;
  padding: 10px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
`;

const SearchButton = styled.button`
`;
