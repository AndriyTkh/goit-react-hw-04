import css from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <header className={css.headerBox}>
      <form className={css.headForm}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
