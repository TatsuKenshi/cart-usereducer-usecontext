import React from "react";
import loadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-8 max-w-[1100px]">
      <img src={loadingGif} alt="loading" className="mx-auto mt-48 w-32" />
    </div>
  );
};

export default Loading;
