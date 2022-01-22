import { useState } from "react";
import { useNavigate } from "react-router";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { ref, get } from "firebase/database";

import { database } from "../services/firebase";

import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";
import { FormEvent } from "react";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
    }

    const roomRef = await get(ref(database, `rooms/${roomCode}`));

    if (!roomRef.exists()) {
      alert("room does not exists");
    } else {
      navigate(`rooms/${roomCode}`);
    }
    console.log(user);
    // try {
    //   roomRef.key;
    // } catch {}
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
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="digite o codigo da sala"
              onChange={(event) => {
                setRoomCode(event.target.value);
                console.log(event.target.value);
              }}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
