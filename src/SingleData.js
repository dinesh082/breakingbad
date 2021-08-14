import React from "react";

const SingleData = ({
  name,
  birthday,
  nickname,
  img,
  occupation,
  status,
  portrayed,
  appearance,
}) => {
  return (
    <article className="person">
      <img src={img} alt={name} className="person-img" />
      <div className="person-info">
        <h4 className="naam">{name}</h4>
        <p>{nickname}</p>
        <p>({birthday})</p>
        <div className="occupation">
          <h3>occupation :</h3>
          <ul>
            {occupation.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="occupation">
          <h3>Status :</h3>
          <p>{status}</p>
        </div>
        <div className="occupation">
          <h3>Actor :</h3>
          <p>{portrayed}</p>
        </div>
        <div className="occupation">
          <h3>appearance seasons :</h3>
          <p id="appear">{appearance}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleData;
