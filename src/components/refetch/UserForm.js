import React from 'react'

const UserForm = ({user, onChange, onSave}) => {
    return (


    <form  className="form-group"> 
        <div>
        &nbsp;
                <div >
                <label for="name">Name</label >   &nbsp;
                <input name="name" label="Name" 
                onChange={onChange} />
                </div>
                &nbsp;
                <div >
                <label for="people">People</label >   &nbsp;
                <input name="people" label="People" 
                onChange={onChange} />
                &nbsp;
                </div>
                 
                <input
                type="submit" className="btn btn-primary" onClick={onSave}
                />
       
        </div>
       
    </form>
    )
}

export default UserForm