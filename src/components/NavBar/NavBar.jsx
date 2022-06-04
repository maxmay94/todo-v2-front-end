import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='bg-amber-600 bg-opacity-50 hover:bg-opacity-90 p-1'>
      {user ?
        <nav>
          <ul className='flex'>
            <li className='flex-1 ml-5'>Welcome, {user.name}</li>
            <li className='flex-1'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className='mr-5'><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul className='flex'>
            <li className='flex-1 ml-5'><Link to="/login">Log In</Link></li>
            <li className='mr-5'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default NavBar
