import PropTypes from "prop-types";

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
    <div className="my-4">
      <h4
        className="flex justify-between cursor-pointer mb-2 border-b-2 border-black"
        onClick={() => toggleFilterSectionVisibility("type")}
      >
        <span className="font-bold">Type</span>
        <span>{filterVisibility.type ? "-" : "+"}</span>
      </h4>
      {filterVisibility.type && (
        <>
          <div
            className={`cursor-pointer hover:underline ${
              selectedType.length === 0 ? "text-blue-600" : "text-gray-800"
            }`}
            onClick={() => handleTypeSelect("All")}
          >
            All
          </div>
          {uniqueTypes.map((type) => (
            <div
              key={type}
              className={`cursor-pointer hover:underline ${
                selectedType.includes(type) ? "text-blue-600" : "text-gray-800"
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
