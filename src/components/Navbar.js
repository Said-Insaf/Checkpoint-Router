import React from "react";
import { Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </Button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          {/*       
      <li class="nav-item dropdown">
        
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
        </ul>
        <Form class="form-inline my-2 my-lg-0">
        <Link to="/signIn">
          <span class="btn btn-outline-success my-2 my-sm-0" type="submit" />
          Sign In
        </Link>
        </Form>
      </div>
    </Nav>
  );
};

export default Navbar;
