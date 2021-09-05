import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
export const Categories = () => {
  const [images, setimages] = useState([]);
  const token = localStorage.data;
  const getvalue = async () => {
    const data = await axios.get("/home/catogeires", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setimages(data.data);
  };
  useEffect(() => {
    getvalue();
  }, []);

  if (images[0]) {
    return (
      <>
        <h1 className="text-secondary font-weight-bold mt-4 mb-4">
          CATEGORIES TO BAG
        </h1>
        <Container>
          <Row>
            <div>
              <Link to={`/products/${images[0].imageName}`}>
                <img src={images[0].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[1].imageName}`}>
                <img src={images[1].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[2].imageName}`}>
                <img src={images[2].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[3].imageName}`}>
                <img src={images[3].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[4].imageName}`}>
                <img src={images[4].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[5].imageName}`}>
                <img src={images[5].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[6].imageName}`}>
                <img src={images[6].imageUrl} />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to={`/products/${images[7].imageName}`}>
                <img src={images[7].imageUrl} />
              </Link>
            </div>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <p>error</p>
      </div>
    );
  }
};
