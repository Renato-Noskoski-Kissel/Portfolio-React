import './habilidades.css'
import HardSkills from './HardSkills'
import SoftSkills from './SoftSkills'
import htmlImg from '../../assets/habilidadesLogo/html.png'
import jSImg from '../../assets/habilidadesLogo/js.png'
import cSSImg from '../../assets/habilidadesLogo/css.png'
import reactImg from '../../assets/habilidadesLogo/react.png'
import bootstrapImg from '../../assets/habilidadesLogo/bootstrap.png'
import pythonImg from '../../assets/habilidadesLogo/python.png'
import vHDLImg from '../../assets/habilidadesLogo/cpu.png'
import gitHubImg from '../../assets/habilidadesLogo/github.png'
import figmaImg from '../../assets/habilidadesLogo/figma.png'


export default function Habilidades() {
    return (
        <section id="habilidadesSection">
            <div className='container'>
                <h1 className="text-center">Habilidades</h1>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-5">
                        <div className="skills-column">
                            <h2 className="text-center">Hard Skills</h2>
                            <div className="d-flex flex-wrap justify-content-around">
                                <div className="text-center p-2">
                                    <h4>Front-end</h4>
                                    <HardSkills imgUrl={htmlImg} skill='HTML' porcentagem={90} />
                                    <HardSkills imgUrl={cSSImg} skill='CSS' porcentagem={80} />
                                    <HardSkills imgUrl={jSImg} skill='JS' porcentagem={70} />
                                    <HardSkills imgUrl={bootstrapImg} skill='BOOTSTRAP' porcentagem={95} />
                                    <HardSkills imgUrl={reactImg} skill='REACT' porcentagem={65} />
                                </div>
                                <div className="text-center p-2">
                                    <h4>Back-end</h4>
                                    <HardSkills imgUrl={pythonImg} skill='PYTHON' porcentagem={80} />
                                </div>
                                <div className="text-center p-2">
                                    <h4>Ferramentas</h4>
                                    <HardSkills imgUrl={gitHubImg} skill='GIT HUB' porcentagem={60} />
                                    <HardSkills imgUrl={figmaImg} skill='FIGMA' porcentagem={70} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skills-column">
                            <h2 className="softTitulo text-center">Soft Skills</h2>
                            <div className="d-flex flex-column align-itens-center">
                                <SoftSkills skill='TRABALHO EM EQUIPE' porcentagem={95} />
                                <SoftSkills skill='RESOLUÇÃO DE PROBLEMAS' porcentagem={80} />
                                <SoftSkills skill='COMUNICAÇÃO' porcentagem={95} />
                                <SoftSkills skill='ORGANIZAÇÃO' porcentagem={85} />
                                <SoftSkills skill='PROATIVIDADE' porcentagem={85} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}