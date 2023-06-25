import React from "react";
import ChaPlp from "./ChatPlp.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ChatPlp(props) {
  const conversations = [
    {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
      time: "9:00am",
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }, {
      name: "Rahul",
      message: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast",
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

        style={{
          overflowY: "auto",
          // height: "100%",
          backgroundColor: "#FDFEFE",
          borderRadius: "10px",
          boxShadow: "1px 1px 5px #99A3A4",
          border: "none",
        }}
      >
        {conversations.map((e) => (
          <ChatuserTile user={e} />
        ))}
      </div >
    </>
  );
}
function ChatuserTile(props) {
  return (
    <div className="row zoom" style={{ justifyContent: "flex-start", marginInline: "8px", paddingInline: "10px" }}>
      <img src={props.user.image} style={{ height: "56px", marginTop: "10px", width: "56px", objectFit: "cover", borderRadius: "50%", padding: 0 }} alt="" srcset="" />
      <div className="col ms-3  border-bottom" style={{ flexDirection: "column", paddingTop: "14px", paddingBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <span className="fw-bold">{props.user.name}</span>
          <span style={{ fontSize: "14px" }}>{props.user.time}</span>
        </div>
        <span className="singleLine" style={{ fontSize: "14px" }}>{props.user.message}</span>
      </div>
    </div>
  );
}
