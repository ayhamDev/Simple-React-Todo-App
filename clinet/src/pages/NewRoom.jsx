import { Button, FormControl, Paper, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const NewRoom = () => {
  const navigate = useNavigate()
  const [Disabled,setDisabled] = useState(false)
  const inputName = useRef(null);
  const inputPin = useRef(null);

  const CreateRoom = async () => {
      setDisabled(true)
      const res = await fetch(`http://localhost:4000/api/create-room?pin=${inputPin.current.querySelector("input").value}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: inputName.current.querySelector("input").value})
      });
      const doc = await res.json()
      setDisabled(false)
      navigate(`/todo/${doc._id}?pin=${doc.pin}`)
  }
  
  return (
    <div className='center-container'>
        <div className="center-box" style={{flexDirection: "column"}}>
          <Typography variant='h3'>New Room</Typography>
          <Paper elevation={3} style={{ width: "300px" }}>
            <TextField required ref={inputName}  style={{ marginBottom: "20px" }}  label="Room Name" variant="standard" fullWidth autoFocus/>
            <TextField required ref={inputPin} label="Room Pin" variant="standard" fullWidth />
            <Button disabled={false} variant='contained' color='primary' fullWidth style={{ marginTop: "20px" }}
              onClick={CreateRoom}
            >Create</Button>
          </Paper>
        </div>
    </div>
  )
}

export default NewRoom