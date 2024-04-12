import css from "./SearchBox.module.css";

function SearchBox({value, onAlter}) {
    return (
        <div className={css.searchWrap}>
            <p className={css.searchTitle}>Find contacts name</p>
            <input className={css.searchInput}
                type="text"
                value={value}
                onChange={(e) => onAlter(e.target.value)}
                    />
        </div>
    );
}

export default SearchBox;