import React, {useEffect, useState, useRef} from "react";
import Players from './Players'
import { MDBCol } from "mdbreact";



const Searchbar = () => {

 const [name, setName] = useState("");



  return (
    <MDBCol md="6">
      <div id="Search" className="active-pink-3 active-pink-4 mb-4">
           <input
          className="form-control"
          type="text"
          placeholder="Search Player"
          
        />
        
      </div>
    </MDBCol>
  );
};

export default Searchbar;