import React from "react";

export default function Card({ id, name, email }) {
  return (
    <>
      {/* <h1>Robo Friends</h1> */}
      <div className="bg-light-green dib br3 pa3 ma2 grow">
        <img src={`https://robohash.org/afjask${id}?200x200`} alt="robot" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
}
