import React from 'react'
import { Paper , Typography} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="center-box">
        <Paper style={{ padding : "20px" }} elevation={3} onClick={() => {
          navigate("/join-room")
        }}>
            <div style={{ display: "flex", gap: "15px",alignItems: "center"}}>
              <LoginIcon />
              <Typography variant='h5'>Join Room</Typography>
            </div>
        </Paper>
        <Paper style={{ padding : "20px" }} elevation={3} onClick={() => {
          navigate("/create-room")
        }} >
            <div style={{ display: "flex", gap: "15px",alignItems: "center"}}>
              <AddCircleOutlineIcon />
              <Typography variant='h5'>Create Room</Typography>
            </div>
        </Paper>
      </div>
    </div>
  )
}

export default Home