import React from 'react';
import styled from 'styled-components';


// Recipe component
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <RecipeCard>
            <H2>{title}</H2>
            <Ol>
                {ingredients.map(ingredient =>(
                    <Li>{ingredient.text}</Li>
                ))} 
            </Ol>
            <P>{calories}</P>
            <RecipeImage src={image} alt=""></RecipeImage>
        </RecipeCard>
    )
};

export default Recipe;

// styled components
const RecipeCard = styled.div`
`;

const H2 = styled.h2`
`;

const P = styled.p`
`;

const RecipeImage = styled.img`
`;

const Ol = styled.ol`
`;

const Li = styled.li`
`;