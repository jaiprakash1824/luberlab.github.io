import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./research.css";

const baseURL = import.meta.env.BASE_URL;

const CsvReader = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedField, setSelectedField] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}research.csv`)
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
    const mediaQuery = window.matchMedia("(max-width: 426px)");
    setFiltersVisible(!mediaQuery.matches); // true for desktop, false for mobile

    // Add event listener for changes in screen size
    const handleResize = () => {
      setFiltersVisible(!mediaQuery.matches); // true for desktop, false for mobile
    };

    mediaQuery.addEventListener("change", handleResize);

    // Clean up event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prevVisible) => !prevVisible);
  };

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

  const handleFieldSelect = (field) => {
    let updatedSelectedField = [];

    if (field === "All") {
      updatedSelectedField = [];
    } else {
      if (selectedField.includes(field)) {
        updatedSelectedField = selectedField.filter(
          (selected) => selected !== field
        );
      } else {
        updatedSelectedField = [...selectedField, field];
      }
    }
    setSelectedField(updatedSelectedField);
  };

  const handleYearSelect = (year) => {
    const updatedYears = selectedYears.includes(year)
      ? selectedYears.filter((selectedYear) => selectedYear !== year)
      : [...selectedYears, year];

    setSelectedYears(updatedYears);
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
      return 0; // No sorting applied
    }
  });

  const YearFilter = () => {
    const years = Array.from(new Set(data.map((row) => row.Year))).filter(
      (year) => year
    );

    return (
      <div className="filter-option">
        <h4>Year</h4>
        <label className="container">
          <input
            type="checkbox"
            value=""
            checked={selectedYears.length === 0}
            onChange={() => handleYearSelect("")}
          />
          All
          <span className="checkmark"></span>
        </label>
        {years.map((year) => (
          <label key={year} className="container">
            <input
              type="checkbox"
              value={year}
              checked={selectedYears.includes(year)}
              onChange={() => handleYearSelect(year)}
            />
            {year}
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    );
  };

  const TypeFilter = () => {
    // Get unique fields
    const uniqueTypes = Array.from(
      new Set(data.map((row) => row.Paper))
    ).filter((type) => !/\s/.test(type));

    // Sort unique fields by length
    uniqueTypes.sort((a, b) => a.length - b.length);

    return (
      <div className="filter-option">
        <h4>Type</h4>
        <label className="container">
          <input
            type="checkbox"
            value="All"
            checked={selectedType.length === 0}
            onChange={() => handleTypeSelect("All")}
          />
          All
          <span className="checkmark"></span>
        </label>
        {uniqueTypes.map((field) => (
          <label key={field} className="container">
            <input
              type="checkbox"
              value={field}
              checked={selectedType.includes(field)}
              onChange={() => handleTypeSelect(field)}
            />
            {field}
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    );
  };

  const FieldFilter = () => {
    // Get unique fields
    const uniqueFields = Array.from(
      new Set(data.map((row) => row.Field))
    ).filter((type) => /\s/.test(type));

    // Sort unique fields by length
    uniqueFields.sort((a, b) => a.length - b.length);

    return (
      <div className="filter-option">
        <h4>Publications</h4>
        <label className="container">
          <input
            type="checkbox"
            value="All"
            checked={selectedField.length === 0}
            onChange={() => handleFieldSelect("All")}
          />
          All
          <span className="checkmark"></span>
        </label>
        {uniqueFields.map((field) => (
          <label key={field} className="container">
            <input
              type="checkbox"
              value={field}
              checked={selectedField.includes(field)}
              onChange={() => handleFieldSelect(field)}
            />
            {field}
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="main">
      <div className="filter-toggle" onClick={toggleFiltersVisibility}>
        {filtersVisible ? (
          <span className="minus">&ndash; Filters</span>
        ) : (
          <span className="plus">+ Filters</span>
        )}
      </div>
      <div className={`left-filters ${filtersVisible ? "show" : "hide"}`}>
        <div className="filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search papers by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <SortFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <TypeFilter />
          <YearFilter />
          <FieldFilter />
        </div>
      </div>
      <div className={`right-content ${filtersVisible ? "show" : "hide"}`}>
        <div className="paper-container">
          {sortedPapers.length > 0 ? (
            sortedPapers.map((row, index) => (
              <div className="paper" key={index}>
                <div className="meta">
                  <span className="paper-label">{row.Paper}</span>
                  <span className="field">{row.Field}</span>
                  <span className="year">{row.Year}</span>
                </div>
                <h2 className="name">
                  <a
                    href={row.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    {row.Title}
                  </a>
                </h2>
                <p className="authors">
                  {Object.keys(row)
                    .slice(5) // Assuming authors start from index 4 in your data
                    .map((authorKey) => row[authorKey])
                    .join(", ")}
                </p>
              </div>
            ))
          ) : (
            <p>No papers found</p>
          )}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SortFilter = ({ sortOrder, setSortOrder }) => (
  <div className="filter-option">
    <h4>Sort By:</h4>
    <label className="radio-container" htmlFor="sort-newest">
      <input
        type="radio"
        id="sort-newest"
        value="desc"
        checked={sortOrder === "desc"}
        onChange={() => setSortOrder("desc")}
      />
      Newest
      <span className="radio-mark"></span>
    </label>
    <label className="radio-container" htmlFor="sort-oldest">
      <input
        type="radio"
        id="sort-oldest"
        value="asc"
        checked={sortOrder === "asc"}
        onChange={() => setSortOrder("asc")}
      />
      Oldest
      <span className="radio-mark"></span>
    </label>
  </div>
);

export default CsvReader;
