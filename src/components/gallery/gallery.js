import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import axios from "axios";

export const Gallery = () => {
  const [url, setUrl] = useState([]);
  const token = localStorage.data

  useEffect(() => {
    axios
      .get("/home/gallery", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((result) => {
        setUrl(result.data);
      })
      .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-secondary font-weight-bold mt-4 mb-4">
        BIGGEST DEALS ON TOP BRANDS
      </h1>
      <Container >
        <div className="row container-fluid" >

          {url.map((each) => {
            return (
              <div className="col-lg-3" key={each._id}>
                <Link to='/products'>
                  <img src={each.url} className="img-fluid w-100" />
                </Link>
              </div>
            );
          })}

        </div>
      </Container>
    </div >
  );
};
