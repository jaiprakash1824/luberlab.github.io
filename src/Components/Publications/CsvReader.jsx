import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./research.css";
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
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [filterVisibility, setFilterVisibility] = useState({
    sort: true,
    type: true,
    year: true,
    field: false,
  });

  useEffect(() => {
    fetch(`${baseURL}/research.csv`)
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
      return 0; // No sorting applied
    }
  });

  return (
    <div className="Publish-main">
      <div className="filter-toggle" onClick={toggleFiltersVisibility}>
        {filtersVisible ? (
          <span className="minus">&ndash; Filters</span>
        ) : (
          <span className="plus">+ Filters</span>
        )}
      </div>
      <div className="manage">
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
                      .slice(5) // Assuming authors start from index 5 in your data
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
    </div>
  );
};

export default CsvReader;
