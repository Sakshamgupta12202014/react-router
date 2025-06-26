import React, { useEffect, useState } from "react";
import {useLoaderData} from "react-router-dom"

function Github() {

    const githubData = useLoaderData()
//   const [githubData, setGithubData] = useState("");
  
//   useEffect(() => {
//     fetch("https://api.github.com/users/Sakshamgupta12202014")
//       .then((resp) => resp.json())
//       .then((resp) => setGithubData(resp))
//       .catch((error) => console.log(error));
//   }, []);

  return (
    <>
      <div>Github created at : {githubData.created_at}</div>
      <div><img src={githubData.avatar_url} alt="github picture" width="200px" height="200px"/></div>
    </>
  );
}

export default Github;


export async function loadGithubInfo() {

    const data = await fetch("https://api.github.com/users/Sakshamgupta12202014")
    return data.json()
}