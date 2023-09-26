import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="container p-3">
      <div className="row">
        <h2>Vehicles</h2>
        <div className="col-12">
          <div
            className="overflow-auto"
            style={{ width: "100%", whiteSpace: "nowrap" }}
          >
            <div className="d-flex">
              {store.vehicles.map((vehicles, index) => {
                return (
                  <div
                    className="card mx-3"
                    style={{ minWidth: "400px", maxWidth: "200px" }} key={index}>
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/vehicles/" +
                        (index + 4) +
                        ".jpg"
                      }
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
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
                        {vehicles.name}
                      </h5>
                    </div>
                    <Link type="button" className="btn btn-light" to={`/vehicles/${vehicles.uid}`}>Light</Link>
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

export default Vehicles;
