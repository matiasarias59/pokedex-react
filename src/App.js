import "./styles/scss/main.scss";
import HomeScreen from "./components/HomeScreen.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeListContainer from "./components/PokeListContainer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PokemonDetailContainer from "./components/PokemonDetailContainer";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Routes>
          {/* <Route path='/' element={<HomeScreen/>} /> */}
          <Route path='/menu' element={<Menu />} />
          <Route path='/type/:typeId' element={<PokeListContainer />} />
          <Route path='/search' element={<PokeListContainer />} />
          <Route path='/pokemon/:pokeId' element={<PokemonDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;