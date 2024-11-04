import PropTypes from "prop-types";

const YearFilter = ({
  data,
  selectedYears,
  setSelectedYears,
  filterVisibility,
  toggleFilterSectionVisibility,
}) => {
  // Get all unique years from the data
  const years = Array.from(new Set(data.map((row) => row.Year))).filter(
    (year) => year
  );

  const handleYearSelect = (year) => {
    if (year === "All") {
      setSelectedYears([]);
    } else {
      const updatedYears = selectedYears.includes(year)
        ? selectedYears.filter((selectedYear) => selectedYear !== year)
        : [...selectedYears, year];

      setSelectedYears(updatedYears);
    }
  };

  return (
    <div className="my-4">
      <h4
        className="flex justify-between cursor-pointer mb-2 border-b-2 border-black"
        onClick={() => toggleFilterSectionVisibility("year")}
      >
        <span className="font-bold">Year</span>
        <span>{filterVisibility.year ? "-" : "+"}</span>
      </h4>
      {filterVisibility.year && (
        <>
          <div
            className={`cursor-pointer hover:underline ${
              selectedYears.length === 0 ? "text-blue-600" : "text-gray-800"
            }`}
            onClick={() => handleYearSelect("All")}
          >
            All
          </div>
          {years.map((year) => (
            <div
              key={year}
              className={`cursor-pointer hover:underline ${
                selectedYears.includes(year) ? "text-blue-600" : "text-gray-800"
              }`}
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
