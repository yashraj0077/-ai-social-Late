import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { VStack ,StackDivider } from '@chakra-ui/react'

function Footer() {
  return (
    <Box style={{
        height:"300px",
        gap:"10px",
        display:"flex",
        // border:"1px solid red"
    }} >
        <Box style={{
            // border:"1px solid black",
            width:"25%"
        }} >
            <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box>
     <Text style={{fontWeight:"bold"}} >COMPANY</Text>
    <Text style={{color:"grey"}} >About</Text>
    <Text style={{color:"grey"}}  >Leadership</Text>
    <Text style={{color:"grey"}}  >Professional Service</Text>
    <Text style={{color:"grey"}}  >Press & News</Text>
  </Box>
  <Box>
  <Text style={{fontWeight:"bold"}} >PARTNER & INTEGRATIONS</Text>
  <Text style={{color:"grey"}}  >HubSpot Marketing</Text>
    <Text style={{color:"grey"}}  >Hub</Text>
    <Text style={{color:"grey"}}  >Hootsuite</Text>
    <Text style={{color:"grey"}}  >UpContent</Text>
  </Box>
</VStack>
        </Box>
           <Box style={{
            // border:"1px solid black",
            width:"25%"
        }} >
             <Text style={{fontWeight:"bold"}} >PRODUCT</Text>
            <Text style={{color:"grey"}}  >Pricing</Text>
            <Text style={{color:"grey"}}  >Product OverView</Text>
            <Text style={{color:"grey"}}  >AI Social Content</Text>
            <Text style={{color:"grey"}}  >Writer</Text>
            <Text style={{color:"grey"}}  >Social Media</Text>
            <Text style={{color:"grey"}}  >Marketing</Text>
            <Text style={{color:"grey"}}  >Social Selling</Text>
            <Text style={{color:"grey"}}  >Social Media Analytics</Text>
            <Text style={{color:"grey"}}  >AI Autogeneretor</Text>
            <Text style={{color:"grey"}}  >Autogeneretor</Text>
            <Text style={{color:"grey"}}  >Parent Account</Text>
        </Box>
           <Box style={{
            // border:"1px solid black",
            width:"25%"
        }} >
            
            <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box>
    <Text style={{fontWeight:"bold"}} >RESOURCES</Text>
    <Text style={{color:"grey"}}  >Customer Stories</Text>
    <Text style={{color:"grey"}}  >Ebooks</Text>
    <Text style={{color:"grey"}}  >Blog</Text>
    <Text style={{color:"grey"}}  >Help Center</Text>
  </Box>
  <Box>
  <Text style={{fontWeight:"bold"}} >LATELY OFFICE HOURS</Text>
    <Text style={{color:"grey"}}  >Sign-up</Text>
    <Text style={{color:"grey"}}  >Lately LIVE Replays</Text>
    <Text style={{color:"grey"}}  >How to Position</Text>
    <Text style={{color:"grey"}}  >AnyThing</Text>
    <Text style={{color:"grey"}}  >Lately 101</Text>
  </Box>
</VStack>


        </Box>
           <Box style={{
            // border:"1px solid black",
            width:"25%"
        }} >
  <Text style={{fontWeight:"bold"}} >INDUSTRIES</Text>
       <Text style={{color:"grey"}}  >Every Size</Text>
       <Text style={{color:"grey"}}  >Global Enterprises</Text>
       <Text style={{color:"grey"}}  >Franchise</Text>
       <Text style={{color:"grey"}}  >Small Bussiness</Text>
       <Text style={{color:"grey"}}  >Every Industry</Text>
       <Text style={{color:"grey"}}  >Technology</Text>
       <Text style={{color:"grey"}}  >Financial Services</Text>
       <Text style={{color:"grey"}}  >Media</Text>
       <Text style={{color:"grey"}}  >Entertainment</Text>
       <Text style={{color:"grey"}}  >News & Public</Text>
       <Text style={{color:"grey"}}  >Agencies</Text>
       <Text style={{color:"grey"}}  >Consumer Brands</Text>
       <Text style={{color:"grey"}}  >Education</Text>
       <Text style={{color:"grey"}}  >HeltCare & Pharma</Text>
       <Text style={{color:"grey"}}  >Social Media</Text>
       <Text style={{color:"grey"}}  >Agencies</Text>

        </Box>
    </Box>
  )
}

export default Footer