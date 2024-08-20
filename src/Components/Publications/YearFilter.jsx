import React from 'react';
import "./research.css";
import PropTypes from 'prop-types';

const YearFilter = ({ data, selectedYears, setSelectedYears, filterVisibility, toggleFilterSectionVisibility }) => {
  const years = Array.from(new Set(data.map((row) => row.Year))).filter((year) => year);
  
  const handleYearSelect = (year) => {
    const updatedYears = selectedYears.includes(year)
      ? selectedYears.filter((selectedYear) => selectedYear !== year)
      : [...selectedYears, year];

    setSelectedYears(updatedYears);
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
            onClick={() => handleYearSelect('')}
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
