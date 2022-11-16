import React from "react";
import { CURRENT_YEAR } from "../../config";

export default function footer() {
  return (
    <footer className="pt-4 pt-md-5 border-top bg-light footer">
      { <div className="container">
        <div className="row">
          <div className="col-12 col-md ">
            <h5>Academy</h5>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-6 col-md">
            <h5>Links</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/uuid">
                  String to UUID
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#link">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> }
      <div className="container-fluid bg-dark">
        <div className="text-white text-center pt-2 pb-2">
          &copy; {CURRENT_YEAR}{" "}
        </div>
      </div>
    </footer>
  );
}
