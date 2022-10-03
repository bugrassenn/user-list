import React from "react";

function SingleUser({ user }) {
  return (
    <div className="single-user">
      <div className="user-picture">
        <img src={user.picture.large} alt="" />
      </div>
      <div className="user-info">
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p className="user-mail">Email: {user.email}</p>
        <p className="user-location">
          {user.location.country} | {user.location.city}
        </p>
      </div>
    </div>
  );
}

export default SingleUser;
