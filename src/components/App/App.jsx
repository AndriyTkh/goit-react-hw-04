import { useState, useEffect } from "react";

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
  const [moreBtn, setMoreBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (totalHits > page * 15) {
      setMoreBtn(true);
    }
  }, [totalHits, page]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const userSearch = form.elements.userSearch.value.trim();

    if (userSearch === "") {
      alert("Input is empty");
      return;
    }

    setPictures([]);
    loadPage(userSearch);
    setInput(userSearch);
    console.log(input);

    form.reset();
  };

  const loadPage = async (userInput) => {
    try {
      setLoading(true);
      setMoreBtn(false);
      console.log(page);

      const response = await getImgData(userInput, page);

      setTotalHits(response.data.total);

      console.log(response.data.total);

      setPictures(pictures.concat(response.data.results));
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSubmit} />

      <Modal parentSelector={() => document.querySelector("#root")}>
        <p>Modal Content.</p>
      </Modal>

      {pictures.length > 0 && <ImageGallery pictures={pictures} />}

      {loading && (
        <div className={css.centered}>
          <Hourglass height={"40"} />
        </div>
      )}

      {moreBtn && (
        <LoadMoreBtn
          onClick={() => {
            loadPage(input);

            console.log(input);
            setInput("lol");
            console.log(input);
          }}
        />
      )}
    </>
  );
}
