import { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import getImgData from "../../unsplash-api";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (userInput) => {
    try {
      setPictures([]);
      setLoading(true);

      const response = await getImgData(userInput, 1);
      console.log(response.data);
      setPictures(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {loading && <Hourglass height={"40"} />}
    </>
  );
}
