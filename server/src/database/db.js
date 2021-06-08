const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
db.serialize(() => {
    // 1 criar uma tabela com comandos sql
    db.run(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT,
            text TEXT,
            image TEXT,
            published_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `)

    // 2 inserir dados na tabela
    // const query = `
    //     INSERT INTO posts (
    //         title,
    //         description,
    //         text,
    //         image
    //     ) VALUES (?,?,?,?)
    // `

    // const values = [
    //     "Nova unidade Simetra",
    //     "Para sua comodidade nós inauguramos mais uma unidade...",
    //     "O laboratório Simetra traz mais uma novidade para sua clínica: novos exames de bioquímica básica em até 6 horas. Ampliamos nossa estrtura para melhor atende-lo. O Simetra está em constante investimento para atender você cada vez melhor. \n\nNovos exames: \n\n- SÓDIO\n - POTÁSSIO\n - BILIRRUBINAS TOTAIS E FRAÇÕES\n - CREATININA URINÁRIA\n - AMILASE",
    //     "https://s3-alpha-sig.figma.com/img/c450/99ed/d6a7f0ad5f8a6a14751668239da8172e?Expires=1623628800&Signature=fwvOLx5VlGqTlPE8JI3XMM5y44to4ZjCo3-i7p-GBafBJIcAIi25LpMFNJw9-MRSTMxMBcEqYoBoZMt1-PfFFdJaqa1nQ7repok5u4k7Z8iTgonMn0K5o6zC1MFhrtSHgOyEi2wpwlgki4nhsvmwuguDb1PienfDXkr8cgz32pgxKus1pITdyvCGxhYcPc42oZQTaayS4dYnVfMpx2F3fW7zaak1k5pRIO2vz7Yl1vBPTrOABWezkle-IahtWlTLw3f1XVSTmcLGkza8YyCXtJjHHzA~5ey2SFsC98vmSA0NiSElcI6caX7MNCLohJG962pzseA2P0cEjdr7qvAE1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    // ]
    // const values = [
    //     "Nova unidade Simetra",
    //     "Para sua comodidade nós inauguramos mais uma unidade...",
    //     "O laboratório Simetra traz mais uma novidade para sua clínica: novos exames de bioquímica básica em até 6 horas. Ampliamos nossa estrtura para melhor atende-lo. O Simetra está em constante investimento para atender você cada vez melhor. \n\nNovos exames: \n\n- SÓDIO\n - POTÁSSIO\n - BILIRRUBINAS TOTAIS E FRAÇÕES\n - CREATININA URINÁRIA\n - AMILASE",
    //     "https://s3-alpha-sig.figma.com/img/7e37/8c02/4afed341d5d481f767322a2377d823c5?Expires=1623628800&Signature=YtY9zCWZCWHB6NYbf9CpJ1fBqjweyp6guNyHh9M5ff8b9RhRjkHYcZI3wMWbqsl0J21jJCcdsdMjRflZNgd8NvbTPnvwl8f~glA1XA6j51WJfzAjSlUEt4xuRQoXvfmNyvLFyNqhPBTlA1PWpfWUUnHqqleIcuGjovvVetUnjKZg3bqQmKWBlEHlAIGKura~-0rZuVN6qZ7DdamwPaoIgpDR~ip96~qfHjtHxjFv18iYfjHJ9NMeAd97f5v9DfShZ3VNxBJAetTyruJPgzR1lEMqzjTE7DRbjrYKllHqgLdFgfZjPHFeXnwOffL09gr7gCza8lg5KtMh0~rL251JPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    // ]
    // const values = [
    //     "Nova unidade Simetra",
    //     "Para sua comodidade nós inauguramos mais uma unidade...",
    //     "O laboratório Simetra traz mais uma novidade para sua clínica: novos exames de bioquímica básica em até 6 horas. Ampliamos nossa estrtura para melhor atende-lo. O Simetra está em constante investimento para atender você cada vez melhor. \n\nNovos exames: \n\n- SÓDIO\n - POTÁSSIO\n - BILIRRUBINAS TOTAIS E FRAÇÕES\n - CREATININA URINÁRIA\n - AMILASE",
    //     "https://s3-alpha-sig.figma.com/img/f650/73ac/2e9b1d6a67a991bf06ef5235e45e81e4?Expires=1623628800&Signature=CTXAVTX83nXSQbMnO5527C8q7SGNMFXR~7gE~UQD3-uf4tmSxsS-8Uk0M0WPsnYBzMuT4OZUEoC0trgsz9ABp-juHO21PhsLniod9bbCPczVI1jv4dNUBZ~ERkkntVeGBnOx9m3kZv8EIcP9PH4AK-rUAEARAh8Qb3c4EvMvWWB-ecJJX-Ak6ixeUHAZEDKHVpYXVUs1s0zR8ZCvR0nSGIzERtPRxKeatfQmaHcDgqXIEOJIdtFE7RrCDz9jnlZeQczyDcH2Zny5U6RrwpOm5xcdPITSvKhU1Z6pOUhZeVx0vCkr4A9wiXIzssdvmmy4SMvoilqmVkzmgsqQl29OBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // 3 consultar os dados da tabela
    db.all(`SELECT * FROM posts`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

    // 4 deletar um dado da tabela
    // db.run(`DELETE FROM posts WHERE id = ?`, [4], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })


})