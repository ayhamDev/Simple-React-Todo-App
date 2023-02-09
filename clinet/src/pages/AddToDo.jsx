import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const AddToDo = () => {
  const navigate = useNavigate()
  const inputTitle = useRef(null)
  const inputDecs = useRef(null)
  let [searchParams, setSearchParams] = useSearchParams();
  const AddToDo = async () => {
    const res = await fetch(`http://localhost:4000/api/addTodo?id=${searchParams.get("room_id")}&pin=${searchParams.get("pin")}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        data: {
          title :  inputTitle.current.querySelector("input").value,
          decs :  inputDecs.current.querySelector("input").value,
          created_at : Date()
        }
      })
    })

    navigate(`/todo/${searchParams.get("room_id")}?pin=${searchParams.get("pin")}`)

  
  }
  return (
        <div className='center-container'>
        <div className="center-box" style={{flexDirection: "column"}}>
          <Typography variant='h3'>New ToDo</Typography>
          <Paper elevation={3} style={{ width: "300px" }}>
            <TextField ref={inputTitle} style={{ marginBottom: "20px" }}  label="Title" variant="standard" fullWidth autoFocus/>
            <TextField ref={inputDecs} label="Description" variant="standard" fullWidth />
            <Button variant='contained' color='primary' fullWidth style={{ marginTop: "20px" }}
              onClick={AddToDo}
            >add</Button>
          </Paper>
        </div>
    </div>
  )
}

export default AddToDo