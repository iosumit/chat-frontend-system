import React from "react";
import ChaPlp from "./ChatPlp.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ChatPlp(props) {
  const conversations = [
    {
      name: "Rahul",
      message: "HII",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Pinki",
      message: "Hello",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/17153155/pexels-photo-17153155/free-photo-of-friends-portrait-photography-women-fashion-editorial-fashion.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Mango",
      message: "Raam",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/17066825/pexels-photo-17066825/free-photo-of-road-landscape-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Gauva",
      message: "Sita",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/16241898/pexels-photo-16241898/free-photo-of-african-bush-elephant.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
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
          <ChatuserTile user={e} />
        ))}
      </div>
    </>
  );
}
function ChatuserTile(props) {
  return (
    <div className="row">
      <div className="col-md-3 imagelist">
        <div className="imagebox">
          <img src={props.user.image} className="personlogo"></img>
        </div>
        <div className="status"></div>
      </div>
      <div className="col-md-8 chatlist">
        <div className="ChatTiming">
          <h6>{props.user.name}</h6>
          <p className="time">{props.user.time}</p>
        </div>
        <p className="user">{props.user.message}</p>
      </div>
    </div>
  );
}
