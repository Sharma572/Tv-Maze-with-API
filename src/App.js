import React, { useState, useEffect, useCallback } from "react";
import Actor from "./component/Actor";
import Show from "./component/Show";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const [radio, setRadio] = useState("");
  const [input, setInput] = useState("");
  const [actor, setActor] = useState([]);
  const [show, setShow] = useState([]);
  const [actShow, setActShow] = useState([]);

  const [notFound, setNotfound] = useState(true);

  const updateRadioData = (e) => {
    setRadio(e.target.value);
    setActor([]);
    setShow([]);
    setActShow([]);
    setInput("");
  };
  useEffect(() => {
    if (radio === "actor") {
      console.log(radio);
      const fetchActorData = async () => {
        const response = await fetch(
          `https://api.tvmaze.com/search/people?q=${input}`
        );
        const data = await response.json();
        setActor(data);
      };
      fetchActorData();
    } else {
      if (input !== "") {
        const fetchShowData = async () => {
          const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${input}`
          );
          const data = await response.json();
          setShow(data);
        };
        fetchShowData();
      }
    }
  }, [input]);
  useEffect(() => {
    if (actor.length !== 0) {
      const fetchActShowData = async () => {
        const response = await fetch(
          `https://api.tvmaze.com/people/${actor[0]?.person?.id}/castcredits?embed=show`
        );
        const data = await response.json();
        setActShow(data);
        if (actShow.length === 0) {
          setNotfound(false);
        }
      };
      fetchActShowData();
    }
  }, [actor, input]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const showsName = (event) => {
    setInput(event.target.value);
  };

  const optimisedVesion = useCallback(debounce(showsName), []);

  return (
    <div classname="App">
      <Navbar />

      <div className="m-lg-4 mt-4 p-sm-4 d-flex justify-content-center align-items-center flex-column flex-lg-row ">
        <div className="input ml-2 m-2 ">
          <input
            id="input-form"
            classname="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={optimisedVesion}
          ></input>
        </div>
        <div id="radio-container ms-4">
          <div className="ml-4 mt-2 d-inline">
            <input
              classname="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="actor"
              onChange={updateRadioData}
            />
            <label classname="form-check-label" for="flexRadioDefault1">
              <span className="p-2 ">Actor</span>
            </label>
          </div>
          <div className="ml-3 mt-2 d-inline">
            <input
              classname="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="show"
              onChange={updateRadioData}
            />
            <label classname="form-check-label" for="flexRadioDefault2">
              <span className="p-2 me-4">Show</span>
            </label>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        {radio === "actor" ? (
          actShow.length !== 0 ? (
            <Actor data={actShow} />
          ) : (
            <div style={{ height: "380px" }}>
              {notFound ? (
                <h1 className="text-center">Search By Actor Name</h1>
              ) : (
                <h1 className="mt-4 text-danger">Not found</h1>
              )}
            </div>
          )
        ) : radio === "show" ? (
          show.length !== 0 ? (
            <Show data={show} />
          ) : (
            <div style={{ height: "380px" }}>
              <h1 className="text-center ">Search By Show Name</h1>
            </div>
          )
        ) : (
          <div style={{ height: "380px" }}>
            <h1 className="text-center ">Select Category</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
