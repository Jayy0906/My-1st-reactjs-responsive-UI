import React from "react";

const Destinations = () => {
  return (
    <section id="destinations" className="container my-5">
      <h2 className="text-center mb-4">Top Destinations</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="/src/assets/3.jpg"
              className="card-img-top"
              alt="Destination"
            />
            <div className="card-body">
              <h5 className="card-title">Beach Paradise</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="/src/assets/1.jpg"
              className="card-img-top"
              alt="Destination"
            />
            <div className="card-body">
              <h5 className="card-title">Mountain Escape</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="/src/assets/2.jpg"
              className="card-img-top"
              alt="Destination"
            />
            <div className="card-body">
              <h5 className="card-title">City Lights</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
