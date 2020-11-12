import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-coletando</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <form>

<h3>E-coletando Sistema de Coleta Comunitario</h3>

<label for="username"><h3>Usuario</h3></label>
<input type="text" id="username" name="username" placeholder="Entre com seu usuario.." autocomplete="off" required />

<label for="password"><h3>Senha</h3></label>
<input type="password" id="password" name="password" placeholder="Entre com sua senha.." autocomplete="off" required />

<a class="forgot" href="#">Recuperar Senha?</a>
<a class="register" href="#">Registrar</a>

<input type="submit" name="submit" value="Entrar" />
</form>
</div>
  )
}
