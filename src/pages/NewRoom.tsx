import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="alteração simbolizando perguntas e respostas"
        />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
            <p>
              Quer entrar em uma sala existente?{" "}
              <Link to="/">Clique aqui!</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}