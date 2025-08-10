export default function ProjetoItens({ imgUrl, titulo, link, tags }) {
    return (
        <a
            href={link}
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <img
                src={imgUrl}
                alt="Projeto Ilustração"
                className="projetoImg"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{titulo}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {tags.map((item, index) => (
                        <span key={tags[index]} className="inline-block px-2 py-1 border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}