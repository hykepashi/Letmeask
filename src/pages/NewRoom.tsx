import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

//firebase
import { database } from "../services/firebase";
import { push, ref } from "firebase/database";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = ref(database, "/rooms/");

    const room = await push(roomRef, {
      title: newRoom,
      authorId: user?.id,
    });

    navigate(`/rooms/${room.key}`);
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
          <h2>Criar uma sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => {
                setNewRoom(event.target.value);
              }}
              value={newRoom}
            />
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
