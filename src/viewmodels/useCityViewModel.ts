import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setCity} from '../store/slices/citySlice';

export const useCityViewModel = () => {
    const dispatch = useDispatch();
    const city = useSelector((state: RootState) => state.city.city);

    const updateCity = (newCity: number) => {
        dispatch(setCity(newCity));
    };

    return {city, updateCity};
};
