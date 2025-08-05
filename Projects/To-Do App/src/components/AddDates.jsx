import 'bootstrap/dist/css/bootstrap.min.css'

function AddDates({dueDates}) {
    return <div className='col-5'>
    <input type="date" placeholder='Add Task' className='form-control' />
    {dueDates.map((date) => (
        <p className='my-3 ms-2'>{date}</p>
    ))}
    </div>
}

export default AddDates