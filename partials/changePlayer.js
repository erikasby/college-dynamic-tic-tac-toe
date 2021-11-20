export default function changePlayer(player) {
  if (player === "X") {
    return (player = "O");
  } else return (player = "X");
}
