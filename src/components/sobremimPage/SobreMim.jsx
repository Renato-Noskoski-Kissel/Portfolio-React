import imgSobreMim from '../../assets/sobreMimImagem.png'
import './sobremim.css'

export default function SobreMim() {
    return (
        <section className="container-fluid" id="sobremimSection">
            <h1 className="text-center align-items-center justify-content-center">Sobre mim</h1>
            <div className="text-center"><img id="imgSobreMim" className="img-fluid mx-3 my-3" src={imgSobreMim} alt="Ilustração do texto sobre mim"></img></div>
            <div id="textoSobreMim">
                <p>Minha trajetória é uma jornada guiada pela paixão por desafios lógicos e pela motivação em gerar um impacto positivo na vida das pessoas. Natural de Centenário, no interior do Rio Grande do Sul, fiz a transição para Florianópolis com o objetivo de aprofundar meus conhecimentos e atuar no dinâmico campo da tecnologia.
                    Desde cedo, a matemática me fascinava com sua estrutura e capacidade de resolver problemas complexos. Essa base de raciocínio lógico e analítico foi o que me direcionou para a Ciência da Computação, onde encontrei a oportunidade de transformar abstrações em soluções tangíveis. Acredito que a programação não se resume a linhas de código, mas sim a uma ferramenta poderosa para criar experiências que simplifiquem e melhorem o cotidiano.
                    Atualmente, como estudante do segundo semestre, tenho me dedicado intensamente a disciplinas de lógica e programação.</p>
                <p>Além do universo digital, busco equilíbrio por meio de esportes, o que me ajuda a manter o foco e a disciplina. Também valorizo as conexões humanas, seja em uma boa conversa ou em um café. Acredito firmemente que a colaboração e a troca de ideias são pilares essenciais para o desenvolvimento de soluções inovadoras.
                    Este portfólio é um reflexo do meu percurso e das minhas aspirações. Estou sempre aberto a novas conexões e a colaborar em projetos desafiadores que busquem resolver problemas de forma criativa. Se você compartilha desse interesse, convido-o a entrar em contato.</p>
            </div>
        </section >
    )
}