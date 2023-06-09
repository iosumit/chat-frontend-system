import React from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function Card() {
  return (
    <Box
      style={{
       width:'100%',
       backgroundColor:"#fff",
       height:"100vh",
       overflow:'hidden',
       padding:10,
       margin:"0px 10px 0px 10px",
       borderRadius:8
      }}
    >
      Sally Montgomery
    </Box>
  )
}