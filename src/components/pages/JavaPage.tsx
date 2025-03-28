import React from "react";
import MyBreadCrumb from "../my-components/myBreadCrumb";

const JavaPage = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <MyBreadCrumb currentPage={"Java"} />
      <div>Java Page</div>
    </div>
  );
};

export default JavaPage;
