import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">SignUp</a>
                </li>
                <li>
                  <a href="#">LogIn</a>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                Hostel 1, IIIT Gwalior, Students' Residential Zone
                <br />
                IIIT Area
                <br />
                Gwalior
                <br />
                <i className="fa fa-phone fa-lg" />: +91 1234 5678
                <br />
                <i className="fa fa-fax fa-lg" />: +91 8765 4321
                <br />
                <i className="fa fa-envelope fa-lg" />:{" "}
                <a href="mailto:newsworld@news">hr@expertevidence</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube" />
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <i className="fa fa-envelope-o" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2019 ExpertEvidence.Org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
