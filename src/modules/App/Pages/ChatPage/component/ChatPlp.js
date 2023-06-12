import React from "react";
import ChaPlp from "./ChatPlp.css";
export default function ChatPlp() {
  return (
    <>
      <div className="row chatbox">
        <div className="col-md-3 imagelist">
          <div className="imagebox">
            <img
              src="https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              className="personlogo"
            ></img>
          </div>
          <div className="status"></div>
        </div>
        <div className="col-md-8 chatlist"></div>
      </div>
    </>
  );
}
