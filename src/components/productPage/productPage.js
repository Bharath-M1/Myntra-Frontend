import React, { useEffect, useState } from "react"
import axios from 'axios'
import './product.css'
import { Link, useParams } from 'react-router-dom';

export const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [productsImage, setProductsImage] = useState([]);
  const [sizes, setsizes] = useState([]);
  const [specnames, setspecnames] = useState([]);
  const [specdetails, setspecdetails] = useState([]);

  let { id, productType } = useParams()


  useEffect(() => {
    axios.get(`/home/product/${productType}/${id}`)
      .then(
        prod => { console.log(prod), setProducts(prod.data), setProductsImage(prod.data.productImage), setsizes(prod.data.size), setspecnames(prod.data.productSpecName), setspecdetails(prod.data.productSpecDetails) }
      )
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      });
  }, [])

  return (
    <>

      <div className="container-fluid">
        <nav className='mt-0'>
          <ol className="breadcrumb bg-light">
            <li className="breadcrumb-item">
              <a href="#" className="text-muted">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-muted">
                Fashion
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-muted">
                {products.for}
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-dark active">
                <strong>{products.productType}</strong>
              </a>
            </li>
          </ol>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <div className="row mb-2 justify-content-lg-around">
                {productsImage.map(data => {
                  return (
                    <img src={data.url} className="image-fluid col-lg-5 m-1 zoom" key={data.url} />
                  )
                })}
              </div>
            </div>
            <div className="col-lg-4 col-md-2">
              <h2>{products.brandName}</h2>
              <p className="text-muted dia">
                {products.productDescription}
              </p>
              <hr />
              <p className="mb-2">
                <p className="h4 d-inline">
                  <b>Rs. {products.price}</b>
                </p>
                &nbsp; &nbsp;
                <del>
                  <strong className="h4 text-muted">Rs. {products.totalprice}</strong>
                </del>
                &nbsp;&nbsp;
                <strong className="text-warning h4">( {products.discountpercentage} % OFF)</strong>
              </p>
              <p className="text-success">inclusive of all taxes</p>
              <p className="h6 mb-3">
                <b>SELECT SIZE</b>
                <br />
                {sizes.map(data => {
                  return (
                    <button type="button" key={data.index} className="m-2 p-3 roundeds">{data}</button>
                  )
                })}
                <br />
                <span className="text-danger font-weight-bold">
                  SIZE CHART <i className="fas fa-greater-than"></i>
                </span>
              </p>


              <br />
              <br />
              <button className="btn bg-danger p-3 text-light  h5">
                <i className="fas fa-shopping-bag p-3"></i>
                <b>ADD TO BAG</b> <br />
              </button>
              <button className="btn border-dark p-3 h-2 ml-3">
                <i className="far fa-bookmark p-3"></i>
                <b className=" p-2">WISHLIST</b>
              </button>
              <br />
              <br />
              <h4 className="font-weight-bold">
                DELIVERY OPTIONS <i className="fas fa-truck"></i>
              </h4>
              <div className="input-group mb-3">
                <input
                  type="pincode"
                  className="form-control col-3"
                  placeholder="Enter Pincode"
                  pattern="[1-9][0-9]{5}"
                />
                <div className="input-group-append">
                  <span className="input-group-text text-succes">
                    change
                  </span>
                </div>
              </div>
              <p className="text-muted">
                Please enter PIN code to check delivery time  Pay on Delivery
                Availability
              </p>
              <ul className="list-unstyled text-muted">
                <li>100% Original Products</li>
                <li>Free Delivery on order above Rs. 799</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 30 days returns and exchanges</li>
                <li>Try & Buy might be available</li>
              </ul>
              <h4>
                BEST OFFERS <i className="fas fa-tag text-muted"></i>
              </h4>
              <p>
                <strong>Best Price:</strong>
                <strong className="text-warning"> Rs. 229</strong>
              </p>
              <ul className="p-0 m-3">
                <li>
                  Applicable on: Orders above Rs. 2499 (only on first purchase)
                </li>
                <li>
                  Coupon code: <strong> MYNTRA400</strong>
                </li>
                <li>
                  Coupon Discount: Rs. 400 off (check cart for final savings)
                </li>
              </ul>
              <a href="#" className="text-danger btn p-0 m-0">
                View Eligible Products
              </a>
              <br />
              <br />
              <p className="h6">
                <b>EMI option available</b>
              </p>
              <ul className="list-inline">
                <li>EMI starting from Rs.30/month</li>
              </ul>
              <a href="#" className="text-danger btn p-0 m-0">
                View Plan
              </a>
              <hr />
              <p className="h5">
                <b>
                  PRODUCT DETAILS
                  <i className="fas fa-align-left text-muted"></i>
                </b>
              </p>

              <p>
                {products.productDetails}
              </p>
              <p className="h5">
                <b>Size & Fit</b>
              </p>
              <p>
                {products.sizeandfit}
              </p>
              <p className="h5">
                <b>Material & Care</b>
              </p>
              <p>
                {products.materialandcare}
              </p>
              <p className="h5">
                <b>Specifications</b>
              </p>
              <div className="row">
                <div className="col-6 mt-3">
                  <small className="text-muted"> {specnames[0]} </small>
                  <br />
                  <p className="h5">{specdetails[0]} </p>
                  <hr />
                </div>
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[1]}</small>
                  <br />
                  <p className="h5">{specdetails[1]}</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[2]}</small>
                  <br />
                  <p className="h5">{specdetails[2]}</p>
                  <hr />
                </div>
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[3]}</small>
                  <br />
                  <p className="h5">{specdetails[3]}</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[4]}</small>
                  <br />
                  <p className="h5">{specdetails[4]}</p>
                  <hr />
                </div>
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[5]}</small>
                  <br />
                  <p className="h5">{specdetails[5]}</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[6]}</small>
                  <br />
                  <p className="h5">{specdetails[6]}</p>
                  <hr />
                </div>
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[7]}</small>
                  <br />
                  <p className="h5">{specdetails[7]}</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-3">
                  <small className="text-muted">{specnames[8]}</small>
                  <br />
                  <p className="h5">{specdetails[8]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
