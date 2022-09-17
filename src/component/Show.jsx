
export default function Show({ data }) {
	
  console.log(data);
  return (
	
    <div className="d-flex flex-wrap m-md-5 justify-content-around">
	
      {data.map((element) => {
        return (
          <div
            key={element.show.id}
            className="mt-4 card"
            style={{ width: "150px" }}
          >

{element.show.image ? (
                        <img
                          src={element.show.image.medium}
                          style={{
							width:"100%",
                            height:"100%"
                          }}
                          alt={
                            element.show.name != null
                              ? element.show.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div className="poster" style={{ height: "325px" }}>
                          <img
                            src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            style={{
								width:"100%",
								height:"100%"
                            }}
                            alt={element.show.name}
                          />
                        </div>
                      )}

            <div class="card-body container">
              <h6 class="card-title">{element.show.name}</h6>
              <a href={element.show.url} class="btn btn-outline-success btn-sm">
                More info
              </a>
              <br />
              <br />
              <span class="badge bg-warning text-dark">
                {element?.show?.rating?.average}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
