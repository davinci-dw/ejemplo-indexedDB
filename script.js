const db = new Dexie("UsersDB"); //creo instancia de Dexie

const dbVersion = db.version(1).stores({ //creo mi entidad
    logs: "++id,date"
});

const mostrarLogs = (logs) => {
    const logsContainer = document.getElementById("logsContainer");
    logs.forEach(element => {
        console.log(element)
        logsContainer.innerHTML += `<li>${new Date(element.date)}</li>`;
    });
}

db.logs
    .add({date: new Date().getTime()})
    .then(() => db.logs
        .where('date')
        .below(new Date().getTime())
        .toArray()
    )
    .then(accesos => {
        mostrarLogs(accesos);
    })