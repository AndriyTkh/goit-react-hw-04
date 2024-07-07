import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const userSearch = form.elements.userSearch.value.trim();

    if (userSearch === "") {
      alert("Input is empty");
      return;
    }

    onSearch(userSearch);

    form.reset();
  };

  return (
    <header className={css.headerBox}>
      <form className={css.headForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="userSearch"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
