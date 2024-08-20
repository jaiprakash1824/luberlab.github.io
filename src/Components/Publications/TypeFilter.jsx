import PropTypes from "prop-types";
import "./research.css";

const TypeFilter = ({
  data,
  selectedType,
  setSelectedType,
  filterVisibility,
  toggleFilterSectionVisibility,
}) => {
  const uniqueTypes = Array.from(new Set(data.map((row) => row.Paper))).filter(
    (type) => !/\s/.test(type)
  );

  uniqueTypes.sort((a, b) => a.length - b.length);

  const handleTypeSelect = (type) => {
    let updatedSelectedType = [];

    if (type === "All") {
      updatedSelectedType = [];
    } else {
      if (selectedType.includes(type)) {
        updatedSelectedType = selectedType.filter(
          (selected) => selected !== type
        );
      } else {
        updatedSelectedType = [...selectedType, type];
      }
    }
    setSelectedType(updatedSelectedType);
  };

  return (
    <div className="filter-option">
      <h4
        className="filter-header-u"
        onClick={() => toggleFilterSectionVisibility("type")}
      >
        <span className="filter-title">Type</span>
        <span className="filter-toggle1">
          {filterVisibility.type ? "-" : "+"}
        </span>
      </h4>
      {filterVisibility.type && (
        <>
          <div
            className={`sort-option ${
              selectedType.length === 0 ? "active" : ""
            }`}
            onClick={() => handleTypeSelect("All")}
          >
            All
          </div>
          {uniqueTypes.map((type) => (
            <div
              key={type}
              className={`sort-option ${
                selectedType.includes(type) ? "active" : ""
              }`}
              onClick={() => handleTypeSelect(type)}
            >
              {type}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

TypeFilter.propTypes = {
  data: PropTypes.array.isRequired,
  selectedType: PropTypes.array.isRequired,
  setSelectedType: PropTypes.func.isRequired,
  filterVisibility: PropTypes.shape({
    sort: PropTypes.bool.isRequired,
    type: PropTypes.bool.isRequired,
    year: PropTypes.bool.isRequired,
    field: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFilterSectionVisibility: PropTypes.func.isRequired,
};

export default TypeFilter;
