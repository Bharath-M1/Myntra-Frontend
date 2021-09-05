import React from "react";

export const Orderspage = (props) => {
  return (
    <div className="container">
      <div className="row">
        {/* <!-- intro --> */}
        <div className="col-lg-12 pb-3 mt-3 border-bottom">
          <p className="font-weight-bold d-block m-0 h4">Account</p>
          <span>Bharath </span>
        </div>

        <div className="col-lg-12">
          <div className="row">
            {/* <!-- left section--> */}
            <div className="col-lg-3 border-right">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <p className="h5">Overview</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-muted">ORDERS</p>
                      <p className="text-success font-weight-bold h5">
                        Orders & Returns
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-muted">CREDITS</p>
                      <p>Coupons</p>
                      <p>Myntra Credit</p>
                      <p>MynCash</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-muted">ACCOUNT</p>
                      <p>Profile</p>
                      <p>Saved Cards</p>
                      <p>Addresses</p>
                      <p>Myntra Insider</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!-- Right side --> */}
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12 p-2 ml-3">
                  <p className="d-inline h5">
                    Showing <span className="font-weight-bold">All Orders</span>
                  </p>
                  <button className="float-right btn border">
                    <i className="fas fa-sliders-h"></i>
                    <span className="font-weight-bold"> FILTER</span>
                  </button>
                </div>
              </div>
              {/* <!-- first item --> */}
              <div className="row">
                <div className="col-lg-12 p-5 ml-3">
                  <div className="row">
                    <div className="col-lg-1">
                      <img
                        src="./images/delivery-48.png"
                        className="p-1 rounded"
                        alt="delivered"
                      />
                    </div>
                    <div className="col-lg-11">
                      <span className="font-weight-bold h5">Delivered</span>
                      <br />
                      <span className="text-muted">
                        On Tue, 2 Feb as per your request.
                      </span>
                    </div>
                  </div>

                  {/*  <!-- image section --> */}
                  <div className="row border p-5" id="hovering">
                    <div className="col-lg-2">
                      <img
                        src="https://assets.myntassets.com/assets/images/11178692/2020/9/21/ab60c81d-45e7-43b3-9439-8c4ffcc018251600663977750-HERENOW-Men-Shirts-9531600663975875-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9 mt-3">
                      <span className="h3 font-weight-bold">HERE&NOW</span>
                      <br />
                      <span className="text-muted h5">
                        Men Black Regular Fit Faded Casual Shirt
                      </span>
                      <br />
                      <span className="text-muted h5">Size : 40 </span>
                    </div>
                    <div
                      className="col-lg-1 mt-3 float-right h1 text-muted"
                      id="selected"
                    >
                      <button
                        className="btn font-weight-bold"
                        onclick="location.href='./viewDetails.html'"
                      >
                        <span className="h2">
                          <i className="fas fa-greater-than"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              {/*  <!-- second item --> */}
              <div className="row">
                <div className="col-lg-12 p-5 ml-3">
                  <div className="row">
                    <div className="col-lg-1">
                      <i className="fas fa-times-circle fa-2x"></i>
                    </div>
                    <div className="col-lg-11">
                      <span className="font-weight-bold h5">Canceled</span>
                      <br />
                      <span className="text-muted">
                        On Tue, 23 Jan as per your request.
                      </span>
                    </div>
                  </div>

                  <div className="row border p-5" id="hoverings">
                    <div className="col-lg-2">
                      <img
                        src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/28/157b43d4-5d62-45b8-94f9-6cdf7089affe1564258151750-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-9 mt-3">
                      <span className="h3 font-weight-bold">HIGHLANDER</span>
                      <br />
                      <span className="text-muted h5">
                        Men Black Slim Fit Solid Casual Shirt
                      </span>
                      <br />
                      <span className="text-muted h5">Size : 38 </span>
                    </div>
                    <div
                      className="col-lg-1 mt-3 float-right h1 text-muted"
                      id="selected"
                    >
                      <button
                        className="btn font-weight-bold"
                        onclick="location.href='./viewDetails.html'"
                      >
                        <span className="h2">
                          <i className="fas fa-greater-than"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <p className="text-center h5">Showing 2 - 2 of 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
