import { withRouter } from "react-router-dom";
import React, { useState } from "react";
// import { useAuth0 } from "../contexts/auth0-context";

import API from "../../utils/API";

import "./newLog.css";

import Header from "../Header/Header";

//export default withRouter function newLog() {
const NewLog = function () {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  // console.log("LOADED");

  const [body, setBody] = useState("");

  console.log(body);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col offset-md-3">
            <h2>Write New Log</h2>
          </div>
        </div>
        <div className="row" id="describeDayRow">
          <div className="col offset-md-1">
            <h4>Describe Your Day</h4>
            <form action="">
              <div className="form-group">
                <label htmlFor="body">Example textarea</label>
                <textarea
                  className="form-control"
                  id="body"
                  rows="15"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  API.saveLog(body).then((response) => {
                    console.log(response);
                  });
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col offset-md-3">
            <div className="card">
              <img
                src="https://lh3.googleusercontent.com/proxy/b03IrgAtarW7QIt151_KPLrvzvRXrA9K1ixJYeVmk8oqo_HwRjaVxo8_GXTqNmTa0M8gmZ0hUKgRwvh4UlFf2BK6QQXbSCy88JGO9bVbLjIBfhOzsHlTAAAdcx4"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Don't know where to start?</h5>
                <p className="card-text">
                  Try some of these icebreaker topics for ideas.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://conversationstartersworld.com/icebreaker-questions/"
                  className="card-link"
                >
                  More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewLog);
