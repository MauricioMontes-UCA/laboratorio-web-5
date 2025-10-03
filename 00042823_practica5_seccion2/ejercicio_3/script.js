const estanteria = {
    libros: [
        {
            nombre: "El caballero oscuro",
            autor: "Frank Miller",
            leido: false
        },
        {
            nombre: "El mundo amarillo",
            autor: "Albert Espinosa",
            leido: false
        },
        {
            nombre: "Harry Potter",
            autor: "J.K. Rowling",
            leido: false
        },
        {
            nombre: "El ingenioso hidalgo Don Quijote de la Mancha",
            autor: "Miguel de Cervantes",
            leido: false
        },
        {
            nombre: "Berserk",
            autor: "Kentaro Miura",
            leido: true
        },
        {
            nombre: "Iliada",
            autor: "Homero",
            leido: false
        }
    ],

    log() {
        const { libros } = this;
        let result = "";

        for (const libro of libros) {
            const prefix = libro.leido ? 'Ya has' : 'Aún no has';
            result = `${result}\n${prefix} leído ${libro.nombre} de ${libro.autor}`
        }
        console.log(result)
    },

    sugest() {
        const notRead = this.libros.filter(libro => !libro.leido)
        const randomIndex = Math.floor(notRead.length * Math.random())
        const randomBook = notRead[randomIndex]

        console.log(`Te sugiero leer ${randomBook} de ${randomBook.autor}`)
    }
}



