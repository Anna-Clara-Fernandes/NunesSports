import { Box, Flex, Text, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const fontSize = useBreakpointValue({ base: "sm", md: "md" }); 
  const logoFontSize = useBreakpointValue({ base: "xl", md: "3xl" }); 

  return (
    <Box
      as="footer"
      bg="gray.800"
      color="#fff"
      py={2} 
      width="100%"
      boxShadow="md"
      position="relative"
      bottom="0"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        maxW="1200px"
        mx="auto"
      >
        <Text fontSize={logoFontSize} fontWeight="bold" >
          <Text as="span" color="#00BCD4">Nunes</Text>{" "}
          <Text as="span" color="#fff">Sports</Text>
        </Text>
        
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignItems="center" gap={2}>
            <Icon as={FaMapMarkerAlt} color="purple.300" boxSize={5} />
            <Text fontSize={fontSize}>Rua Exemplo, 123 - Pau dos Ferros, RN</Text>
          </Flex>
          
          <Flex
            direction={{ base: "column", md: "row" }} 
            alignItems="center"
            justifyContent="center"
            gap={4}
            mb={4}
          >
            <Flex alignItems="center" gap={2}>
              <Icon as={FaPhoneAlt} color="purple.300" boxSize={5} />
              <Text fontSize={fontSize}>(00) 1234-5678</Text>
            </Flex>
            
            <Flex alignItems="center" gap={2}>
              <Icon as={FaEnvelope} color="purple.300" boxSize={5} />
              <Text fontSize={fontSize}>contato@nunessport.com</Text>
            </Flex>
          </Flex>
        </Flex>
        
        <Text fontSize={fontSize} color="gray.400">
          &copy; 2024 NunesSports. Todos os direitos reservados.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;