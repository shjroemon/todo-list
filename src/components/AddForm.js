import React from 'react'

function AddForm({handleInputChange, handleSubmit, newTask}) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlfor="newitem">Add to the todo list</label>
      <input type="text" id="newitem" value={newTask} onChange={handleInputChange} />
      <button type="submit">Add Item</button>
    </form>
  )
}

export default AddForm
