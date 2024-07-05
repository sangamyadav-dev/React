// import React from 'react'
import  {useEffect, useState} from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/sangamyadav-dev")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
            
    }, [])

  return (
    <div className='text-center m-5 bg-gray-800 text-white text-4xl p-4'>GITHUB FOLLOWER : {data.followers}</div>
  )
}

export default Github