import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default () => (
  <BrowserRouter>

    <MDBNav tabs color="indigo" className="nav-pills nav-fill">
      <MDBNavItem>
        <button type="button" class="btn btn-outline-darken-1  btn-rounded-white" style={{borderRadius:"25px"}}>BITCOIN</button>
      </MDBNavItem>
      <MDBNavItem>
        <button type="button" class="btn btn-outline-darken-1  btn-rounded" style={{borderRadius:"25px"}}>U.S.AL</button>
      </MDBNavItem>
      <MDBNavItem>
        <button type="button" class="btn btn-outline-darken-1  btn-rounded" style={{borderRadius:"25px"}}>APPLE</button>
      </MDBNavItem>
      <MDBNavItem>
        <button type="button" class="btn btn-outline-darken-1  btn-rounded" style={{borderRadius:"25px"}}>TECHCRUNCH</button>
      </MDBNavItem>
      <MDBNavItem>
        <button type="button" class="btn btn-outline-darken-1  btn-rounded" style={{borderRadius:"25px"}}>Wall STREET JOURNAL</button>
      </MDBNavItem>
    </MDBNav>

  </BrowserRouter>
);