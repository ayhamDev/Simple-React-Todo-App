import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import JoinRoom from "./pages/JoinRoom";
import Todo from "./pages/Todo";

import "./assets/index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddToDo from "./pages/AddToDo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-room",
    element: <NewRoom />,
  },
  {
    path: "/join-room",
    element: <JoinRoom />,
  },
  {
    path: "/todo/:id",
    element: <Todo />,
  },
  {
    path: "/new-todo",
    element : <AddToDo />
  }

]);

const App = () => {
  return (
    <>
      <RouterProvider 
      router={router} />
    </>
    
  )
}

export default App