import React from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function Card({children}) {
  return (
    <Box
      style={{
       width:'100%',
       backgroundColor:"#fff",
       height:"100vh",
       overflow:'hidden',
       padding:10,
       borderRadius:8,
       position:'relative'
      }}
    >
      {children}
    </Box>
  )
}