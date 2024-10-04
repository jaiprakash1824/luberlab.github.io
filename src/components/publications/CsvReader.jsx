import { useState, useEffect } from "react";
import Papa from "papaparse";
import SortFilter from "./SortFilter";
import TypeFilter from "./TypeFilter";
import YearFilter from "./YearFilter";
import FieldFilter from "./FieldFilter";

const baseURL = import.meta.env.BASE_URL;

const CsvReader = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedField, setSelectedField] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false); // Default hidden for mobile overlay
  const [filterVisibility, setFilterVisibility] = useState({
    sort: false,
    type: true,
    year: false,
    field: false,
  });

  useEffect(() => {
    fetch(`${baseURL}assets/research.csv`)
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      });

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setFiltersVisible(false); // Hidden by default on mobile

    const handleResize = () => {
      setFiltersVisible(false); // Ensure filters are hidden on mobile initially
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prevVisible) => !prevVisible);
  };

  const toggleFilterSectionVisibility = (section) => {
    setFilterVisibility((prevVisibility) => ({
      ...prevVisibility,
      [section]: !prevVisibility[section],
    }));
  };

  const filteredPapers = data
    .filter((row) =>
      row.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((row) =>
      selectedField.length > 0 ? selectedField.includes(row.Field) : true
    )
    .filter((row) =>
      selectedYears.length > 0 ? selectedYears.includes(row.Year) : true
    )
    .filter((row) =>
      selectedType.length > 0 ? selectedType.includes(row.Paper) : true
    );

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.Year.localeCompare(b.Year);
    } else if (sortOrder === "desc") {
      return b.Year.localeCompare(a.Year);
    } else {
      return 0;
    }
  });

  return (
    <div className="flex flex-col md:flex-row gap-4 p-0">
      {/* Filters Panel */}
      <div
        className={`md:w-1/4 bg-white md:block fixed md:relative top-0 left-0 w-full z-10 transition-transform duration-300 ${
          filtersVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 h-full md:h-auto md:py-0 py-6 px-4`}
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
          <span className="text-lg font-semibold">Filters</span>
          <button
            className="text-lg font-semibold"
            onClick={toggleFiltersVisibility}
          >
            &times; {/* Close button */}
          </button>
        </div>

        <div className="filters space-y-6">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search papers by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
            />
          </div>

          <SortFilter
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filterVisibility={filterVisibility}
            toggleFilterSectionVisibility={toggleFilterSectionVisibility}
          />

          <TypeFilter
            data={data}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            filterVisibility={filterVisibility}
            toggleFilterSectionVisibility={toggleFilterSectionVisibility}
          />

          <YearFilter
            data={data}
            selectedYears={selectedYears}
            setSelectedYears={setSelectedYears}
            filterVisibility={filterVisibility}
            toggleFilterSectionVisibility={toggleFilterSectionVisibility}
          />

          <FieldFilter
            data={data}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            filterVisibility={filterVisibility}
            toggleFilterSectionVisibility={toggleFilterSectionVisibility}
          />
        </div>
      </div>

      {/* Right Content: Papers */}
      <div className="md:flex-1 w-full">
        {/* Filters Toggle Button (Mobile) */}
        <div
          className="filter-toggle cursor-pointer py-2 text-lg text-black md:hidden"
          onClick={toggleFiltersVisibility}
        >
          {filtersVisible ? (
            <span>&ndash; Hide Filters</span>
          ) : (
            <span>+ Show Filters</span>
          )}
        </div>

        <div className="paper-container space-y-6 w-full">
          {sortedPapers.length > 0 ? (
            sortedPapers.map((row, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 border-b border-gray-200"
              >
                <div className="meta text-gray-500 space-x-4 mb-2 text-sm">
                  <span className="font-semibold text-black">{row.Paper}</span>
                  <span className="text-[#0064b1]">{row.Field}</span>
                  <span>{row.Year}</span>
                </div>
                <h2 className="name text-black font-semibold text-xl mb-1 leading-tight">
                  <a
                    href={row.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {row.Title}
                  </a>
                </h2>
                <p className="authors text-gray-600 text-sm">
                  {Object.keys(row)
                    .slice(5)
                    .map((authorKey) => row[authorKey])
                    .join(", ")}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No papers found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CsvReader;
