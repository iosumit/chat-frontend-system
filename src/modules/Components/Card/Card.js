import React from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function Card({children,bgColor,borderRadius,width,height,padding}) {
  return (
    <Box
      style={{
       width:width?width:"100%",
       backgroundColor:bgColor?bgColor:'#fff',
       height:height?height:"100vh",
       padding:padding?padding:"10",
       borderRadius:borderRadius?borderRadius:"none",
      // display:'flex',
      // flexDirection:'column',
      // justifyContent:"center"
      }}
    >
      {children?children:<h1>Card</h1>}
    </Box>
  )
}