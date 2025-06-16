import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {

    const {id, character_name, description, first_appearance} = character;
    
    const urlImage = `/assets/img/${id}.png`;

    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={urlImage} alt={character_name} className="card-img" />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{character_name}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>

                                <Link to={`/hero`}>
                                    Ver Más...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}