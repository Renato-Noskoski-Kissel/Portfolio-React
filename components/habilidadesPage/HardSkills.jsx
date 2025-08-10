export default function HardSkills({ imgUrl, skill, porcentagem }) {
    return (
        <div className="skill-container text-center">
            <img className="iconImg" src={imgUrl}></img>
            <h5>{skill}</h5>
            <div className="progress" role="progressbar" aria-label={skill} aria-valuenow={porcentagem} aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: `${porcentagem}%` }}></div>
            </div>
        </div>
    )
}