import axios from 'axios';
import moment from 'moment'
import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export const Profile = (props) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobileno: '',
    dob: '',
    doorno: '',
    pincode: '',
    address1: '',
    address2: '',
    gender: ''
  });



  const onSubmit = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };
  const updateuser = () => {
    axios.put('/home/signup', {
      name: profile.name,
      mobileNo: profile.mobileno,
      email: profile.email,
      dateOfBirth: profile.dob,
      gender: profile.gender,
      id: localStorage.id,
      address: {
        pincode: profile.pincode,
        doorno: profile.doorno,
        addressline1: profile.address1,
        addressline2: profile.address2
      }
    })
  }

  const sendData = (e) => {
    e.preventDefault()
    updateuser()
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <p className="h3 font-weight-bolder fa-underline">Profile Information</p>
      <hr />
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-3 h3">First Name</div>
          <div className="col-lg-3 h3">{localStorage.name}</div>
        </div>
        <div className="row p-3">
          <div className="col-lg-3 h3">Mobile No</div>
          <div className="col-lg-3 h3">{localStorage.number}</div>
        </div>
        <div className="row p-3">
          <div className="col-lg-3 h3">Email</div>
          <div className="col-lg-3 h3">{localStorage.email}</div>
        </div>
        <div className="row p-3">
          <div className="col-lg-3 h3">DOB</div>
          <div className="col-lg-3 h3">{localStorage.dob}</div>
        </div>
        <button
          className="btn btn-primary text-light p-3 font-weight-bolder mb-5"
          onClick={toggle}
        >
          EDIT
        </button>
      </div>
      <Card className="border border-dark col-lg-5 m-5">
        <CardBody className="p-5 m-5">
          <CardTitle tag="h2">Edit Address</CardTitle>
          <CardSubtitle tag="h3" className="mb-2 text-muted">
            Home
          </CardSubtitle>
          <CardText>{ }</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="h1" toggle={toggle}>
          Edit profile
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={sendData}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={profile.name}
                onChange={onSubmit}
                placeholder="Please enter your name to change"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={profile.email}
                onChange={onSubmit}
                placeholder="Please enter your email to change"
              />
            </FormGroup>
            <FormGroup>
              <Label for="mobile">Mobile No</Label>
              <Input
                type="tel"
                name="mobileno"
                value={profile.mobileno}
                onChange={onSubmit}
                id="mobileno"
                placeholder="Please enter your mobile no"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address" className="d-block">
                Address
              </Label>
              <Input
                type="text"
                name="doorno"
                value={profile.doorno}
                onChange={onSubmit}
                placeholder="Door No"
                className="mb-2 col-lg-4 d-inline mr-4"
              />
              <Input
                type="text"
                name="pincode"
                value={profile.pincode}
                onChange={onSubmit}
                placeholder="pincode"
                className="mb-2 col-lg-7 d-inline"
              />
              <Input
                type="text"
                name="address1"
                value={profile.address1}
                onChange={onSubmit}
                placeholder="Address Line 1"
                className="mb-2"
              />
              <Input
                type="text"
                name="address2"
                value={profile.address2}
                onChange={onSubmit}
                placeholder="Address Line 2"
                className="mb-2"
              />
            </FormGroup>
            <FormGroup>
              <Label for="dob">Date Of Birth</Label>
              <Input type="date" name="dob" value={profile.dob} onChange={onSubmit}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="select"
                name="gender"
                className="col-lg-6"
                value={profile.gender}
                onChange={onSubmit}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option>Others</option>
              </Input>
            </FormGroup>
            <Button className="p-2 font-weight-bolder h3">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
