function ListeCours() {
    const taches = [
        { id: 1, titre: "Yoga" },
        { id: 2, titre: "CrossFit" },
        { id: 3, titre: "Musculation" }
    ];

    return (
        <div>
            <h1>Voici la liste des cours disponibles :</h1>
            <ul>
                {taches.map((tache) => (
                    <li key={tache.id}>{tache.titre}</li>
                ))}
            </ul>
        </div>
    );
    ;
}

export default ListeCours;