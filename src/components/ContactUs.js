import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns" style={{paddingLeft: '190px'}}>
              <p className="lead">
              Please contact me via the links below
              </p>
            </div>
          </div>
        </section>
        );
  }
}