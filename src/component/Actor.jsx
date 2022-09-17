import React from "react";

export default function Actor({ data }) {
  console.log(data);

  return (
    <div className="d-flex flex-wrap mt-2 justify-content-around ">
      {data.map((Ele) => {
        return (
          (<div
            key={Ele?._embedded?.show?.id}
            className="mt-4 card"
            style={{ width: "150px" }}
          >
            <img
              src={Ele?._embedded?.show?.image?.medium }
              className="card-img-top"
              style={{ width: "150px" }}
              alt="movie show"
            />
			
            <div class="card-body container">
              <h6 class="card-title">{Ele._embedded.show.name}</h6>
              <a
                href={Ele._embedded.show.url}
                class="btn btn-outline-secondary btn-sm"
              >
                Official Page
              </a>
              <br />
              <br />
              <span class="badge bg-warning text-dark">
                {Ele?._embedded?.show?.rating?.average}
              </span>
            </div>
          </div>)
        );
      })}
    </div>
  );
}
