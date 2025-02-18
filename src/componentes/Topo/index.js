import React from 'react';
import { Link } from 'react-router-dom';

import './estilo.css';

const Topo = () => {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-logo-box" to="/">
          <img className="topo-logo" src="assets/park.png" alt="logo estacionamento" title="logo estacionamento"/>
          <p className="topo-nome-empresa">Lorem</p>
        </Link>

        <nav className="topo-links">
          <Link className="topo-link" to="/">Home</Link>
          <Link className="topo-link" to="/contato">Contato</Link>
          <Link className="topo-link" to="/CadastroUsuario">Cadastre-se</Link>
          <Link className="topo-link" to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Topo;