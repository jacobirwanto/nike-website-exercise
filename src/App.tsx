import "./App.css";
import { SHOE_LIST } from "./components/Constant";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
