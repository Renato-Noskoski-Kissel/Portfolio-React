import imagemRenato from '../../src/assets/home_renato.jpeg'
import linkedin from '../../src/assets/linkedin.png'
import githubHome from '../../src/assets/githubHome.png'
import './home.css'

export default function Home() {
    return (
        <section id="homeSection" className="container-fluid px-5">
            <div className="row align-items-stretch">
                <div className="col-12 col-lg-8 d-flex flex-column align-items-center justify-content-center text-center pb-4">
                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                        <h1>Olá, sou Renato Kissel. Estudante de computação, movido por pessoas e código.</h1>
                        <p>Minha paixão pela matemática e o desejo genuíno de ajudar as pessoas me trouxeram para a Ciência da Computação. Já no segundo semestre, mergulho em desafios de lógica e programação, buscando transformar problemas complexos em soluções digitais simples e intuitivas. Como treinee na Pixel Jr., aplico o que aprendo na prática, todos os dias. Vamos conectar nossas ideias e construir algo que inspire?</p>
                    </div>
                    <div id="icones" className=" d-flex align-items-center justify-content-end text-center mt-auto">
                        <a href="https://www.linkedin.com/in/renato-noskoski-kissel-812769226" className="px-3"><img className="iconn" src={linkedin}></img></a>
                        <a href="https://github.com/Renato-Noskoski-Kissel" className="px-3"><img className="iconn" src={githubHome}></img></a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center"><img id="imgDoHome" src={imagemRenato} alt="Foto de Renato Kissel"></img></div>
            </div>
        </section>
    )
}