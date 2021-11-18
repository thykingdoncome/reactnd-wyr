import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  {
    linkTo: "/",
    name: "Dashboard",
  },
  {
    linkTo: "/add",
    name: "Create New Poll",
  },
  {
    linkTo: "/leaderboard",
    name: "Leaderboard",
  },
];

const NavLink = ({ toLink, isMobile, click, children }) => (
  <Link
    as={ReachLink}
    to={toLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    _active={{
      bg: useColorModeValue("blue.200", "blue.700"),
    }}
    onClick={isMobile ? click : undefined}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const state = useSelector((state) => state);
  const { authedUser, users } = state;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        top={0}
        right={0}
        left={0}
        zIndex={2}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink toLink={link.linkTo} key={link.name}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Text mr={2} fontWeight={600}>
              {users[authedUser].name}
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  name={users[authedUser].name}
                  size={"sm"}
                  src={users[authedUser].avatarURL}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  toLink={link.linkTo}
                  key={link.name}
                  isMobile={true}
                  click={isOpen ? onClose : onOpen}
                >
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
