import './navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-xxl navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto mx-xxl-0" href="#homeSection">RENATO NK</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#homeSection">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sobremimSection">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projetosSection">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#habilidadesSection">Habilidades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experienciaSection">Experiência</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contatoSection">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}