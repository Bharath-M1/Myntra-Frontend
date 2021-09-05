import React from 'react'
import Delivery from './delivery-48.png'
import center from './center.jpg'
export const OrderDetails = (props) => {
  console.log(props.data)
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 pb-3 mt-3 border-bottom">
          <p className="font-weight-bold d-block m-0 h4">Account</p>
          <span>Bharath{props.data}</span>
        </div>
        <div className="col-lg-12">
          <div className="row border-right">
            <div className="col-lg-3 border-right">
              <table className="table">
                <tbody>
                  <tr>
                    <td><p className="h5">Overview</p></td>
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
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12 p-5 selec">
                  <div className="d-flex justify-content-center">
                    <a href="./index.html">
                      <img
                        src={center}
                        className="d-block"
                        alt="from"
                      />
                    </a>
                  </div>
                  <div className="text-center p-3">
                    <p className="m-0">HERE&NOW</p>
                    <p className="text-muted m-0">
                      Men Black Regular Fit Faded Casual Shirt
                    </p>
                    <p className="m-0">Size: 40</p>
                  </div>
                </div>
              </div>
              <div className="row border shadow">
                <div className="col-lg-3 text-center">
                  <img
                    src={Delivery}
                    className="p-2"
                    alt="deleverd"
                  />
                </div>
                <div className="col-lg-9 p-3">
                  <span className="font-weight-bold">Delivered On Tue, 2 Feb </span>
                  <br />
                  <span className="text-muted">as per your request</span>
                </div>
              </div>

              <div className="row border shadow mt-4 p-3 mb-3">
                <div className="col-lg-12">
                  <p className="font-weight-bold h4">Delivered Address</p>
                  <p className="font-weight-bold h6">
                    Bharath <span className="text-muted">|</span> 9566619614
                  </p>
                  <p className="text-muted">
                    9/66c,Ashok Nagar,Sundharapuram,Coimbatore-641024.
                  </p>
                  <button className="btn btn-block btn-outline-warning">
                    Change Delivery Address
                  </button>
                </div>
              </div>

              <div className="row border shadow mt-4 p-3">
                <div className="col-lg-12">
                  <span className="font-weight-bold h4">Total Order Price</span>
                  <span className="float-right h4"> ₹1424.00</span><br />
                  <span className="text-muted"> You saved </span
                  ><span className="text-success font-weight-bold">₹475.00</span
                  ><span className="text-muted"> on this order</span>
                  <span
                    className="text-danger font-weight-bold float-right text-right"
                  >View Breakup</span
                  >
                </div>
              </div>

              <div className="row border shadow mt-4 p-3">
                <div className="col-lg-12">
                  <h4 className="font-weight-bold mb-2">Updates sent to</h4>
                  <p className="text-muted">
                    <i className="fas fa-phone mr-3"></i>9566619461
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-envelope mr-3"></i>bharath1@gmail.com
                  </p>
                </div>
              </div>

              <div className="row border shadow mt-4 p-3 text-muted mb-3">
                Order ID # 1164120 74885207109701
              </div>

              <div className="row border shadow mt-4 p-3 mb-3">
                <span className="h4 font-weight-bold"> Payment Mode - </span
                ><span className="text-success h4"> &nbsp;Online</span>
                <p>
                  <span className="text-warning"> Please note:</span>
                  <span>
                    You Cannot return or exchange thisas the 30 day return
                    Period has expired (?)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


