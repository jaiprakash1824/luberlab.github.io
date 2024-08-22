import React from 'react';
import PropTypes from 'prop-types';

const YearFilter = ({ data, selectedYears, setSelectedYears, filterVisibility, toggleFilterSectionVisibility }) => {
  // Get all unique years from the data
  const years = Array.from(new Set(data.map((row) => row.Year))).filter((year) => year);

  // Function to handle the selection of years
  const handleYearSelect = (year) => {
    if (year === 'All') {
        setSelectedYears([]);
    } else {
      // Otherwise, toggle the selection of individual years
      const updatedYears = selectedYears.includes(year)
        ? selectedYears.filter((selectedYear) => selectedYear !== year)
        : [...selectedYears, year];

      setSelectedYears(updatedYears);
    }
  };

  return (
    <div className="filter-option">
      <h4 className="filter-header-u" onClick={() => toggleFilterSectionVisibility('year')}>
        <span className="filter-title">Year</span>
        <span className="filter-toggle1">{filterVisibility.year ? '-' : '+'}</span>
      </h4>
      {filterVisibility.year && (
        <>
          <div
            className={`sort-option ${selectedYears.length === 0 ? 'active' : ''}`}
            onClick={() => handleYearSelect('All')}
          >
            All
          </div>
          {years.map((year) => (
            <div
              key={year}
              className={`sort-option ${selectedYears.includes(year) ? 'active' : ''}`}
              onClick={() => handleYearSelect(year)}
            >
              {year}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

YearFilter.propTypes = {
  data: PropTypes.array.isRequired,
  selectedYears: PropTypes.array.isRequired,
  setSelectedYears: PropTypes.func.isRequired,
  filterVisibility: PropTypes.shape({
    sort: PropTypes.bool.isRequired,
    type: PropTypes.bool.isRequired,
    year: PropTypes.bool.isRequired,
    field: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFilterSectionVisibility: PropTypes.func.isRequired,
};

export default YearFilter;
