import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./index.scss";
import Form from "./components/Form/Form";
import Dashboard from "./Pages/Dashboard";
import { UserContext } from "./Context/UserContext";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
] );





const App = () => {
  const [user, setUser] = useState()

  useEffect( () => {
    async function fetchData() {
      const id = localStorage.getItem( "id" )

      if ( id ) {
        try {
          const response = await fetch( 'http://localhost:5000/autorization', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify( { userId: id } ),
            headers: {
              "Content-Type": "application/json"
            }
          } );
          const data = await response.json();
          if ( data.user._id ) {
            setUser( data.user )
          }
        }
        catch ( e ) {
          console.log( e )
        }
      }
    }
    fetchData()
  }, [] )
  return (
    <React.StrictMode>
    <UserContext.Provider value={ [user, setUser] }>
        <RouterProvider router={ router } />
        </UserContext.Provider>
      </React.StrictMode>
  )
}

export default App
