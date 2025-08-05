import 'bootstrap/dist/css/bootstrap.min.css'

function AddTasks({tasks}) {
    return <div className='col-5'>
    <input type="text" placeholder='Add Task' className='form-control' />
    {tasks.map((task) => (
        <p className='my-3 ms-2'>{task}</p>
    ))}
    </div>
}

export default AddTasks