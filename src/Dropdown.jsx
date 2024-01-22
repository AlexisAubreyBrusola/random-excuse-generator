import PropTypes from 'prop-types';

const Dropdown = ({ category, handleDropdownChange }) => {
  return (
    <div>
      <select
        value={category}
        onChange={handleDropdownChange}
        style={{ fontSize: '1.5rem', padding: '10px 15px' }}
      >
        <option value='family'>Family</option>
        <option value='office'>Office</option>
        <option value='children'>Children</option>
        <option value='college'>College</option>
        <option value='party'>Party</option>
        <option value='funny'>Funny</option>
        <option value='unbelievable'>Unbelievable</option>
        <option value='developers'>Developers</option>
        <option value='gaming'>Gaming</option>
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  handleDropdownChange: PropTypes.func.isRequired,
};

export default Dropdown;
