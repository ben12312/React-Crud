import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTask, deleteTask, filterTask } from '../store/actions/action'

function Home() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task.tasks)
    const filtered = useSelector(state => state.task.filtered)
    // Variable
    // const [tasks, setTasks] = useState([])
    // const [loading, setLoading] = useState(true) // ?.map()

    // didMout + didUpdate
    useEffect(() => {
        // LOADING
        // setLoading(true)

        dispatch(fetchTask())
    }, [])

    // if (loading) {
    //     return <h1>Loading</h1>
    // }

    function deleteButton(taskId) {
        dispatch(deleteTask(taskId))
    }

    function categoryHandle(payload) {
        dispatch(filterTask(payload))
    }

    return (
        <div className="container">
            <h1>Home</h1>
            <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <select onChange={(event) => categoryHandle(event.target.value)} className="form-select" aria-label="Default select example">
                    <option value="All">All</option>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered?.map(task => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.category}</td>
                                    <td><button onClick={() => deleteButton(task.id)} type="button" className="btn btn-dark">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Home;
