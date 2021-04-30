import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTask } from '../store/actions/action'
import { useHistory } from 'react-router-dom'

function CreateTask() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()


  function createButton(event) {
    event.preventDefault()

    dispatch(addTask({
      title,
      category
    }))

    history.push('/')
  }

  function titleHandel(payload) {
    setTitle(payload)
  }

  function categoryHandle(payload) {
    setCategory(payload)
  }

  return (
    <div className="container">
      <h1>Create Task</h1>
      <form onSubmit={(event) => createButton(event)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input onChange={(event) => titleHandel(event.target.value)} type="text" className="form-control" placeholder="title" />
        </div>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <select onChange={(event) => categoryHandle(event.target.value)} className="form-select" aria-label="Default select example">
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Mobile">Mobile</option>
          </select>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
