import "./App.css";
import SideNav from "./components/SideNav";
import ScrollDiv from "./components/ScrollDiv";
import StaticDiv from "./components/StaticDiv";

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <div className="container">
        <div className="row">
          <ScrollDiv />
          <StaticDiv />
        </div>
        <div className="row2">
          <ScrollDiv />
          <StaticDiv />
        </div>
      </div>
    </div>
  );
}
