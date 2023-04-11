import { Component } from 'react';

import { RecipeInfo } from 'components/RecipeInfo';
import { Wrapper, Title, Image } from './Recipe.styled';
import { RecipeDifficulty } from 'components/RecipeDifficulty';


export class Recipe extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    }

    render() {
        const { isOpen } = this.state;
        const {
            recipe: {
                    image='https://via.placeholder.com/340x200', 
                    name, 
                    time, 
                    servings, 
                    calories, 
                    difficulty},
        } = this.props;

        return(
            <Wrapper>
                <Image src={image} alt={name} onClick={this.toggle}/>
                <Title>{name}</Title>
                {isOpen &&
                    <>
                        <RecipeInfo time={time} servings={servings} calories={calories}/>
                        <RecipeDifficulty difficulty={difficulty}/> 
                    </>                      
                }                         
            </Wrapper>
        );
    }     
};