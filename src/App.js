import "./styles/scss/main.scss";
//import HomeScreen from "./components/HomeScreen.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import PokeListContainer from "./components/PokeListContainer";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import PokemonDetailContainer from "./components/PokemonDetailContainer";
import { AppProvider } from "./context/AppContext";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Header/>
        <SearchBar />
        <Routes>
          {/* <Route path='/' element={<HomeScreen/>} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/type/:typeId' element={<PokeListContainer />} />
          <Route path='/search' element={<PokeListContainer />} />
          <Route path='/pokemon/:pokeId' element={<PokemonDetailContainer />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;