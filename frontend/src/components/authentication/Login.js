import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";

const Login = () => {
    
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState();
  
    const [password, setPassword] = useState();
 
    const handleClick = () => setShow(!show);
  
  
  
    return (
      <VStack spacing={"5px"}>
  
       
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeHolder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>
  
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
          <Input
            type={show?"text":"password"}
            placeHolder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem" onClick={handleClick}>
              <Button h="1.75rem" size="sm">
                  {show ?"Hide":"show"}
  
              </Button>
          </InputRightElement>
          </InputGroup>
        </FormControl>
  
        

  
        <Button
         colorScheme="teal"
         width="100%"
         style={{marginTop:15}}
      //    onclick={submitHandler}
        >LOGIN
  
        </Button>

        <Button
         variant="solid"
         colorScheme="red"
         width="100%"
         onclick={()=>{
            setEmail("guest@expamle.com");
            setPassword("guest@123")
         }}
        >GET GUEST USER CREDENTIALS
  
        </Button>
  
      </VStack>
    );
}

export default Login