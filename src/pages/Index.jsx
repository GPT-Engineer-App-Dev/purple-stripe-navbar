import { Container, Text, VStack, Box, Flex, Spacer, Image, Heading, SimpleGrid } from "@chakra-ui/react";

const partners = [
  { name: "Partner 1", logo: "/images/partner1-logo.png" },
  { name: "Partner 2", logo: "/images/partner2-logo.png" },
  { name: "Partner 3", logo: "/images/partner3-logo.png" },
];

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
      <Container maxW="container.lg" mt={10} mb={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>Our Partners</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {partners.map((partner, index) => (
            <Box key={index} textAlign="center">
              <Image src={partner.logo} alt={`${partner.name} Logo`} boxSize="150px" objectFit="contain" mx="auto" />
              <Text mt={4} fontSize="lg">{partner.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      
      <Box as="footer" bg="gray.200" color="black" padding="1rem" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Stripe</Text>
      </Box>
    </Box>
  );
};

export default Index;