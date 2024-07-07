import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ pictures }) {
  return (
    <ul>
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
