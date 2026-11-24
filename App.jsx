import GameCard from './GameCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Мои любимые игры 🎮</h1>

      <div className="cards">
        <GameCard name="Minecraft" emoji="⛏️" rating={10} />
        <GameCard name="Roblox" emoji="🎮" rating={9} />
        <GameCard name="Genshin Impact" emoji="✨" rating={10} />
      </div>
    </div>
  );
}

export default App;