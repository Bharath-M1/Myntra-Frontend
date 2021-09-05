import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './productFilter.css'

export const ProductsWithFilter = (props) => {
  //setting for slick carousel
  const settings = {
    fade: true,
    lazyLoad: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  //usestate for setting and getting data from axios
  const [data, setData] = useState([])
  let product = props.match.params.type
  console.log(product)
  let query
  const forMen = () => {
    axios.get(`/home/product?for=men`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const forWomen = () => {
    axios.get(`/home/product?for=women`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }

  const belowFive = () => {
    axios.get(`/home/product?price[lt]=500`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const belowThousand = () => {
    axios.get(`/home/product?price[lt]=1000`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const aboveThousandFive = () => {
    axios.get(`/home/product?price[gt]=1500`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const Highlander = () => {
    axios.get(`/home/product?brandName=HIGHLANDER`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const wrong = () => {
    axios.get(`/home/product?brandName=WROGN`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const discountBloWFifty = () => {
    axios.get(`/home/product?discountpercentage=50`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const discountBlowSixty = () => {
    axios.get(`/home/product?discountpercentage=65`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const Huetrap = () => {
    axios.get(`/home/product?brandName=Huetrap`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  const infant = () => {
    axios.get(`/home/product?for=infant`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }
  //if data is comes from catogeries it uses brlow axios request
  const Catogetries = () => {
    //axios send the dynamic data to backend to fetch data
    axios.post(`/home/product/${product}`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })
  }

  //if data is comes from gallery part axios send below request
  const galley = () => {

    axios.get(`/home/product`)
      .then(res => { setData(res.data), console.log(res.data) })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      })

  }
  useEffect(() => {
    //use effect switches to which route we need to use
    if (product) {

      Catogetries()
    } else {

      galley()
    }

  }, [])
  //returns jsx  template for productwithfilter component
  return (
    <div className="container">
      <nav className="row">
        <ol className="bg-transparent col-lg-12  breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" className="text-muted">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-muted">Fashion</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-muted">Men</a>
          </li><li className="breadcrumb-item">
            <a href="#" className="text-muted">Shirt</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-dark active"
            ><strong >Casual Shirts For Men</strong></a
            >
          </li>
        </ol>
      </nav>
      <div className="row">
        {/*  <!-- side bar code --> */}
        <div className="col-2 border">
          <h2>Filters</h2>
          <hr />
          <Form>
            <FormGroup tag="fieldset">

              <FormGroup className="mb-2" check>
                <Label check>
                  {/* <Link to={`/products/?for=women&sort=-price`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                  <Input type="radio" onClick={forMen} name="categories" />Men
                  {/* </Link> */}
                </Label>
              </FormGroup>
              <FormGroup className="mb-2" check>
                <Label check>
                  <Input type="radio" onClick={forWomen} name="categories" />Women
                </Label>
              </FormGroup>
              <FormGroup className="mb-2" check>
                <Label check>
                  <Input type="radio" onClick={infant} name="categories" />Infant
                </Label>
              </FormGroup>
            </FormGroup>
            <hr />
            <h4 className="mb-2 mt-2 font-weight-bolder">BRAND</h4>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="checkbox" onClick={Highlander} />Highlander
              </Label>
            </FormGroup>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="checkbox" onClick={Huetrap} />Huetrap
              </Label>
            </FormGroup>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="checkbox" onClick={wrong} />Wrogn
              </Label>
            </FormGroup>
            <hr />
            <h4 className="mb-2 mt-2 font-weight-bolder">PRICE</h4>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="radio" onClick={belowFive} name="price" />Below Rs.500
              </Label>
            </FormGroup>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="radio" onClick={belowThousand} name="price" />Below Rs.1000
              </Label>
            </FormGroup>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="radio" onClick={aboveThousandFive} name="price" />Above Rs.1500
              </Label>
            </FormGroup>
            <hr />
            <h4 className="mb-2 font-weight-bolder">DISCOUNT RANGE</h4>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="radio" onClick={discountBloWFifty} name="discount" />50% Discount
                </Label>
            </FormGroup>
            <FormGroup className="mb-2" check>
              <Label check>
                <Input type="radio" onClick={discountBlowSixty} name="discount" />65% Discount
                </Label>
            </FormGroup>
          </Form>
        </div>

        {/*     <!-- main view code --> */}
        <div className="col-9 border">
          {/*   <!-- For gallery --> */}
          <div className="row mt-3">
            {data.map(each => {
              console.log(each);
              return (
                <div className="col-lg-3" key={each._id}>
                  {/* link to browser address */}
                  <Link to={`/products/${each.productType}/${each._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {/* <!-- adding owl css --> */}
                    <div>
                      <div className="item">
                        <Slider {...settings}>
                          {each.productImage.map(ima => {
                            return (

                              <img
                                src={ima.url}
                                alt="banner image"
                                className="img-fluid"
                                key={ima.url}
                              />)
                          })}
                        </Slider>
                      </div>
                    </div>
                    <div className="red">
                      <p className="p-0 m-0"><b>{each.brandName}</b></p>
                      <span className="text-muted h6">{each.productDescription}</span>
                      <p className="h6">
                        <b> Rs.{each.price} </b>&nbsp;
                        <span className="text-warning h6"> ({each.discountpercentage}% OFF)</span>
                      </p>
                    </div>
                    <br /><br />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div >

  )
}


