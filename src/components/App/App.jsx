import { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import axios from "axios";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (userInput) => {
    try {
      setPictures([]);
      setLoading(true);

      const result = await axios.get();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {pictures > 0 && <ImageGallery />}
      {loading && <Hourglass height={"40"} />}
    </>
  );
}
