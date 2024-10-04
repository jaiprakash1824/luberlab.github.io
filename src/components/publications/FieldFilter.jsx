import PropTypes from "prop-types";

const FieldFilter = ({
  data,
  selectedField,
  setSelectedField,
  filterVisibility,
  toggleFilterSectionVisibility,
}) => {
  const uniqueFields = Array.from(new Set(data.map((row) => row.Field))).filter(
    (field) => field
  );

  const handleFieldSelect = (field) => {
    const updatedFields = selectedField.includes(field)
      ? selectedField.filter((selected) => selected !== field)
      : [...selectedField, field];

    setSelectedField(updatedFields);
  };

  return (
    <div className="my-4">
      <h4
        className="flex justify-between cursor-pointer mb-2 border-b-2 border-black"
        onClick={() => toggleFilterSectionVisibility("field")}
      >
        <span className="font-bold">Field</span>
        <span>{filterVisibility.field ? "-" : "+"}</span>
      </h4>
      {filterVisibility.field && (
        <>
          {uniqueFields.map((field) => (
            <div
              key={field}
              className={`cursor-pointer hover:underline ${
                selectedField.includes(field)
                  ? "text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleFieldSelect(field)}
            >
              {field}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

FieldFilter.propTypes = {
  data: PropTypes.array.isRequired,
  selectedField: PropTypes.array.isRequired,
  setSelectedField: PropTypes.func.isRequired,
  filterVisibility: PropTypes.shape({
    sort: PropTypes.bool.isRequired,
    type: PropTypes.bool.isRequired,
    year: PropTypes.bool.isRequired,
    field: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFilterSectionVisibility: PropTypes.func.isRequired,
};

export default FieldFilter;
