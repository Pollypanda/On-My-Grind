import React, { Component, useEffect, useStae } from 'react';

const RecipeChoices = ({handleChange, label, choices, checked}) => {
    
    return (
        <div className='radio-buttons'>
            {choices &&
                choices.map((choice) => (
                    <li key={choice}>
                        <input 
                            // id and value keep track of what our form is recognizing as our choice.
                            id={choice}
                            value={choice}
                            // groups input buttons together so that the app recognizes they are all answers to the same question.
                            name={label}
                            type="radio"
                            // will let the form know what to do when the user selects a choice.
                            onChange={handleChange}
                            // keeps track of whether the radio button will be selected or deselected.
                            checked={checked == choice}
                        />
                            {choice}
                    </li>
            ))
            }

        </div>
    )
}

export default RecipeChoices;