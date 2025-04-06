import iconGitHub from "./assets/icone-github.svg";
import './App.css'
import { CiSearch } from "react-icons/ci";
import NotFoundProfile from "./components/notFound";
import Profile from "./components/Profile";
import axios from "axios";
import { useState } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [resultSearch, setResult] = useState({});
  const [showProfile, setProfile] = useState("");

  const handleChange = (ev) => {
    setInputSearch(ev.target.value);
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    try {
      const response = await axios.get(`https://api.github.com/users/${inputSearch}`);
    
      setResult(response.data);
      setProfile(true);
    } catch {
      setProfile(false);
    }
  }

  return (
   <div className="container">
      <div className="title-container">
        <img src={iconGitHub} alt="icone do github" />
        <h1>Perfil</h1>
        <h2>GitHub</h2>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="profile" id="profile" placeholder="Digite um usuário do Github" value={inputSearch} onChange={handleChange}/>
          <button id="btn-profile">
          <CiSearch color="#fff" size={20}/>
          </button>
        </div>
      </form>
      {showProfile === true && (
        <Profile data={resultSearch}/>
      )}

      {showProfile === false && (
        <NotFoundProfile/>
      )}
   </div>
  )
}

export default App
