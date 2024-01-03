import React from "react";
import appData from "../../data/app.json";

const ContactWithMap = () => {
  return (
    <div className="container-fluid mb-25">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post">
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Ad Soyad"
                  required="required"
                  style={{ color: "#401e00", borderBottomColor: "#401e00" }}
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  style={{ color: "#401e00", borderBottomColor: "#401e00" }}
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Mesaj"
                  rows="4"
                  required="required"
                  style={{
                    color: "#401e00",
                    borderBottomColor: "#401e00",
                    resize: "none",
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Mesaj Gönder</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
