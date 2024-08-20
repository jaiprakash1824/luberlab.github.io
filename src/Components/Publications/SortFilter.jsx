import React from 'react';
import PropTypes from 'prop-types';
import "./research.css";

const SortFilter = ({ sortOrder, setSortOrder, filterVisibility, toggleFilterSectionVisibility }) => (
  <div className="filter-option">
    <h4 className="filter-header-u" onClick={() => toggleFilterSectionVisibility('sort')}>
      <span className="filter-title">Sort By</span>
      <span className="filter-toggle">{filterVisibility.sort ? '-' : '+'}</span>
    </h4>
    {filterVisibility.sort && (
      <div className="sort-options">
        <div
          className={`sort-option ${sortOrder === 'desc' ? 'active' : ''}`}
          onClick={() => setSortOrder('desc')}
        >
          Newest
        </div>
        <div
          className={`sort-option ${sortOrder === 'asc' ? 'active' : ''}`}
          onClick={() => setSortOrder('asc')}
        >
          Oldest
        </div>
      </div>
    )}
  </div>
);

SortFilter.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  filterVisibility: PropTypes.shape({
    sort: PropTypes.bool.isRequired,
    type: PropTypes.bool.isRequired,
    year: PropTypes.bool.isRequired,
    field: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFilterSectionVisibility: PropTypes.func.isRequired,
};

export default SortFilter;
