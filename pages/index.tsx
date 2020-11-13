// import Head from 'next/head'

import { Button, Heading,useToast} from "@chakra-ui/core";
export default function Home() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Conta criada com sucesso.",
          description: "Seja Bem-vindo a aplicação",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Next js
    </Button>
      )
}
