import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getCharactersById } from "../helpers/index";
import { useMemo } from "react";

export const CharacterPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const character = useMemo(() => getCharactersById(id), [id]);

  const { character_name, description, first_appearance, abilities, fun_fact } = character;
  const urlImage = `/assets/img/${id}.png`;

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!character) {
    return <Navigate to="/404" />
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img src={urlImage} alt={character_name} className="img-thumbnail" />
        </div>

        <div className="col-8">
          <h2>{character_name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Primera Aparición:</b> {first_appearance}
            </li>
            <li className="list-group-item">
              <b>Descripción:</b> {description}
            </li>
            <li className="list-group-item">
              <b>Dato Curioso:</b> {fun_fact}
            </li>

            <h5 className="mt-3">Habilidades</h5>
            <ul>
              {
                abilities.map((abilitie, index) => (
                  <li key={index}>{abilitie}</li>
                ))
              }
            </ul>
          </ul>

          <hr />

          <button className="btn btn-outline-primary" onClick={onNavigateBack}>
            Volver
          </button>
        </div>
      </div>
    </>
  )
}