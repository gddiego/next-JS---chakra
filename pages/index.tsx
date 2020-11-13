// import Head from 'next/head'

import { Button, Flex, Grid, Heading,Input,Link,useToast} from "@chakra-ui/core";


export default function Home() {
  const toast = useToast();
  return (
       <Grid as='main'
       height='100vh'
       templateColumns='1fr 480px 480px 1fr'
       templateRows='1fr 480px 1fr'
       templateAreas="
       '. . . .'
       '. logo form .'
       '. . . .'
       "
       justifyContent='center'
       alignItems='center'
       >
<Flex  gridArea='logo' flexDir='column' alignItems='flex-start'>
  <img src="/coletando.svg" alt='e-coletando' />

<Heading size='2xl' lineHeight='shorter' marginTop={16}> 
  Faça seu login na plataforma de Coleta
</Heading>

</Flex >

<Flex gridArea='form'
height='100%'
backgroundColor='gray.700'
borderRadius='md'
flexDir='column'
alignItems='stretch'
padding={16}
>
<Input
height='50px'
backgroundColor='gray.800'
focusBorderColor='purple.500'
borderRadius='sm'
placeholder='Email'
/>

<Input
height='50px'
backgroundColor='gray.800'
focusBorderColor='purple.500'
borderRadius='sm'
marginTop={2}
placeholder='Senha'
/>

<Link 
alignSelf='flex-start'
marginTop={2}
fontSize='sm'
color='purple.600'
fontWeight='bold'
_hover={{color:'purple.500'}}
>
Esqueci minha senha

</Link>

<Button
marginTop={6}
backgroundColor='purple.500'
height='50px'
borderRadius='sm'
_hover={{background: 'purple.600'}}


>
  ENTRAR 
</Button>
</Flex>
       </Grid>
      )
}
