
export default function SoftSkills({ skill, porcentagem }) {
    return (
        <div className='skill-container text-center'>
            <h5>{skill}</h5>
            <div className="progress mx-auto" role="progressbar" aria-label={skill} aria-valuenow={porcentagem} aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: `${porcentagem}%` }}></div>
            </div>
        </div>
    )
}