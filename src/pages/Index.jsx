import { Container, Text, VStack, Box, Flex, Spacer, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="purple.500" color="white" padding="1.5rem" alignItems="center">
        <Image src="/stripe-logo.svg" alt="Stripe Logo" boxSize="50px" />
        <Spacer />
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Image src="/images/online-payment.jpg" alt="Online Payment" boxSize="300px" objectFit="cover" />
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
      <Box as="footer" bg="gray.200" color="black" padding="1rem" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Stripe</Text>
      </Box>
    </Box>
  );
};

export default Index;