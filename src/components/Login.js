import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Avatar,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

import { CustomDropDown } from "./inputs";
import { setAuthedUser } from "../redux/actions/authedUser.action";

export default function Login() {
  const toast = useToast();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const userNames = Object.keys(state?.users).map(userId => {
      return { id: userId, name: state.users[userId].name };
    });

    setUsers(userNames);
  }, [state]);

  const handleSubmit = () => {
    if (user) {
      dispatch(setAuthedUser(user));
    } else {
      toast({
        title: "Info",
        description: "Please select a user to Login",
        status: "info",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to answer all of our cool "Would You Rather"{" "}
            <Link color={"blue.400"}>polls</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Flex
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
            rounded='md'
            width='100%'
          >
            <Box>
              <Avatar
                size='2xl'
                src='https://pbcdn1.podbean.com/imglogo/image-logo/4605600/Rokucomlinks_net.png'
              />
            </Box>
            <Box minWidth='100%'>
              <Box mt={6}>
                <CustomDropDown
                  required={false}
                  options={users}
                  handleOption={value => setUser(value)}
                  value={user}
                  width='100%'
                  label=''
                  placeholder='Select User'
                />
              </Box>
              <Stack mt={4} spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}
