export default function ({ children, titulo, tempo }) {
    return (
        <div className="text-center align-items-center">
            <h2 className="">{titulo}</h2>
            <h6 className="colorBlue">{tempo}</h6>
            <div id="descricao">{children}</div>
        </div>
    )
}