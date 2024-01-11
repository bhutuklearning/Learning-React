import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/bhutuklearning")
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data);
    //     } )
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-3xl text-white p-4 '>
      Github followers: {data.followers}
      <img src={data.avatar_url} className=' my-2 mx-auto'/>
      Name: {data.name}
      <br />
      Repos: {data.public_repos}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/bhutuklearning");
    return response.json()
}
