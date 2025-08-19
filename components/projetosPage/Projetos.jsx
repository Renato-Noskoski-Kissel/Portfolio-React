import projetoPython from "../../src/assets/pythonPicture.png"
import projetoJavaScript from "../../src/assets/javaScriptimg.png"
import projetoAleatorio from "../../src/assets/aleatorioCode.png"
import ProjetoItens from "./ProjetoItens"
import './projetos.css'


const acessoriosProjetos = [
    {
        imgUrl: projetoPython,
        titulo: 'Interface Gráfica Usando Tkinter',
        link: "https://github.com/Renato-Noskoski-Kissel/Projeto-POO",
        tags: ["Python", "POO", "Tkinter"],
        id: 0
    },
    {
        imgUrl: projetoJavaScript,
        titulo: 'Portfolio Website',
        link: "https://github.com/Renato-Noskoski-Kissel/Portfolio-React",
        tags: ["JavaScript", "React", "UI/UX"],
        id: 1
    },
    {
        imgUrl: projetoAleatorio,
        titulo: 'Desenvolver',
        link: "https://github.com/Renato-Noskoski-Kissel",
        tags: ["C++", "GitHub", "Programação"],
        id: 2
    }
]

export default function Projetos() {
    return (
        <section id="projetosSection" className="container-fluid">
            <h1 id="tituloProjetos">Meus Projetos</h1>
            <div id="rowProject" className="row row-cols-1 row-cols-xl-3 g-4">
                {acessoriosProjetos.map((acessorio) => (
                    <div key={acessorio.id} className="col">
                        <div className="retanguloProjetos">
                            <ProjetoItens
                                imgUrl={acessorio.imgUrl}
                                titulo={acessorio.titulo}
                                link={acessorio.link}
                                tags={acessorio.tags}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}