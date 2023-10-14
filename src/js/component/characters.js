import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="container p-3">
      <div className="row">
        <h2>Characters</h2>
        
        <div className="col-12">
          <div
            className="overflow-auto"
            style={{ width: "100%", whiteSpace: "nowrap" }}
          >
            <div className="d-flex">
              {store.characters.map((people, index) => {
                return (
                  <div
                    className="card mx-3"
                    style={{ minWidth: "400px", maxWidth: "200px" }}
                    key={index}
                  >
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/characters/" +
                        (index + 1) +
                        ".jpg"
                      }
                      className="card-img-top"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {people.name}
                      </h5>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly p-2">
                      <Link
                        type="button"
                        className="btn btn-outline-secondary w-50"
                        to={`/character/${people.uid}`}
                      >
                        Details
                      </Link>

                      <button type="button" className="btn btn-outline-primary" onClick={ () => actions.addFavorite(people)}>
                       Favorite
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
