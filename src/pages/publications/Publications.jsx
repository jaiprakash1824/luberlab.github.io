import CsvReader from "../../components/publications/CsvReader";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";

const Publications = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center font-sans">
      <ScrollProgress />
      <div className="w-[75%] max-w-7xl">
        <CsvReader />
      </div>
    </div>
  );
};

export default Publications;
