import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string | undefined;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    const code = props.code;
    console.log(code);

    navigator.clipboard.writeText("" + props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
