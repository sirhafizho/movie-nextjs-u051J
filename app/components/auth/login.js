"use client";

import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginModal(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reCaptcha, setReCaptcha] = useState(false);

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="pcari-modal"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <form action="">
                <div className="mb-3">
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    // onChange={onChange}
                    theme="dark"
                  />
                </div>
                <div className="mb-2">
                  <div
                    className="mb-2 text-center hover-click"
                    onClick={(e) => {
                      e.preventDefault();
                      props.toggleForgotPasswordModal();
                    }}
                  >
                    Forgot Password
                  </div>
                  <button
                    className="pcari-button mb-3"
                    style={{ width: "100%", borderRadius: "10px" }}
                  >
                    Login
                  </button>
                  <div className="text-center">
                    <span className="text-white me-2">Not a member?</span>
                    <span
                      className="hover-click"
                      onClick={(e) => {
                        e.preventDefault();
                        props.toggleRegisterModal();
                      }}
                    >
                      Sign Up Now
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
