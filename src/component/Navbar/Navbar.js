import React,{useState} from 'react'
import './Navbar.css'
import LogInPopUp from '../LogInPopUp/LogInPopUp'

function Navbar() {
  const [showLogIn,setShowLogIn] = useState(true);
  const onClickLogIn=()=>{
    console.log(1111)
    setShowLogIn(!showLogIn);
  }
  return (
    <div className='navbar'>
      <div className='innerNavbar'>
        <a href='/' className='logo_a'><span>ANH ĐỨC</span> </a>
        <div className='function'>
            <a href='/'>About</a>
            <a href='/'>Product</a>
            <a href='/'>overflowAI</a>
        </div>
        <div className='searchNavbar'>
        <input type='text' placeholder='Search...'/>
        <button>Search</button>
        </div>
        <button onClick={()=>onClickLogIn()} className='logIn'>LogIn</button>
      </div>
      {showLogIn?(
        <LogInPopUp closePopUp={onClickLogIn}></LogInPopUp>
      ):''}
    </div>
  )
}

export default Navbar
