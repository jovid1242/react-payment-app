import React from "react";
import { SemipolarLoading } from "react-loadingg";

import "../../styles/loader.scss";

function CLoading({ loading }) {
  if (loading) {
    return (
      <div className="loader">
        <SemipolarLoading color={"#FFC220"} />
      </div>
    );
  }
  return <></>;
}

export default CLoading;
