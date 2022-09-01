import React from "react";
import './recipe-module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className="image" src={image} alt=""/>
        </div>
    );
};

export default Recipe;