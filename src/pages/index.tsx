import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { SimpleGrid } from "@chakra-ui/layout";

import QDIcon from "../components/Icons/QDIcon";
import Circle from "../components/Circles/Circle";

const Home = () => {
  const headingColor = useColorModeValue("yellow.600", "yellow.500");
  return (
    <Box mb={8} w="full">
      <HStack>
        <VStack align="left">
          <HStack align="center">
            <Heading color={headingColor}>Quadratic Diplomacy</Heading>
            <QDIcon />
          </HStack>
          <Text color="purple.500" fontWeight="bold">
            {" "}
            by MOONSHOT COLLECTIVE{" "}
          </Text>
          <Text pt="10" fontSize="20px">
            Distribute tokens among your team members based on quadratic voting.{" "}
          </Text>
          <Box maxW="300px" pt="10">
            <Button w="239px" h="51px" fontSize="xl">
              Launch App
            </Button>
          </Box>
        </VStack>
        <Box w="300px"></Box>
      </HStack>

      <Divider mt="16" backgroundColor="purple.500" />

      <VStack mt="16" spacing="4" align="left">
        <Heading size="md" color={headingColor}>
          How it Works
        </Heading>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 3,
          }}
          spacing={4}
        >
          <HStack>
            <Box>
              <Circle text="1" />
            </Box>
            <Text>Select team members you’ve worked with</Text>
          </HStack>

          <HStack>
            <Box>
              <Circle text="2" />
            </Box>
            <Text>Vote each member with your allocated number of votes</Text>
          </HStack>

          <HStack>
            <Box>
              <Circle text="3" />
            </Box>
            <Text>Tokens will be distributed based on quadratic voting</Text>
          </HStack>
        </SimpleGrid>
      </VStack>
      <Divider mt="16" backgroundColor="purple.500" />

      <VStack mt="16" spacing="4" align="left">
        <Heading size="md" color={headingColor}>
          FAQs
        </Heading>
        <Text color="purple.500" fontWeight="bold">
          Lorem ipsum dolor sit amet?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{" "}
        </Text>
        <Text color="purple.500" fontWeight="bold">
          Lorem ipsum dolor sit amet?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{" "}
        </Text>
      </VStack>
      <Divider mt="16" backgroundColor="purple.500" />
    </Box>
  );
};

export default Home;
