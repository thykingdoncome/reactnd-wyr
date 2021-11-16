import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Box,
  Button,
  // FormControl,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { CustomDropDown } from "./inputs";
import { setAuthedUser } from "../redux/actions/authedUser.action";

const AuthPage = () => {
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
    }
  };

  return (
    <Box>
      <Container minHeight='100vh' display='flex' alignItems='center'>
        <Flex
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          rounded='md'
          width='100%'
          boxShadow='sm'
          bg='white'
          py={10}
          px={10}
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
                label='User to Login'
                placeholder='Select User'
              />
            </Box>
            <Button
              type='submit'
              width='full'
              mt={8}
              background='black'
              color='#fff'
              colorScheme='black'
              variant='outline'
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AuthPage;
