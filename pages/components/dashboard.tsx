import { Avatar, Box, Button, Flex, Grid, Heading, Input, Link, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, useDisclosure } from '@chakra-ui/core';

import React from 'react'

function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (


        <Grid as='main'
            height='100vh'
            templateColumns='1fr 400px 700px 1fr'
            templateRows='1fr 490px 1fr'
            templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
        "
            justifyContent='center'
            alignItems='center'
        >


            <Flex
                backgroundColor='gray.700'
                borderRadius='md'
                flexDir='column'
                alignItems='stretch'
                padding={16}
                justifyContent='center'

            >
                <List spacing={3}>
                    <ListItem>
                        <ListIcon icon="check-circle" color="green.500" />
                        <Stack isInline>

                            <Avatar src="https://bit.ly/broken-link" />
                        </Stack>
              Smashlog Tecnologia
               </ListItem>

                </List>
            </Flex>



            <Flex gridArea='form'
                boxShadow=' 5px 5px 2px #9F7AEA;'
                // height='100%
                backgroundColor='gray.700'
                borderRadius='md'
                flexDir='column'
                // alignItems='stretch'
                padding={16}
                // position='fixed'
                marginBottom='350px'
             >


                <StatGroup>
                    <Stat>
                        <StatLabel>Coletas feitas</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
      23.36%
    </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Condominios</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
      9.05%
    </StatHelpText>
                    </Stat>
                </StatGroup>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>

                </Grid>
                <Button
                    marginTop={6}
                    backgroundColor='purple.500'
                    height='50px'
                    borderRadius='sm'
                    _hover={{ background: 'purple.600' }}

                    onClick={onOpen}

                >
                    Coletar
</Button>


                <Link
                    href='#'
                    alignSelf='flex-start'
                    marginTop={2}
                    fontSize='sm'
                    color='purple.600'
                    fontWeight='bold'
                    _hover={{ color: 'purple.500' }}
                 
                >
                    Detalhamento das coletas

</Link>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de atividade</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input
height='50px'
backgroundColor='gray.800'
focusBorderColor='purple.500'
borderRadius='sm'
marginTop={2}
placeholder='Informe condominio'
type='text'
/>

<Input
height='50px'
backgroundColor='gray.800'
focusBorderColor='purple.500'
borderRadius='sm'
marginTop={2}
placeholder='Informe material coletado'
type='text'
/>

<Input
height='50px'
backgroundColor='gray.800'
focusBorderColor='purple.500'
borderRadius='sm'
marginTop={2}
placeholder='Informe quantidade coletado'
type='text'
/>

                      </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="ghost">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Flex>

        </Grid>

    )
}

export default Dashboard;