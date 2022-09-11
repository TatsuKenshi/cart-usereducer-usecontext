import React from "react";
import loadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div>
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
