import {useLoaderData} from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import {useEffect, useState} from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const cards = useLoaderData();

  useEffect(() => {
    setFilteredData(cards);
  }, [cards]);

  const handleSearch = () => {
    if (value.trim() !== "") {
      const filtered = cards.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setValue("");
    } else {
      setFilteredData(cards);
    }
  };

  return (
    <div>
      <Banner
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      ></Banner>
      <div className="mt-10">
        <Cards filteredData={filteredData}></Cards>
      </div>
    </div>
  );
};

export default Home;
