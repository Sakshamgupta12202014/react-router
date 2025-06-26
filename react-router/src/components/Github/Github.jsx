import React, { useEffect, useState } from "react";

function Github() {
  const [created_at, setCreated_at] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/Sakshamgupta12202014")
      .then((resp) => resp.json())
      .then((resp) => setCreated_at(resp["created_at"]))
      .catch((error) => console.log(error));
  }, []);

  return <div>Github created at : {created_at}</div>;
}

export default Github;
