import React, { useEffect, useRef, useState } from 'react'
import './LoginPopUp.css'
import gsap from 'gsap'

function LogInPopUp({closePopUp}) {
  const logInRef = useRef();
    const [type,setType] = useState(true);
    function close(e){
        if(e.target === e.currentTarget){
            closePopUp();
        }
    }
    const chooseType = (choose)=>{
        setType(choose);
        if(choose){
          gsap.to(logInRef.current,{
            width:'20vw',
            height:'40vh',
            duration:0.5
          })
        }else{
          gsap.to(logInRef.current,{
            width:'30vw',
            height:'70vh',
            duration:0.5
          })
        }
    }
    useEffect(()=>{
        gsap.fromTo(logInRef.current,{
          scale:0.5
        },{
          scale:1,
          duration:0.5
        })
    },[])
  return (
    <div onClick={(e)=>close(e)} className='LogInPopUp'>
      <div ref={logInRef} className='innerLogIn'>
        <div className='typeLogIn'>
            <div onClick={()=>chooseType(true)} className={`${type?'choose':''}`}>Đăng nhập</div>
            <div onClick={()=>chooseType(false)} className={`${type?'':'choose'}`}>Đăng ký</div>
        </div>
        <div>
          {type?(<form className='SignIn'>
            Tài Khoản:<br/>
            <input type='text' placeholder='Email or Phone number' /><br/><br/>
            Mật khẩu:<br/>  
            <input type='text' placeholder='Enter password' /><br/><br/>
            <input style={{width:'30%'}} type='submit' value='Submit'/>
          </form>):(<form>
            
          </form>)}
        </div>
      </div>
    </div>
  )
}

export default LogInPopUp
