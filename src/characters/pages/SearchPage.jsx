import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CharacterCard } from "../components/index";
import { useMemo } from "react";
import { getCharactersByName } from "../helpers";

export const SearchPage = () => {

  const { searchText, onInputChange } = useForm({ searchText: '' });

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { q = '' } = Object.fromEntries(searchParams.entries());

  const characters = useMemo(() => getCharactersByName(q), [q])

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Search a Character" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (characters.length === 0) ?
              <div className="alert alert-danger">
                No Found <b>{q}</b>
              </div> : ''
          }

          {
            characters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))
          }

        </div>

      </div>
    </>
  )
}