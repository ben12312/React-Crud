import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reassignTask } from './app/action';
import './App.css';

const dbLink = 'http://localhost:3001/tasks';

function App() {
  const dispatch = useDispatch();
  // VARIABLE
  let number = 1
  const tasks = useSelector(state => state.tasks)


  function fetchTasks() {
    fetch(dbLink, { method: 'GET' })
      .then(response => response.json())
      .then(tasks => dispatch(reassignTask(tasks)))
  }

  // FUNCTION CALL
  useEffect(() => {
    fetchTasks()
    // eslint-disable-next-line 
  }, [])


  // FUNCTION BUTTON
  function deleteButton(taskId) {
    // const newTask = tasks.filter(task => task.id !== taskId)
    fetch(dbLink + `/${taskId}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then(() => {
        fetchTasks()
      })
  }

  function addTaskButton() {
    
  }

  return (
    <div>
      <h1 style={{ marginTop: '2cm' }} className="text-center">TASK LIST</h1>

      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label className="sr-only">Title</label>
          <input type="text" className="form-control" placeholder="title"></input><br></br>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label className="sr-only">Category</label>
          <input type="text" className="form-control" placeholder="category"></input><br></br>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <button onClick={() => addTaskButton()} type="submit" className="btn btn-primary mb-2">Add Task</button>
        </div>
      </form>

      <table style={{ marginTop: '2cm' }} className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => {
              return (
                <tr key={task.id}>
                  <th scope="row">{number++}</th>
                  <td>{task.title}</td>
                  <td>{task.category}</td>
                  <td><button type="button" onClick={() => deleteButton(task.id)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
