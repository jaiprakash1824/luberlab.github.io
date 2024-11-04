import PropTypes from "prop-types";

const SortFilter = ({
  sortOrder,
  setSortOrder,
  filterVisibility,
  toggleFilterSectionVisibility,
}) => (
  <div className="mb-4 flex flex-col">
    <h4
      className="border-b-2 border-black pb-2 cursor-pointer flex justify-between items-center"
      onClick={() => toggleFilterSectionVisibility("sort")}
    >
      <span className="font-bold">Sort By</span>
      <span className="cursor-pointer">
        {filterVisibility.sort ? "-" : "+"}
      </span>
    </h4>
    {filterVisibility.sort && (
      <div className="mt-2">
        <div
          className={`cursor-pointer py-2 hover:underline ${
            sortOrder === "desc" ? "text-[#0064b1] font-bold" : ""
          }`}
          onClick={() => setSortOrder("desc")}
        >
          Newest
        </div>
        <div
          className={`cursor-pointer py-2 hover:underline ${
            sortOrder === "asc" ? "text-[#0064b1] font-bold" : ""
          }`}
          onClick={() => setSortOrder("asc")}
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
