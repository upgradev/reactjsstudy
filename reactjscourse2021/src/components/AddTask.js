import React from 'react'

const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="add task" />
            </div>
            <div className="form-control">
                <label htmlFor="">Day</label>
                <input type="text" placeholder="add day" />
            </div>
            <div className="form-control">
                <label htmlFor="">Reminder</label>
                <input type="checkbox"  />
            </div>

            <input type="submit" value="save task" />
        </form>
    )
}

export default AddTask
