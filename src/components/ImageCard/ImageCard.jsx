import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, likes, autor }) {
  return (
    <>
      <div className={css.imgBox}>
        <img className={css.image} src={src} alt={alt} />
      </div>
      <div className={css.infoBox}>
        <div className={css.infoData}>
          <p className={css.type}>Likes:</p>
          <p className={css.value}>{likes}</p>
        </div>
        <div className={css.infoData}>
          <p className={css.type}>Autor:</p>
          <p className={css.value}>{autor}</p>
        </div>
      </div>
    </>
  );
}
