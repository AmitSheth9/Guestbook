import Guestform from "./components/Form/Guestform";
import Header from "./views/Header/Header";
import { EntryProvider } from "./context/EntryContext";
import { GuestProvider } from "./context/GuestContext";
import DisplayEntries from "./components/Display/DisplayEntries";
import Home from "./views/Home/Home";
import './App.css'

export default function App() {
  return (
  <div>
    <Home/>
  </div>
  )
}
