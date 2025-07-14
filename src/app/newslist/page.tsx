// ✅ 修正後
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Newsitem from "../components/Newsitem"; 

export default function NewsPage() {
  return (
    <main>
      <Header />
      <Newsitem />
      <Footer />
    </main>
  );
}