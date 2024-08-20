import React from 'react';
import PropTypes from 'prop-types';
import "./research.css"

const FieldFilter = ({ data, selectedField, setSelectedField, filterVisibility, toggleFilterSectionVisibility }) => {
  const uniqueFields = Array.from(new Set(data.map((row) => row.Field))).filter(
    (type) => /\s/.test(type)
  );

  uniqueFields.sort((a, b) => a.length - b.length);

  const handleFieldSelect = (field) => {
    let updatedSelectedField = [];

    if (field === 'All') {
      updatedSelectedField = [];
    } else {
      if (selectedField.includes(field)) {
        updatedSelectedField = selectedField.filter((selected) => selected !== field);
      } else {
        updatedSelectedField = [...selectedField, field];
      }
    }
    setSelectedField(updatedSelectedField);
  };

  return (
    <div className="filter-option">
      <h4 className="filter-header-u" onClick={() => toggleFilterSectionVisibility('field')}>
        <span className="filter-title">Publications</span>
        <span className="filter-toggle1">{filterVisibility.field ? '-' : '+'}</span>
      </h4>
      {filterVisibility.field && (
        <>
          <div
            className={`sort-option ${selectedField.length === 0 ? 'active' : ''}`}
            onClick={() => handleFieldSelect('All')}
          >
            All
          </div>
          {uniqueFields.map((field) => (
            <div
              key={field}
              className={`sort-option ${selectedField.includes(field) ? 'active' : ''}`}
              onClick={() => handleFieldSelect(field)}
            >
              {field}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

FieldFilter.propTypes = {
  data: PropTypes.array.isRequired,
  selectedField: PropTypes.array.isRequired,
  setSelectedField: PropTypes.func.isRequired,
  filterVisibility: PropTypes.shape({
    sort: PropTypes.bool.isRequired,
    type: PropTypes.bool.isRequired,
    year: PropTypes.bool.isRequired,
    field: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFilterSectionVisibility: PropTypes.func.isRequired,
};

export default FieldFilter;
