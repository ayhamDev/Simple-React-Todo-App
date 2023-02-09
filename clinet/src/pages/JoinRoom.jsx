import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router'

const JoinRoom = () => {
  const inputId = useRef(null)
  const inputPin = useRef(null)
  const navigate = useNavigate()


  const JoinRoom = () => {
    navigate(`/todo/${inputId.current.querySelector("input").value}?pin=${inputPin.current.querySelector("input").value}`)

  }
  return (
    <div className='center-container'>
        <div className="center-box" style={{flexDirection: "column"}}>
          <Typography variant='h3'>Join Room</Typography>
          <Paper elevation={3} style={{ width: "300px" }}>
            <TextField ref={inputId} style={{ marginBottom: "20px" }}  label="Room ID" variant="standard" fullWidth autoFocus/>
            <TextField ref={inputPin} label="Room Pin" variant="standard" fullWidth />
            <Button variant='contained' color='primary' fullWidth style={{ marginTop: "20px" }}
              onClick={JoinRoom}
            >Join</Button>
          </Paper>
        </div>
    </div>
  )
}

export default JoinRoom