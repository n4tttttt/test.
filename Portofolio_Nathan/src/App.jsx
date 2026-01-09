import logo from './logo.svg';
import icon from './foto.jpg'
import gmail from './gmail.png'
import whatsapp from './whatsapp.webp'
import './App.css';
function App() {
  return (
    <>
    <div className="App">
      
      <div className="content" id="titlecard">
        <img src={icon} alt="foto" id="foto"></img>
        <p id="intro">Halo, Namaku</p>
        <h1 className="title">Nathan Leander</h1>
        <h2 className="title">Programmer Game</h2>
      </div>
      <div className="content" id="titlecard2">
        <div className="text last"><b>About Me:</b> Seorang Siswa SMK Tri Ratna yang ingin membuat game yang seru untuk semuanya</div>
      </div>
      <div className="box">
        <div id="content1" className="content">
          <h1>Keterampilan</h1>
          <div className="text">Coding:</div>
          <div className="text">1. Lua (Intermediate)</div>
          <div className="text">2. Python (Intermediate)</div>
          <div className="text">3. JavaScript (Intermediate)</div>
          <div className="text last">4. HTML (Beginner)</div>
        </div>
        <div id="content2" className="content">
          <h1>Karya dan Proyek</h1>
          <a className="text last" href="https://www.roblox.com/games/97414891283742">- Classic Battlegrounds (Roblox)</a>
        </div>
        <div id="content3" className="content">
          <h1>Pendidikan</h1>
          <div className="text last">- SMK Tri Ratna (2025 - Sekarang)</div>
        </div>
      </div>
      <div className="content" id="titlecard3">
        <div className="sos">
          <img src={gmail} alt="gmail" className="icon"></img>
          <div className="texts">nathanl34n@gmail.com</div>
        </div>
        <div className="sos">
          <img src={whatsapp} alt="gmail" className="icon"></img>
          <div className="texts">+62 858-8209-5965</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
