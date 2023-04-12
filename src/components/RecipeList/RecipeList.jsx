import { Recipe } from "components/Recipe";
import { List } from "./RecipeList.styled";

export const RecipeList = ({recipes}) => {
    return(
        <List>
           {recipes.map((recipe) => (
                <li key={recipe.id}>
                    <Recipe recipe={recipe}/>
                </li>
           ))}            
        </List>
    );
}