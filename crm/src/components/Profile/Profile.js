import React, { useContext } from "react"
import { UserContext } from "../../Context/UserContext"


const Profile = () => {
  const [user, setUser] = useContext( UserContext )
  console.log( user );
  return (
    <div className="profile">
      {
        user ?
          <div className="profile__info">
            <p>{user.fullName}</p>
          </div>
          :
          <div>
            <button>Sign In</button>
            <button>Login</button>
          </div>
      }
    </div>
  )
}
export { Profile}