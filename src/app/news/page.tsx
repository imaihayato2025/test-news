import Header from "../components/Header";
import Newscontent from "../components/Newscontent"; 

export default function Newslist() { // ← 別名にしよう！
  return (
    <div>
      <Header />
      <Newscontent />
    </div>
  );
}