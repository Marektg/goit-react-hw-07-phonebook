import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../redux/Actions';

const FilteredUsers = () => {
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();
    const onFilter = e => {
        dispatch(filterContacts(e.target.value));
    };
    return (
        <> <h5>Find contact by name</h5>
            <input
                onChange={onFilter}
                type="text"
                value={filter}
                placeholder=" ">
            </input></>
       
    );
};



export default FilteredUsers;