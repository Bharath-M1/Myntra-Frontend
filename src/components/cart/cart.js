import React from 'react'
import './cart.css'
import logo from './logo.png'
import discount from './discount.png'
import sec from './sec.png'

export const Cart = props => {
  return (
    <>
      <nav className="navbar mt-2">
        <div className="container-fluid">
          <img src={logo} className="nav_logo" alt="brand_logo" />
          <div className="text-muted">
            <span className="text-success font-weight-bold"
            ><u className="lines">BAG</u></span>
          ----------
          <span className="text-muted font-weight-bold">ADDRESS</span> ----------
          <span className="text-muted font-weight-bold">PAYMENT</span>
          </div>
          <span>
            <img src={sec} className="sec_logo_edit" alt="secure_logo" />
            <span className="font-weight-bold text-muted">100% SECURE</span>
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {/* <!-- first side before line --> */}
          <div className="col-lg-8 mr-5">
            <div className="row">
              <div className="p-2 col-lg-6 border-left border-bottom border-top">
                <p className="text-muted m-3">
                  <span>Deliver to: </span>
                  <span className="font-weight-bold text-dark">Bharath,641024</span>
                  <br />
                9/6c,Ashok nagar,sundharapuram,Coimbatore
              </p>
              </div>
              <div className="col-lg-6 border-right border-bottom border-top">
                <button className="btn m-4 float-right btn-outline-danger p-2">
                  CHANGE ADDRESS
              </button>
              </div>
              {/* <!-- AVAILABLE coupon --> */}
              <div className="mt-3 col-lg-12 border">
                <p className="font-weight-bold p-2">
                  <img src={discount} alt="discount" /> AVAILABLE
                OFFER
              </p>

                <ul className="p-0 m-3 text-muted">
                  <li>
                    <span
                    >10% Instant Discount with Standard Chartered Credit and
                    Debit Cards on a min spend of Rs 3000. TCA</span
                    >
                  </li>
                  <li>
                    <span
                    >5% Unlimited Cashback on Flipkart Axis Bank Credit Card.
                    TCA</span
                    >
                  </li>
                  <div className="closed">
                    <li>
                      <span
                      >10% Cashback upto Rs 300 on a minimum spend of Rs 1,000
                      with PayZapp. TCA</span
                      >
                    </li>
                    <li>
                      <span
                      >Flat Rs 200 Cashback on first Airtel Payments Bank
                      transaction on Myntra on a min spend of Rs 2000. TCA</span
                      >
                    </li>
                    <li>
                      <span
                      >10% SuperCash upto Rs 200 on transaction with Mobikwik
                      Wallet . TCA</span
                      >
                    </li>
                  </div>

                  <a className="btn p-0 text-danger dropdown-toggle">Show more</a>
                </ul>
              </div>

              {/*   <!-- No convennience --> */}
              <div className="col-lg-12 border mt-3">
                <p className="m-3 text-muted">
                  <i className="fas fa-truck-moving fa-2x btn-success p-2"></i> Yay!
                <span className="font-weight-bold">No convenience fee</span> on this
                order.
              </p>
              </div>

              {/*  <!-- Selected --> */}
              <div className="col-lg-12 border mt-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <input type="checkbox" name="selected" />
                  </div>
                  <div className="col-lg-4 h5 align-self-center">
                    <span className="font-weight-bold">ITEMS SELECTED</span>
                  </div>
                  <div className="col-lg-7 align-self-centers">
                    <span className="float-right m-3 p-3">
                      <button
                        className="btn btn-transparent font-weight-bold text-muted border-right mr-4 pr-3"
                      >
                        REMOVE
                    </button>
                      <button
                        className="btn btn-transparent font-weight-bold text-muted"
                      >
                        ADD FROM WISHLIST
                    </button>
                    </span>
                  </div>
                </div>
              </div>

              {/*   <!-- items --> */}
              {/*   <div className="col-lg-12 border mt-3">
                <div className="product1">
                  <div className="row p-3">
                    <div className="col-lg-2">
                      <img
                        src="https://assets.myntassets.com/f_webp,w_111,h_148,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/6832144/2018/11/14/3c3ec701-9451-4c83-9f93-1d02e9bf52ef1542185992726-WROGN-Men-Grey-Melange-Solid-Bomber-2821542185992484-1.jpg"
                        alt="selected"
                        className="position-absolute"
                      /><input
                        type="checkbox"
                        className="d-inline m-2 position-relative"
                      />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <div className="col-lg-7">
                          <p className="font-weight-bold m-0">WRONG</p>
                          <p className="m-0">Men Grey Melange Solid Bomber</p>
                          <p className="text-muted">Sold by:Flashstar Commerce</p>
                        </div>
                        <div className="col-lg-5 text-right">
                          <p className="font-weight-bold">
                            <i className="fas fa-rupee-sign"></i> 1,739
                        </p>

                          <span className="text-muted"
                          ><i className="fas fa-rupee-sign"></i
                          ><strike> 2,899</strike></span
                          >&nbsp;&nbsp;<span className="text-danger">40% OFF</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button className="btn cos pr-3 pl-3 mb-2 dropdown-toggle">
                            Size : M
                        </button>
                          <button className="btn cos pr-3 pl-3 mb-2 dropdown-toggle">
                            Qty : 1
                        </button>
                          <p className="h6">
                            <i className="fas fa-check text-success"></i>
                          Delivery by
                          <span className="font-weight-bold">5 FEB 2021</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <div className="mb-2">
                    <span>
                      <button
                        className="btn btn-transparent font-weight-bold text-muted border-right removes"
                      >
                        REMOVE
                    </button>
                      <button
                        className="btn btn-transparent font-weight-bold text-muted"
                      >
                        ADD FROM WISHLIST
                    </button>
                    </span>
                  </div>
                </div>
              </div> */}

              {/* <!-- add more last part --> */}
              <div className="col-lg-12 border mt-3 mb-3">
                <section className="m-3">
                  <i className="far fa-bookmark text-muted"></i>
                  <span
                  ><a href="# " className="text-dark font-weight-bold ml-2">
                      Add More From WISHLIST</a
                    ></span
                  >
                  <span className="float-right font-weight-bolder"><i className="fas fa-greater-than"></i></span>
                </section>
              </div>
            </div>
          </div>

          {/* <!-- right side --> */}
          <div className="col-lg-3 border-top border-left p-2 mb-3">
            <p className="text-muted font-weight-bold">COUPONS</p>
            <i className="fas fa-tag text-muted mr-3 fa-1x"></i
            ><span className="font-weight-bold">APPLY CUPONS</span>
            <button
              className="btn btn-outline-danger font-weight-bold float-right p-1 m-1"
            >
              APPLY
          </button>
            <hr />
            <div className="pricing">
              <p className="font-weight-bold">PRICE DETAILS (1 Items)</p>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>Total MRP</td>
                    <td className="float-right cs">
                      <i className="fas fa-rupee-sign"></i> {2899}
                    </td>
                  </tr>
                  <tr>
                    <td>Discount MRP</td>
                    <td className="float-right text-success cs">
                      -<i className="fas fa-rupee-sign"></i> {1, 160}
                    </td>
                  </tr>
                  <tr>
                    <td>Coupon Disount</td>
                    <td className="float-right text-danger">Apply Coupon</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Total Amount</td>
                    <td className="float-right cs">
                      <i className="fas fa-rupee-sign"></i> {1,739}
                  </td>
                  </tr>
                </tbody>
              </table>

              <button className="btn btn-danger btn-lg btn-block font-weight-bold">
                PLACE ORDER
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




