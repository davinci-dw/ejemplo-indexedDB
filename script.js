const db = new Dexie("UsersDB"); //creo instancia de Dexie

const dbVersion = db.version(1).stores({ //creo mi entidad
    logs: "++id,date"
});

db.logs
    .add({date: new Date().getTime()})
    .then(() => db.logs
        .where('date')
        .below(new Date().getTime())
        .toArray()
    )
    .then(accesos => {
        console.log("accesos: ", accesos);
    })