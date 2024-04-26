import { Box, Button, Container, Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4}>Welcome to AP-SSDC</Heading>
          <Text fontSize="lg">Andhra Pradesh State Skill Development Corporation (AP-SSDC) is committed to skill the youth and improve their employability across the state.</Text>
        </Box>

        <Box align="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1577086664693-894d8405334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbmRocmElMjBQcmFkZXNoJTIwbWFwfGVufDB8fHx8MTcxNDExNTQ3MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Andhra Pradesh" />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4}>Our Mission</Heading>
          <Text fontSize="lg">Our mission is to enhance the skills of the youth and empower them for progressive careers through strategic partnerships, innovative programs and inclusive development.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4}>Join Us</Heading>
          <Text fontSize="lg">Explore the various skill development programs offered by AP-SSDC and take the first step towards a successful career. Join us in our journey to empower the youth of Andhra Pradesh.</Text>
          <Link href="https://skilluniverse.apssdc.in/" isExternal>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={4}>
              Learn More
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
