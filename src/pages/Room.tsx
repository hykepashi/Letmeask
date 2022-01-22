import { FormEvent, useState } from "react";
import { ButtonHTMLAttributes } from "react";
import { useParams } from "react-router";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";

import { ref, push } from "firebase/database";
import { database } from "../services/firebase";
import "../styles/room.scss";

type roomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const [newQuestion, setNewQuestion] = useState("");
  const params = useParams<roomParams>();
  const roomId = params.id;

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("VocÊ não está logado");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await push(ref(database, `rooms/${roomId}/questions`), question);

    console.log(question);
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />

          {<RoomCode code={roomId} />}
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala de Perguntas</h1>
          <span>4 perguntas </span>
        </div>

        <form action="" onSubmit={handleSendQuestion}>
          <textarea
            placeholder="faça sua pergunta"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            <span>
              para enviar uma pergunta, <button>faça seu login</button>
            </span>

            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
