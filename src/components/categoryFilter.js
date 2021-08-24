import PropTypes from 'prop-types';
import { categories } from '../table';

function CategoryFilter({ handleFilter }) {
  return (
    <div>
      <span>Filter By Category: </span>
      <select name="categoryFilter" id="categoryFilter" onChange={handleFilter}>
        {['All', ...categories].map(category => <option key={category}>{category}</option>)}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
