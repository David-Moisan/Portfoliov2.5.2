import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading">
      <img
        src="/static/source/logo__minSize.png"
        alt="logo-loading"
        className="logo-loading"
      />
      <ReactLoading type="bubbles" color="#ffffff" />
    </div>
  );
};

export default Loading;
