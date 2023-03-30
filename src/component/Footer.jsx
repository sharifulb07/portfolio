import React from "react"
import logo1 from "./pic/MyHero.png"

const date=new Date();
const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img style={{width:50,height:50, borderRadius:"100px", }} src={logo1} alt='' />
          </div>
          <p>© {date.getFullYear()}. All rights reserved by GorkCoder-Themes.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer