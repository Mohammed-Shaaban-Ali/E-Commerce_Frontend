import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="mb-0 text-center fw-bold">
              <Link to="/" className="text-dark">
                Home / {title}{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
