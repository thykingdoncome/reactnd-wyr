import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <Flex align="center" justify="center" minH={"calc(100vh - 64px)"}>
      <Box textAlign="center" px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text color={"black"} fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          as={Link}
          to="/"
          colorScheme="blue.400"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
}
