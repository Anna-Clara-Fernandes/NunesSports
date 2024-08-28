import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [productCode, setProductCode] = useState(dataEdit.productCode || "");
  const [productValues, setproductValues] = useState(dataEdit.productValues || "");
  const [Category, setCategory] = useState(dataEdit.Category || "");
  const [Description, setDescription] = useState(dataEdit.Description || "");''
  const [stock, setStock] = useState(dataEdit.stock || "");

  const handleSave = () => {
    if (!name || !productValues || !Category || !Description || !stock ||  !productCode) return;

    if (productCodeAlreadyExists()) {
      return alert("Já existe um produto cadastrado com esse código no sistema!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, productValues, Category, Description, stock, productCode };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, productValues, Category, Description, stock, productCode }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_product", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const productCodeAlreadyExists = () => {
    if (dataEdit.productCode !== productCode && data?.length) {
      return data.find((item) => item.productCode === productCode);
    }

    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent
          borderRadius="lg"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          p={6}
          bg="white"
          borderColor="gray.200"
          borderWidth="1px"
        >
          <ModalHeader
            fontSize="xl"
            fontWeight="bold"
            color="purple.600"
            borderBottomWidth={1}
            borderBottomColor="purple.200"
            pb={4}
            textAlign="center"
          >
            Cadastro de Produtos
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Flex direction="column" gap={4}>
                <Flex wrap="wrap" gap={4}>
                  <Box flex="1">
                    <FormLabel fontWeight="semibold" color="purple.500">
                      Nome
                    </FormLabel>
                    <Input
                      type="text"
                      variant="outline"
                      borderColor="purple.300"
                      _hover={{ borderColor: "purple.400" }}
                      _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                  <Box flex="1">
                    <FormLabel fontWeight="semibold" color="purple.500">
                      Valor
                    </FormLabel>
                    <Input
                      type="number"
                      variant="outline"
                      borderColor="purple.300"
                      _hover={{ borderColor: "purple.400" }}
                      _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                      value={productValues}
                      onChange={(e) => setproductValues(e.target.value)}
                    />
                  </Box>
                </Flex>
                <Flex wrap="wrap" gap={4}>
                  <Box flex="1">
                    <FormLabel fontWeight="semibold" color="purple.500">
                      Categoria
                    </FormLabel>
                    <Input
                      type="text"
                      variant="outline"
                      borderColor="purple.300"
                      _hover={{ borderColor: "purple.400" }}
                      _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                      value={Category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Box>
                  <Box flex="1">
                    <FormLabel fontWeight="semibold" color="purple.500">
                      Descrição
                    </FormLabel>
                    <Input
                      type="text"
                      variant="outline"
                      borderColor="purple.300"
                      _hover={{ borderColor: "purple.400" }}
                      _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                      value={Description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Box>
                </Flex>
                <Flex wrap="wrap" gap={4}>
                  <Box flex="1">
                    <FormLabel fontWeight="semibold" color="purple.500">
                      Código do Produto
                    </FormLabel>
                    <Input
                      type="number"
                      variant="outline"
                      borderColor="purple.300"
                      _hover={{ borderColor: "purple.400" }}
                      _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                      value={productCode}
                      onChange={(e) => setProductCode(e.target.value)}
                    />
                  </Box>
                  <Box flex="1">
                    <FormLabel fontWeight="semibold" color="purple.500">
                      Estoque
                    </FormLabel>
                    <Input
                      type="number"
                      variant="outline"
                      borderColor="purple.300"
                      _hover={{ borderColor: "purple.400" }}
                      _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </Box>
                </Flex>
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="space-between" p={4}>
            <Button
              colorScheme="green"
              borderRadius="md"
              boxShadow="md"
              _hover={{
                bgGradient: "linear(to-r, green.400, green.600)",
                boxShadow: "lg",
              }}
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={handleSave}
            >
              SALVAR
            </Button>
            <Button
              colorScheme="red"
              borderRadius="md"
              boxShadow="md"
              _hover={{
                bgGradient: "linear(to-r, red.400, red.600)",
                boxShadow: "lg",
              }}
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={onClose}
            >
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
