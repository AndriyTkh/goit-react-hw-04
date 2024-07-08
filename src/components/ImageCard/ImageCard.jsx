import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <div className={css.imgBox}>
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
}
