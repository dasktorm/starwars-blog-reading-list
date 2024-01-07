import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="container p-3">
      <div className="row">
        <h2>Planets</h2>
        
        <div className="col-12">
          <div
            className="overflow-auto"
            style={{ width: "100%", whiteSpace: "nowrap" }}
          >
            <div className="d-flex">
              {store.planets.map((planets, index) => {
                return (
                  <div
                    className="card mx-3"
                    style={{ minWidth: "400px", maxWidth: "200px" }}
                    key={index}
                  >
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/planets/" +
                        (index + 1) +
                        ".jpg"
                      }
                      className="card-img-top"
                      style={{  height: "400px", objectFit: "cover" }}
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
                        {planets.name}
                      </h5>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly p-2">
                        <Link type="button" className="btn btn-outline-secondary w-50" to={`/planets/${planets.uid}`}>
                        Details
                        </Link>

                        <button type="button" className="btn btn-outline-primary" onClick={ () => actions.addFavorite(planets)}>
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

export default Planets;
