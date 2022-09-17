import "../component/cards.css";
export default function Show({ data }) {
  console.log(data);
  return (
    <div className="d-flex flex-wrap m-md-5 justify-content-around">
      {data.map((element) => {
        return (
          <div
            key={element.show.id}
            className="mt-4 card "
            style={{ width: "200px" }}
            class="col-md-3 col-sm-6 col-12 mt-4"
          >
            <div class="card profile-card-5">
              <div class="card-img-block">
                {element.show.image ? (
                  <img
                    src={element.show.image.medium}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt={
                      element.show.name != null
                        ? element.show.name
                        : "Not found"
                    }
                  />
                ) : (
                  <div className="poster">
                    <img
                      src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                      style={{
                        width: "100%",
                        height: "17rem",
                      }}
                      alt={element.show.name}
                    />
                  </div>
                )}
              </div>

              <div class="card-body container d-flex flex-column justify-content-center align-items-center">
                <h6 class="card-title">{element.show.name}</h6>
                <a
                  href={element.show.url}
                  class="btn btn-outline-success btn-sm py-2 my-3 "
                >
                  More info
                </a>
                <br />
                <br />
                <span class="badge bg-warning text-dark">
                  {element?.show?.rating?.average}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
