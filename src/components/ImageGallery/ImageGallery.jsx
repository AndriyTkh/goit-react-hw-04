import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ pictures }) {
  return (
    <ul className={css.gallery}>
      {pictures.map((pic) => {
        return (
          <li key={pic.id}>
            <ImageCard src={pic.urls.small} alt={pic.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
