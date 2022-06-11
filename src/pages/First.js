import React from "react";
import "../assets/first.css";
import Logo from "../assets/logo.svg";

function First() {
  return (
    <div id="example">
      <div className="box wide hidden-on-narrow">
        <div className="box-col" />

        <div className="box-col" />
      </div>

      <div className="page-container hidden-on-narrow">
        <div className="pdf-page size-a4">
          <div className="inner-page">
            <div className="pdf-header">
              <span className="company-logo">
                <img src={Logo} alt="Kendoka Company Logo" /> Blauer See
                Delikatessen
              </span>

              <span className="invoice-number">Invoice #23543</span>
            </div>

            <div className="pdf-footer">
              <p>
                Blauer See Delikatessen
                <br />
                Lützowplatz 456
                <br />
                Berlin, Germany, 10785
              </p>
            </div>

            <div className="addresses">
              <div className="for">
                <h3>Invoice For</h3>

                <p>
                  Antonio Moreno
                  <br />
                  Naucalpan de Juárez
                  <br />
                  México D.F., Mexico, 53500
                </p>
              </div>

              <div className="from">
                <h3>From</h3>

                <p>
                  Hanna Moos <br />
                  Lützowplatz 456
                  <br />
                  Berlin, Germany, 10785
                </p>

                <p>
                  Invoice ID: 23543
                  <br />
                  Invoice Date: 12.03.2014
                  <br />
                  Due Date: 27.03.2014
                </p>
              </div>
            </div>

            <div className="pdf-chart" />

            <div className="pdf-body">
              <div id="grid" />

              <p className="signature">
                Signature: ________________ <br />
                <br />
                Date: 12.03.2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
