import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar} from 'react-icons/hi';
import { RecipeInformation, InfoBlock} from './RecipeInfo.styled';

export const RecipeInfo = ({name, time, servings, calories}) => {
    return(
        <>            
            <RecipeInformation>
                <InfoBlock>
                    <BsAlarm />
                    {time} mins
                </InfoBlock>
                <InfoBlock>
                    <HiOutlineChartPie />
                    {servings} servings
                </InfoBlock>
                <InfoBlock>
                    <HiOutlineChartBar />
                    {calories} calories
                </InfoBlock>
            </RecipeInformation>
        </>
    );
}