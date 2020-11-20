import React, { useState } from "react";

function StateObject() {
  const [bio, setbio] = useState({
    firstname: "",
    lastname: ""
  });

  return (
    <form>
      <input
        value={bio.firstname}
        placeholder="firstname"
        onChange={(event) => {
          setbio({ ...bio, firstname: event.target.value });
        }}
        type="text"
      />

      <input
        value={bio.lastname}
        placeholder="lastname"
        onChange={(event) => {
          setbio({ ...bio, lastname: event.target.value });
        }}
        type="text"
      />

      <h2>{JSON.stringify(bio)}</h2>
    </form>
  );
}

export default StateObject;
