import { BrowserRouter, Route, Routes } from "react-router-dom"
import s from './App.module.css'
import Container from './components/Container/Container'
import Header from "./components/Header/Header"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import FlightInformation from "./pages/FlightInformation/FlightInformation"
import Flights from "./pages/Flights/Flights"
import Home from "./pages/Home/Home"


function App() {
  return (
    <div className={s.app}>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/flights/:flightCode" element={<FlightInformation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
