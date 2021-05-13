import React from "react";
import style from "./SellerProfile.module.css";
import profile from "./user.png";
function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <h2 className={style.name}>{props.name}</h2>
        <img className={style.circleImg} src={profile} alt="avatar_img" />
      </div>
      <div className={style.bottom}>
        <p className={style.info}>{props.tel}</p>
        <p className={style.info}>{props.email}</p>
        <p className={style.info}>{props.aadhar}</p>
        <p className={style.info}>{props.gsti}</p>
        <p className={style.info}>{props.address}</p>
      </div>
    </div>
  );
}

export default Card;
