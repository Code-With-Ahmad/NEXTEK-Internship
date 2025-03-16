import React from "react";
import "./pokemon.css";
import { Link } from "react-router-dom";
const NoPageFound = () => {
  return (
    <>
      <section class="page-404">
        <div class="container">
          <div class="row">
            <div class="text-center">
              <div class="four-zero-four-bg">
                <h1>404</h1>
              </div>
              <div class="content-box-404">
                <h3>No Pokemon Found</h3>
                <p>The pokemon you are looking for is not available!</p>
                <Link to="/" class="link-404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoPageFound;
