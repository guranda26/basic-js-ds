import React from "react";
import avatarImg from "../../assets/images/avatar.png";
const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className="photo-box">
      <img className="avatar" src={avatarImg} alt="Avatar" />
      <h2 className="name">{name}</h2>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default PhotoBox;
