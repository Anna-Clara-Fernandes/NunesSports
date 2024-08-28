import { useState } from "react";
import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import logo from '../img/NunesSportLogoAtt.png';

const Navbar = () => {
  const [selected, setSelected] = useState("Home");

  const handleNavigation = (page) => {
    setSelected(page);
  };

  return (
    <Flex
      as="nav"
      bg="gray.800"
      color="#fff"
      p={4}
      width="100%"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      boxShadow="md"
    >
     <Flex alignItems="center" mr={8}>
        <Text fontSize="2xl" fontWeight="bold">
          <Text as="span" color="#00BCD4" mr={1}>Nunes</Text>
          <Text as="span" color="#fff">Sports</Text>
        </Text>
      </Flex>

      <Flex
        as="ul"
        listStyleType="none"
        spacing={4}
        alignItems="center"
        ml={4}
        w="100%"
        justify="center"
      >
        {["Home", "Roupas", "calcados", "Cadatrar Produtos"].map((item, index) => (
         <Button
         key={index}
         variant={selected === item ? "solid" : "ghost"}
         colorScheme={selected === item ? "teal" : "teal"} 
         bg={selected === item ? "#00BCD4" : "transparent"} 
         color={selected === item ? "white" : "#00BCD4"} 
         borderRadius="md"
         _hover={{
           bg: selected === item ? "#00ACC1" : "#00BCD4",
           color: "white",
           transform: "scale(1.05)",
           boxShadow: "md"
         }}
         _active={{
           bg: selected === item ? "#00ACC1" : "#00BCD4",
           transform: "scale(0.98)"
         }}
         _focus={{ boxShadow: "outline" }}
         px={4}
         onClick={() => handleNavigation(item)}
       >
         <Text fontSize="lg">{item}</Text>
       </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;