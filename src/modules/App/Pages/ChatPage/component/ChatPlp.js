import React from "react";
import ChaPlp from "./ChatPlp.css";
export default function ChatPlp(props) {
  const conversations = [
    { name: "Rahul", message: "HII", time: "9:00am" },
    { name: "Pinki", message: "Hello", time: "9:00am" },
    { name: "Mango", message: "Raam", time: "9:00am" },
    { name: "Gauva", message: "Sita", time: "9:00am" },
  ];
  return (
    <>
      <div
        className=" chatbox"
        style={{
          backgroundColor: "#FDFEFE",
          borderRadius: "10px",
          boxShadow: "1px 1px 5px #99A3A4",
          border: "none",
        }}
      >
        {conversations.map((e) => (
          <ChatuserTile name={e.name} message={e.message} />
        ))}
      </div>
    </>
  );
}
function ChatuserTile(props) {
  console.log("nammedhygeygd", props);
  return (
    <div className="row">
      <div className="col-md-3 imagelist">
        <div className="imagebox">
          <img
            src="https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            className="personlogo"
          ></img>
        </div>
        <div className="status"></div>
      </div>
      <div className="col-md-8 chatlist">
        <h6>{props.name}</h6>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
