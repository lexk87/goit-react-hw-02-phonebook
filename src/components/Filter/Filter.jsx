import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <FilterContainer>
            <FilterLabel htmlFor="filter">
                Find contacts by name
                <FilterInput
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                />
            </FilterLabel>
        </FilterContainer>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
