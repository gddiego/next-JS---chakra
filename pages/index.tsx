// import Head from 'next/head'

import { Button, Flex, Grid, Heading,Input,Link,useToast} from "@chakra-ui/core";

export default function Home() {
  const toast = useToast();
  
  return (
       <Grid as = 'main'
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
       backgroundColor='green.400'
       >

<Flex  gridArea='logo' flexDir='column' alignItems='flex-start'>
  <img src="/pg" alt='e-coletando' />
  <Heading  size='2xl' lineHeight='shorter' marginTop={16}> 
  Smashlog
</Heading>
<Heading  size='2xl' lineHeight='shorter' marginTop={16}> 
  Faça seu login na plataforma de Coleta comunitaria
</Heading>

</Flex >

<Flex gridArea='form'
height='100%'
backgroundColor='green.100'
borderRadius='md'
flexDir='column'
alignItems='stretch'
padding={16}
>

<Link 

alignSelf='flex-start'
marginTop={2}
fontSize='sm'
color='purple.600'
fontWeight='bold'
_hover={{color:'purple.500'}}
href='components/login/login'
>
Login

</Link>


<Link 

alignSelf='flex-end'
marginTop={-5}
fontSize='sm'
color='purple.600'
fontWeight='bold'
_hover={{color:'purple.500'}}
href='components/singn/singn'
>
Cadastre-se

</Link>

</Flex>
       </Grid>
      )
}
