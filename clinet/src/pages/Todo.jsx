import { Fab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Delete from '@mui/icons-material/Delete';

const Todo = () => {
  let [pin,setPin] = useState("")
  let [ID,setID] = useState("")
  let [TodoItem, setTodoItem] = useState([])

  let navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  let [title,setTitle ] = useState("")

  const { id } = useParams()

  async function updataData(item) {
    const res = await fetch(`http://localhost:4000/api/updateToDo`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        pin,
        ID,
        data: TodoItem.filter((item_s) => item_s.title != item.title )
      })
    })
    return res
  }
  useEffect(() => {

    async function getData() {
      const res = await fetch(`http://localhost:4000/api/todo?id=${id}&pin=${searchParams.get("pin")}`)

        if(res.status == "404") { 
        navigate("/") 
      }
      else {
  
        const doc = await res.json()
        setPin(doc.pin)
        setID(doc._id)
        setTitle(doc.name)
        setTodoItem(doc.TodoItem)
      }
  
    }
    getData()
  },[])
  return (
    <div className='container'>
      
      <Typography style={{ paddingBottom: "10px" , paddingTop:"20px"}}  variant='h2' align='left'>ToDo</Typography>
      <Link to="/">Return Home</Link>
      <Typography  variant='body2'  align='left'>Room ID : {ID}</Typography>
      <Typography style={{ paddingBottom: "20px" }}  variant='body2'  align='left'>PIN : {pin}</Typography>
      <Paper className='table-container' elevation={2}>
      <Typography  variant='h5' align='left'>{title}</Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Decscription</TableCell>
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
              TodoItem.map((item,index) =>  (
                <TableRow key={index} >
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.decs}</TableCell>
                  <TableCell>{item.created_at} <Delete onClick={async () => {
                    const res = await updataData(item)
                    if(res.status != "404") {
                      setTodoItem(() => {
                        return TodoItem.filter((item_s) => item_s.title != item.title )
                      })
                    }

                  }} style={{ float: "right",cursor: "pointer" }} /></TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Fab onClick={() => {
        navigate(`/new-todo?room_id=${id}&pin=${pin}`)
      }} className='float' color='primary' size='medium'>
        <AddIcon />
      </Fab>
      </Paper>
    </div>
  )
}

export default Todo