import { useNavigate } from "react-router";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useContext(AuthContext);

  console.log({});

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/rooms/new");
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="" />
            crie sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="digite o codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
function initialState(initialState: any): [any, any] {
  throw new Error("Function not implemented.");
}
