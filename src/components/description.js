import React, { Component } from "react";
import "../App.css";
import { Jumbotron, Button } from "reactstrap";
import Video from "./video";
class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 description">
            <Jumbotron className="description">
              <h1 className="display-4">WHAT WE DO!</h1>
              <p className="lead">
                Screenshots often get rejected in the court of law as proof.
                ExpertEvidence.Org has created a service for Web Archiving which
                works as a Chrome Extension. This service allows extraction of
                webpages in human & machine-readable formats, thus creating a
                mirror image of electronic media where it was originally stored
                along with metadata and Section 65(B) Certificate as per the
                Indian Evidence Act to be produced in the court of law. They
                will help you give evidentiary quality content as proof. This
                could be used for any online content which includes social
                media, blogs and even chats or e-mails.
              </p>
              <hr className="my-2" />
              <p className="lead allign">
                <Button className="button1" size="lg">
                  Get Started!
                </Button>
              </p>
            </Jumbotron>
          </div>
          <div className="col-md-5 video">
            <Video />
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
