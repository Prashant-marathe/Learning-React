import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const getData = async () => {

    //* Using fetch
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const data = await response.json()
    
    console.log(data);
    */

   //* Using Axios

    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return <h1>{idx} Hello, {elem.author} </h1>
        })}
      </div>
    </div>
  )
}

export default App