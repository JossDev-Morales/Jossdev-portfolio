import { Bars } from "react-loader-spinner";
import "../Loader.css";
import { useState } from "react";

function Loader({ title }) {
  

  return (
    <div className="Loader-comp">
     
      
      <div className="Loader-content">
        <h2>{title}</h2>
        <div className="Loader_in_comp">
          <Bars
            height="100"
            width="100"
            color="#fe004a"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </div>
  );
}
export default Loader;
