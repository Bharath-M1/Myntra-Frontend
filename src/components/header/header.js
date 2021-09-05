import { Profile } from '../profile/profile'
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import AsyncSelect from 'react-select/async'
import { ToastContainer, toast } from 'react-toastify';
import { Cart } from '../shared components/cart/cart'
import {
  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import logo from "./logo.png"



export const Header = () => {
  const [mobileno, setmobileNo] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [addressline1, setAddressLine1] = useState('')
  const [addressline2, setAddressLine2] = useState('')
  const [pincode, setPincode] = useState('')
  const [doorno, setDoorNo] = useState('')

  const [fetchedData, setfetchedData] = useState('')

  function signupUser() {
    axios.post('/home/signup', {
      name: name,
      mobileNo: mobileNo,
      password: passwordSignup,
      email: email,
      dateOfBirth: dateOfBirth,
      gender: gender,
      address: {
        doorno: doorno,
        addressline1: addressline1,
        addressline2: addressline2,
        pincode: pincode
      }
    })
  }

  async function fetchData() {
    const { data } = await axios.post('/home/login', {
      "mobileNo": mobileno,
      "password": password
    })
    setfetchedData(data),
      localStorage.setItem("data", data.token)
    localStorage.setItem("name", data.data.name)
    localStorage.setItem("number", data.data.mobileNo)
    localStorage.setItem("id", data.data._id)
    localStorage.setItem("email", data.data.email)
    localStorage.setItem("dob", data.data.dateOfBirth)
    localStorage.setItem("id", data.data._id)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }
  const signupSubmit = (e) => {
    e.preventDefault()
    signupUser()
    successToast()
  }

  const successToast = () => {
    toast.success('successfully created ! Please login 🙂 ', {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }

  const logoutUser = () => {
    localStorage.clear()
    toast.warning(`User Logged Out Successfully 😢 `, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const notify = () => {
    toast.success(`successfully loged in !`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }


  /* modal hide  for login*/
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  /* modal hide for signup */
  const [modals, setModals] = useState(false);
  const toggles = () => setModals(!modals);

  if (!localStorage.name) {
    var user = "user"
  } else {
    var user = localStorage.name
  }

  return (
    <>

      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/'>
            <img src={logo} alt="brand" height="60" />
          </Link>
          {/* modal for login */}
          <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} className="bg-secondary">Login</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control input-group-text mr-3"
                  placeholder="Mobile No"
                  name="mobileno"
                  value={mobileno}
                  onChange={(e) => { setmobileNo(e.target.value) }}
                />
                <input
                  type="password"
                  className="form-control input-group-text mt-3 mb-3 mr-3"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button className="btn btn-secondary p-2" onClick={notify} type="submit">Login</button>
                <p className="text-muted mt-1">
                  If Dont have an Account Please
                  <a href="#"> Signup</a> here
                </p>
              </form>
            </ModalBody>
          </Modal>

          {/* Signup Form modal */}
          <Modal isOpen={modals} toggle={toggles} >
            <ModalHeader toggle={toggles} className="bg-primary">Sign Up
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    placeholder="Please enter your name to change"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Please enter your email to change"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="mobile">Mobile No</Label>
                  <Input
                    type="tel"
                    name="mobileNo"
                    id="mobile"
                    value={mobileno}
                    onChange={(e) => { setMobileNo(e.target.value) }}
                    placeholder="Please enter your mobile no"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Please enter your password"
                    value={passwordSignup}
                    onChange={e => setPasswordSignup(e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="address" className="d-block">
                    Address
                  </Label>
                  <Input
                    type="text"
                    name="doorno"
                    placeholder="Door No"
                    value={doorno}
                    onChange={(e) => { setDoorNo(e.target.value) }}
                    className="mb-2 col-lg-4 d-inline mr-4"
                  />
                  <Input
                    type="text"
                    name="pincode"
                    placeholder="pincode"
                    value={pincode}
                    onChange={(e) => { setPincode(e.target.value) }}
                    className="mb-2 col-lg-7 d-inline"
                  />
                  <Input
                    type="text"
                    name="addressline1"
                    placeholder="Address Line 1"
                    value={addressline1}
                    onChange={(e) => { setAddressLine1(e.target.value) }}
                    className="mb-2"
                  />
                  <Input
                    type="text"
                    name="addressline2"
                    placeholder="Address Line 2"
                    value={addressline2}
                    onChange={(e) => { setAddressLine2(e.target.value) }}
                    className="mb-2"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="dob">Date Of Birth</Label>
                  <Input type="date" name="dateOfBirth" value={dateOfBirth}
                    onChange={(e) => { setDateOfBirth(e.target.value) }} ></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <Input
                    type="select"
                    name="gender"
                    value={gender}
                    onChange={(e) => { setGender(e.target.value) }}
                    className="col-lg-6"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Input>
                </FormGroup>
                <Button className="p-2 font-weight-bolder h3" onClick={signupSubmit}>Submit</Button>
              </Form>
            </ModalBody>
          </Modal>

          <div className="navbar">
            <ul className="list-unstyled navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link font-weight-bolder text-dark h4"
                  data-toggle="dropdown"
                  href="#"
                >
                  MEN
                </a>
                <div className="dropdown-menu dropdown-large">
                  <div className="row">
                    <div className="col-lg-3">
                      <ul className="list-unstyled m-2">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Topwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sweaters
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Blazers & Coats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Suits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rain Jackets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Indian & Festive Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            kurtas & Kurta Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sherwanis
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Nehru Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Dhotis
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bottomwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jeans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track Pants
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Innerwear & Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Brief & Trunk
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Boxers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Vests
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Thermals
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Plus Size
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Footwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sneakers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Flip Flops
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Socks
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Personal Care &
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sunglasses & Frames
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Wathces
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sports & Active Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Active T-shirt
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track & Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Tracksuits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets & shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Acces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Swimner
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Gadgets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Smart Wearable
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Fitness Item
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Speakers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Fashion Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wallets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wathces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Perfumes & Body Mists
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Trimmers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Deodorant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Ties & Pocket Squares
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Accessory Gift Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Caps & Hats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Mufflers, Scarves & Gloves
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Phone Cases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rings & Wristwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Helmets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bags & BackPacks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Luggages & Trolleys
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link font-weight-bolder text-dark h4"
                  href="#"
                  data-toggle="dropdown"
                >
                  WOMEN
                </a>
                <div className="dropdown-menu dropdown-large">
                  <div className="row">
                    <div className="col-lg-3">
                      <ul className="list-unstyled m-2">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Topwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sweaters
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Blazers & Coats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Suits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rain Jackets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Indian & Festive Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            kurtas & Kurta Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sherwanis
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Nehru Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Dhotis
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bottomwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jeans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track Pants
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Innerwear & Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Brief & Trunk
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Boxers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Vests
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Thermals
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Plus Size
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Footwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sneakers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Flip Flops
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Socks
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Personal Care &
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sunglasses & Frames
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Wathces
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sports & Active Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Active T-shirt
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track & Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Tracksuits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets & shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Acces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Swimner
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Gadgets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Smart Wearable
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Fitness Item
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Speakers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Fashion Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wallets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wathces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Perfumes & Body Mists
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Trimmers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Deodorant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Ties & Pocket Squares
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Accessory Gift Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Caps & Hats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Mufflers, Scarves & Gloves
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Phone Cases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rings & Wristwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Helmets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bags & BackPacks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Luggages & Trolleys
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link font-weight-bolder text-dark h4"
                  href="#"
                  data-toggle="dropdown"
                >
                  KIDS
                </a>
                <div className="dropdown-menu dropdown-large">
                  <div className="row">
                    <div className="col-lg-3">
                      <ul className="list-unstyled m-2">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Topwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sweaters
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Blazers & Coats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Suits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rain Jackets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Indian & Festive Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            kurtas & Kurta Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sherwanis
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Nehru Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Dhotis
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bottomwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jeans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track Pants
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Innerwear & Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Brief & Trunk
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Boxers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Vests
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Thermals
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Plus Size
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Footwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sneakers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Flip Flops
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Socks
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Personal Care &
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sunglasses & Frames
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Wathces
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sports & Active Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Active T-shirt
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track & Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Tracksuits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets & shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Acces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Swimner
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Gadgets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Smart Wearable
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Fitness Item
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Speakers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Fashion Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wallets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wathces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Perfumes & Body Mists
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Trimmers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Deodorant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Ties & Pocket Squares
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Accessory Gift Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Caps & Hats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Mufflers, Scarves & Gloves
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Phone Cases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rings & Wristwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Helmets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bags & BackPacks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Luggages & Trolleys
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link font-weight-bolder text-dark h4"
                  href="#"
                  data-toggle="dropdown"
                >
                  HOME & LIVING
                </a>
                <div className="dropdown-menu dropdown-large">
                  <div className="row">
                    <div className="col-lg-3">
                      <ul className="list-unstyled m-2">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Topwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sweaters
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Blazers & Coats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Suits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rain Jackets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Indian & Festive Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            kurtas & Kurta Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sherwanis
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Nehru Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Dhotis
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bottomwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jeans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track Pants
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Innerwear & Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Brief & Trunk
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Boxers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Vests
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Thermals
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Plus Size
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Footwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sneakers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Flip Flops
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Socks
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Personal Care &
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sunglasses & Frames
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Wathces
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sports & Active Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Active T-shirt
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track & Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Tracksuits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets & shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Acces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Swimner
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Gadgets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Smart Wearable
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Fitness Item
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Speakers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Fashion Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wallets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wathces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Perfumes & Body Mists
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Trimmers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Deodorant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Ties & Pocket Squares
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Accessory Gift Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Caps & Hats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Mufflers, Scarves & Gloves
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Phone Cases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rings & Wristwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Helmets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bags & BackPacks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Luggages & Trolleys
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link font-weight-bolder text-dark h4"
                  href="#"
                  data-toggle="dropdown"
                >
                  OFFERS
                </a>
                <div className="dropdown-menu dropdown-large">
                  <div className="row">
                    <div className="col-lg-3">
                      <ul className="list-unstyled m-2">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Topwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sweaters
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Blazers & Coats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Suits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rain Jackets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Indian & Festive Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            kurtas & Kurta Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sherwanis
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Nehru Jackets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Dhotis
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bottomwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jeans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Trouser
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track Pants
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Innerwear & Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Brief & Trunk
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Boxers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Vests
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sleepwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Thermals
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Plus Size
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Footwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Casual Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Formal Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sneakers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Flip Flops
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Socks
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Personal Care &
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sunglasses & Frames
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Wathces
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 even">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Sports & Active Wear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Shoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Sandals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Active T-shirt
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Track & Shorts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Tracksuits
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Jackets & shirts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Sports Acces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Swimner
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Gadgets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Smart Wearable
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Fitness Item
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Speakers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Fashion Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wallets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Wathces
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Perfumes & Body Mists
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Trimmers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Deodorant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Ties & Pocket Squares
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Accessory Gift Sets
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Caps & Hats
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Mufflers, Scarves & Gloves
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Phone Cases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Rings & Wristwear
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn">
                            Helmets
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Bags & BackPacks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="btn text-danger font-weight-bold"
                          >
                            Luggages & Trolleys
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <AsyncSelect cacheOptions defaultOptions className="col-lg-5 ml-auto"
          />

          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-link text-center mr-4 dropdown" data-toggle="dropdown">

              <i className="fas fa-user fa-1x"></i>
              <br />
              <span className="font-weight-bold text-dark">Profile</span>

              <div className="dropdown-menu">
                <div>
                  <ul className="list-unstyled text-left text-muted">
                    <li className="font-weight-bold text-dark h4">
                      Hello {user}
                      <br />
                      <button
                        className="btn btn-secondary p-2"
                        onClick={toggle}
                      >
                        Login
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-primary p-2"
                        onClick={toggles}
                      >
                        Sign Up
                      </button>
                    </li>
                    <hr />
                    <Link to='/orderdetails' style={{ textDecoration: 'none', color: 'inherit' }}>
                      <li>Orders</li>
                    </Link>
                    <li>Wishlist</li>
                    <li>Gift Cards</li>
                    <li>Contact Us</li>
                    <li>
                      Myntra Insider
                      <span className="badge badge-danger">New</span>
                    </li>
                    <hr />
                    <li>Myntra Credits</li>
                    <li>Coupons</li>
                    <li>Saved Cards</li>
                    <li>Saved Address</li>
                    <hr />
                    <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                      <li>Edit Profile</li>
                    </Link>
                    <li onClick={logoutUser}>Logout</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-link text-center mr-4">
              <i className="far fa-bookmark"></i>
              <br />
              <span className="font-weight-bold text-dark">Wishlist</span>
            </li>
            <Cart />
          </ul>
        </div>
      </nav>
    </>
  );
};
