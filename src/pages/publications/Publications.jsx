import CsvReader from "../../components/publications/CsvReader";
import PublicationHeader from "./PublicationHeader";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";

const Publications = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <ScrollProgress />
      <div className="w-[75%] max-w-7xl">
        <PublicationHeader />
        <CsvReader />
      </div>
    </div>
  );
};

export default Publications;
