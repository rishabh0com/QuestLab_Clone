import React from "react";
import "./appCard.css"
import one from "../../assets/cardImages/one.svg";
import two from "../../assets/dataResourceIcon/outer11.svg"
import three from "../../assets/dataResourceIcon/outer2.svg"
import four from "../../assets/cardImages/four.svg";
import five from "../../assets/dataResourceIcon/outer12.svg";
import six from "../../assets/cardImages/six.svg";
import seven from "../../assets/cardImages/seven.svg";
import eight from "../../assets/cardImages/eight.svg";
const AppCard = () => {
  const imgArr = [one,two,three, four,five, six, seven, eight];
  const Card = ({ src }) => {
    return (
      <div className="appCard w-16 h-16 p-3  bg-zinc-800">
        <img className="w-14 h-8" src={src} alt="" />
      </div>
    );
  };
  return (
    <div className="appCount flex items-center ">
      {imgArr.map((img, index) => (
        <Card key={index} src={img} />
      ))}
    </div>
  );
};

export default AppCard;
