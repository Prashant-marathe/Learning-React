import { useEffect, useState } from "react"


const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(() => {
    console.log('useEffect is running....');
  }, [num1])

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => {
        setNum1(num1 + 1)
      }}>count + 1</button>

      <h1>{num2}</h1>
      <button onClick={() => {
        setNum2(num2 + 10)
      }}>count + 10</button>
    </div>
  )
}

export default App