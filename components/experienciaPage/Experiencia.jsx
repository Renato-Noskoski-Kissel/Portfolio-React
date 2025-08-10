import ExperienciaItem from "./ExperienciaItem";
import './experiencia.css'


export default function Experiencia() {
    return (
        <section id="experienciaSection" className="container-fluid p-5">
            <h1 className="text-center mb-5 colorBlue">Minhas Experiências</h1>
            <div id="containerExperienciaItem">
                <ExperienciaItem titulo="Secretário-Geral | Grêmio Estudantil " tempo="Período: 02/2024 - 12/2024"><p className="texto">Muito antes de organizar componentes em React, eu organizava pautas, pessoas e projetos no Grêmio Estudantil. Essa experiência foi meu laboratório para desenvolver algumas das habilidades humanas mais importantes para qualquer carreira.</p>
                    <p className="texto">Mais do que apenas registrar reuniões, meu papel foi o de construir pontes de comunicação e garantir que o planejamento se transformasse em realidade para os estudantes. Foi onde aprendi que a melhor interface é a comunicação clara e que o melhor "código" para resolver problemas entre pessoas é a empatia. Uma base fundamental para a vida adulta e, principalmente, para trabalhar em equipe.</p></ExperienciaItem>
                <ExperienciaItem titulo="Trainee | Pixel" tempo="Período: 03/2025 - 08/2025"><p className="texto">Foi aqui que o console.log("Hello, World!") virou coisa séria. Na trilha de desenvolvimento da Pixel, mergulhei de cabeça no ecossistema frontend, transformando layouts estáticos em experiências vivas e interativas.</p>
                    <p className="texto">Minha jornada passou por solidificar a base com HTML e CSS (sim, eu centralizei muitas divs), ganhou vida com a manipulação do DOM usando JavaScript, e finalmente "virou a chave" com React. Foi onde aprendi, na prática, a pensar em componentes, gerenciar estados e construir interfaces que não apenas funcionam, mas que são um prazer de usar.</p></ExperienciaItem>
            </div>
        </section>
    )
}