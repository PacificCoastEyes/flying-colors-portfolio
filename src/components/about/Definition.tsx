interface DefinitionProps {
    word: string;
    pronunciation: string;
    entries: string[];
}

function Definition({ word, pronunciation, entries }: DefinitionProps) {
    return (
        <div className="definition">
            <div className="d-flex align-items-center">
                <h3 className="definition-word">{word}</h3>
                <span className="ms-2">{pronunciation}</span>
            </div>
            <ol>
                {entries.map((entry, idx) => (
                    <li key={idx}>{entry}</li>
                ))}
            </ol>
        </div>
    );
}

export default Definition;
