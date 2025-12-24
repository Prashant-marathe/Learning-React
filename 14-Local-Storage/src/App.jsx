

const App = () => {

  //* Local Storage brief
  /*
  //* Create a new data in local storage
  localStorage.setItem("User", "Prince")
  localStorage.setItem("Age", 21)
  
  //* Get the stored data and print it
  const user = localStorage.getItem("User")
  const age = localStorage.getItem("Age")
  console.log(user);
  console.log(age);
  
  //* RemoveItem 
  localStorage.removeItem("user")

  //* Clear local storage: 
  localStorage.clear()
  */

  /*
  //* Local storage advance :
  // localStorage only accepts data as string so we are working with objects or arrays we need to manually convert them into strings using JSON.stringify() and to read them we use json.parse()
  const User = {
    name: "Prince", 
    age:18,
    gender:"Male"
  }
  
  localStorage.setItem("User", JSON.stringify(User))
  
  const user = JSON.parse(localStorage.getItem("User"))
  console.log(user.name);
  console.log(user.age);
  console.log(user.gender);
  */ 
  
  
  return (
    <div>App</div>
  )
}

export default App