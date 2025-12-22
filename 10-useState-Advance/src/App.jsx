import { useState } from "react"


const App = () => {
  const [num, setNum] = useState(10)
  
  const setNumIsAsync = () => {
     {/* Because state updates are async, if we need to update sate based on the previous value (like aa counter), we should use funtional update */}
    console.log(num);
    // Instead of this:
    setNum(20)

    // Do this
    setNum(num => num + 1)
    console.log(num);
  }

  // Working with objects
  const [user, setUser] = useState({name:"Prince", age:20})

  function updateUser() {
    // Use spread counter [...] to update object items
    let newUser = {...user}
    newUser.name = 'Prashant'
    setUser(newUser)
  }

  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry', 'Guava'])

  const updateFruits = () => {
    
    // Add an new item to fruits
    setFruits([...fruits, 'Pineapple'])

    // Remove an existing item
    fruits.filter(item => item.id !== 2)

    // Use map for filtering
    fruits.map(item => item)
  }
  return (
    <div>

      <div className="async">
        {/* Because state updates are async, if we need to update sate based on the previous value (like aa counter), we should use funtional update */}
        <h1>Click to change</h1>
        <button onClick={setNumIsAsync}>Click</button>
      </div>

    <hr />
    <hr />

      <div className="obejct-handling">
        <h2>User Info {user.name}</h2>
        <h2>User Info { user.age}</h2>
        <button onClick={updateUser}>Click to Update name</button>
      </div>

      <hr />
      <hr />

      <div className="array-handling">
        <h2>Array item 1: {fruits[0]}</h2>
        <h2>Array item 2: {fruits[1]}</h2>
        <h2>Array item 3: {fruits[2]}</h2>
        <h2>Array item 4: {fruits[3]}</h2>
        <h2>Array item 5: {fruits[4]}</h2>
        <button onClick={updateFruits}>Add fruit</button>
      </div>
    </div>
  )
}

export default App