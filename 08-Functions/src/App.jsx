const App = () => {
  function btnClicked() {
    console.log('btn is clicked');
  }

  function mouseleave() {
    console.log('Mouse entered...');
  }

  function userChange(val) {
    console.log(val);
  }
  return (
    <div>
      <h1>Click Event</h1>
      <button onMouseLeave={mouseleave} onDoubleClick={btnClicked}>Click Here</button>

      <button onClick={() => {
        console.log("Function written inside an element");
      }}>Explore This</button>

      <input type="text" placeholder="Enter name" onChange={function(elem) {
        userChange(elem.target.value);
      }} />

      <div className="box" onMouseMove={(event) => {
        console.log(event.clientX);
        console.log(event.clientY);
      }}>

      </div>
    </div>
  )
}

export default App