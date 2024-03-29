import React, { useEffect, useState } from 'react';


const StatusInfoWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false); // [value, func]
  let [status, setStatus] = useState(props.status); // [value, func]

  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);



  
  const activateMode = () => {
    setEditMode(true);
  }
  const deactivateMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }



  return <div>

    {!editMode &&
      <div>
        <span onDoubleClick={activateMode} > {props.status || "-----"} </span>
      </div>
    }

    {editMode &&
      <div>
        <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status} />
      </div>
    }

  </div>
}


export default StatusInfoWithHooks;
