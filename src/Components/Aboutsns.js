import React from "react";

export default function Aboutsns() {
  return (
    <div>
      <div className="aboutDiv">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8f296d145187391.62999c19c0d46.png"
          alt="..."
          style={{
            width: "50%",
            marginLeft: "20%",
            marginTop: "2%",
            borderRadius: "10px",
          }}
        />
        <h1 className="aboutHead"> About Sugar n Sweets </h1>
            <hr/>
        <h2 className="aboutContent">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h2>
      </div>
    </div>
  );
}
