function BharatClock() {
    let date = new Date()
  
    return <div class="container mt-5 text-white p-3 text-center rounded">
    <h1 class="m-4 text-primary">Bharat Clock</h1>
    <p>This is the clock that shows the time in Bharat at all time</p>
    <p>This is the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
  </div>
}

export default BharatClock