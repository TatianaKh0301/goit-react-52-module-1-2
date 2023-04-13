// import { RecipeList } from "./RecipeList";
// import recipes from '../recipes.json';
// import { PaymentWidget } from './PaymentWidget';
import { SignUpForm } from "./SignUpForm";
export const App = () => {
  return (
    <div>
      {/* <RecipeList recipes={recipes}/> */}
      {/* <PaymentWidget /> */}
      <SignUpForm onSubmit={values => console.log(values)}/>
    </div>
  );
};
