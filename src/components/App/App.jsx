import { useState } from "react";

import { Hourglass } from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "react-modal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import getImgData from "../../unsplash-api";
import css from "./App.module.css";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moreBtn, setMoreBtn] = useState(true);

  const handleSearch = async (userInput) => {
    try {
      setPictures([]);
      setLoading(true);
      setMoreBtn(true);

      const response = await getImgData(userInput, 1);
      console.log(response.data.results);
      setPictures(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {};

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Modal parentSelector={() => document.querySelector("#root")}>
        <p>Modal Content.</p>
      </Modal>
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {loading && (
        <div className={css.centered}>
          <Hourglass height={"40"} />
        </div>
      )}
      {moreBtn && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}
