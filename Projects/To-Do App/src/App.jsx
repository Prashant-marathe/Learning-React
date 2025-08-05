import Title from "./components/Title";
import AddDates from "./components/AddDates";
import AddTasks from "./components/AddTasks";
import AddButtons from "./components/AddButtons";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let tasks = ['Wake up at 4:00 AM', 'Finish React JS as soon as possible', 'Take your medicines']
  let dueDates = ['04/08/2025','04/08/2025','04/08/2025',]
  return <div className="container mt-4">
    <Title></Title>
  <div className="container row">
    <AddTasks tasks={tasks}></AddTasks>
    <AddDates dueDates={dueDates}></AddDates>
    <AddButtons></AddButtons>
  </div>
  </div>
}

export default App;