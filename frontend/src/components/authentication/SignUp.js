import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);



  return (
    <VStack spacing={"5px"}>

      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeHolder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>

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

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
        <Input
          type={show?"text":"password"}
          placeHolder="Re-Enter Your Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <InputRightElement width="4.5rem" onClick={handleClick}>
            <Button h="1.75rem" size="sm">
                {show ?"Hide":"show"}

            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic" isRequired>
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
        //   onChange={(e) => postDetails(e.target.files[0])}
        ></Input>
      </FormControl>

      <Button
       colorScheme="teal"
       width="100%"
       style={{marginTop:15}}
    //    onclick={submitHandler}
      >SIGN UP

      </Button>

    </VStack>
  );
};

export default SignUp;
