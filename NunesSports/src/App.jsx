import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_product")
      ? JSON.parse(localStorage.getItem("cad_product"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (productCode) => {
    const newArray = data.filter((item) => item.productCode !== productCode);

    setData(newArray);

    localStorage.setItem("cad_product", JSON.stringify(newArray));
  };

  return (
    <Flex
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
      direction="column"
      mt={20}
      width="100%"
      minHeight="100vh"
    >

      <Navbar />

      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        p={6}
        bg="white"
        boxShadow="md"
        w="full"
        maxW="1200px"
        mx="auto"
        my={8}
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={4} color="gray.800">
          Tela de Cadastro para Produtos
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Esta tela é destinada exclusivamente para administradores do sistema. Aqui, você pode adicionar novos produtos ao sistema, preenchendo os detalhes necessários como nome, descrição, preço e outras informações relevantes. Utilize esta página para manter o catálogo de produtos atualizado e gerenciar os valores e informações de cada item.
        </Text>
      </Box>

      <Box maxW={1500} w="100%" py={10} px={2}  >

        <Flex
          justify="center"
          align="center"
          mb={10}
        >
          <Button
            colorScheme="purple"
            bgGradient="linear(to-r, purple.400, purple.600)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, purple.500, purple.700)",
              transform: "scale(1.05)",
              boxShadow: "md"
            }}
            _active={{
              bgGradient: "linear(to-r, purple.600, purple.800)",
              transform: "scale(0.98)"
            }}
            _focus={{ boxShadow: "outline" }}
            borderRadius="md"
            px={20}
            py={4}
            fontSize="lg"
            fontWeight="bold"
            transition="all 0.3s ease"
            shadow="md"
            onClick={() => onOpen()}
          >
            CADASTRAR PRODUTOS
          </Button>
        </Flex>
        <Box
          overflowY="auto"
          height="100%"
          borderRadius="lg"
          border="1px solid"
          borderColor="gray.300"
          bg="gray.50"
          boxShadow="xl"
          mb={5}
          p={4}
        >
          <Table variant="simple" colorScheme="purple" size="md" mt={4}>
            <Thead>
              <Tr>
                <Th fontSize="16px" color="purple.700" fontWeight="bold">
                  Nome do Produto
                </Th>
                <Th fontSize="16px" color="purple.700" fontWeight="bold">
                  Valor do Produto
                </Th>
                <Th fontSize="16px" color="purple.700" fontWeight="bold">
                  Categoria
                </Th>
                <Th fontSize="16px" color="purple.700" fontWeight="bold">
                  Descrição
                </Th>
                <Th fontSize="16px" color="purple.700" fontWeight="bold">
                  Código do Produto
                </Th>
                <Th fontSize="16px" color="purple.700" fontWeight="bold">
                  Estoque
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, productValues, Category, Description, productCode, stock }, index) => (
                <Tr
                  key={index}
                  _hover={{ bg: "purple.100", transform: "scale(1.02)" }}
                  transition="all 0.3s"
                  cursor="pointer"
                >
                  <Td maxW={isMobile ? "5" : "150"}>{name}</Td>
                  <Td maxW={isMobile ? "5" : "150"}>{productValues}</Td>
                  <Td maxW={isMobile ? "5" : "150"}>{Category}</Td>
                  <Td maxW={isMobile ? "5" : "150"}>{Description}</Td>
                  <Td maxW={isMobile ? "5" : "150"}>{productCode}</Td>
                  <Td maxW={isMobile ? "5" : "150"}>{stock}</Td>
                  <Td p={0} textAlign="center">
                    <EditIcon
                      fontSize="20px"
                      color="purple.600"
                      _hover={{ color: "purple.800", transform: "scale(1.1)" }}
                      transition="all 0.3s"
                      onClick={() => [
                        setDataEdit({ name, productValues, Category, Description, productCode, stock, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0} textAlign="center">
                    <DeleteIcon
                      fontSize="20px"
                      color="red.500"
                      _hover={{ color: "red.700", transform: "scale(1.1)" }}
                      transition="all 0.3s"
                      onClick={() => handleRemove(productCode)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}

      <Footer />
    </Flex>

  );
};

export default App;
