import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Users from './Components/Users/Users.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import Comments from './Components/Comments/Comments.jsx';
import CommentDetails from './Components/CommentDetails/CommentDetails.jsx';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Navbar></Navbar>,
    children : [
      {
        path : '/about',
        element : <Home></Home>
      },
      {
        path : 'contact',
        element : <Contact></Contact>
      },
      {
        path : '/users',
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path : '/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Posts></Posts>
      },
      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      },
      {
        path : '/comments',
        loader : () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element : <Comments></Comments>
      },
      {
        path : '/comment/:commentId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element : <CommentDetails></CommentDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
