import { Button,Input,Divider,Text, Box , Image, color } from '@chakra-ui/react'
import React from 'react'

function Login() {
  return (
    <Box style={{
      backgroundColor:"#e4f2ea",
      height:"1000px"
    }}>
      <Box  style={{
        height:"60px",
        boxShadow: '1px 2px 4px grey',  
        padding: '1em',
        paddingLeft:'7rem',
        backgroundColor:"white"
    }}>
      <Image height={8}  src='https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg' ></Image>
      </Box>
      <Box style={{ height:"200px", width:"500px", marginLeft:"30%", marginTop:"8%"}} >
      <Box style={{ marginBottom:"1rem"}}>
       <Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"start"}}>Log In</Text>
       <Text style={{fontSize:"20px",textAlign:"start" ,color:"grey"}} >Hello, Superyou</Text>
      </Box>
      <Divider  height={.1} orientation='horizontal' bg="black" />
      <Box style={{display:"flex", justifyContent:"center",marginTop:"20px" }}>
         <Text style={{ marginRight:"5px",marginTop:"4px"}}>Email or Username</Text>

         <Input placeholder='Email or Username' size='md'  htmlSize={40} width='auto'focusBorderColor = "green.600" border="2px solid grey" bgColor="white"/>
      </Box>

      <Box style={{display:"flex", marginLeft:"140px",marginTop:"25px"}}>
   <Button width={110} fontSize={13} colorScheme='rgb(102,102,102)' variant='solid' size='md' bg='#666666'>LOG IN</Button>
      <Text style={{color:"blue", marginLeft:"120px"}}>Forgot Password?</Text>

   </Box>

      </Box>
   
    </Box>
  )
}

export default Login