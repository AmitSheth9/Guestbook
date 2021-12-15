import Guestform from "./components/Guestform";
import Header from "./views/Header/Header";
import { EntryProvider } from "./context/EntryContext";
import { GuestProvider } from "./context/GuestContext";
export default function App() {
  return (
  <div>
  
      <Guestform/>
      <Header/>
      
      </div>
  )
}
