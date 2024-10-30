import React from 'react'
import {Link } from "react-router-dom";
export default function NavbarItem(props) {
  return (
    <nav style={{
      display:"flex",
      backgroundColor:"black",
      justifyContent:'space-between'
    }}>
      <div style={{
          marginLeft:15,
        }}>
        <Link style={{
          color:'white',
        }}>SCS</Link>
      </div>
      <div style={{
        display:'flex',
        margin:10,
        gap:5
      }}>
        <Link style={{
          padding:10,
          gap:5,
          borderRadius:10,
          color:'black',
        }}>SignUp</Link>
        <Link style={{
          padding:10,
          gap:2,
          borderRadius:10,
          color:'black',
        }}>Login</Link>
      </div>
    </nav>
  )
}
