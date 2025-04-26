import { Link } from "react-router-dom";


function Home() {
    return (
      <div >
        <h1>Bem-vindo a página Home</h1> <br />
        <span> Nossa primeira aplicação em React</span> <br /> <br />

        <Link to="/sobre">Sobre  </Link> <br />
      </div>
    );
  }
  
  export default Home;
  