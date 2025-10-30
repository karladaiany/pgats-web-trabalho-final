import { faker } from '@faker-js/faker'

export function geradorDeDados() {
    const opcoesTitulo = ['Mr', 'Mrs']
    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const dataNascimento = faker.date.birthdate({ min: 4, max: 125, mode: 'age' })
    const country = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']

    return {
        titulo: faker.helpers.arrayElement(opcoesTitulo),
        nome: nome,
        sobrenome: sobrenome,
        nomeCompleto: `${nome} ${sobrenome}`,
        email: `${nome.toLowerCase()}.${sobrenome.toLowerCase()}${Date.now()}@teste.com`,
        senha: faker.internet.password({ length: 10 }),
        diaNascimento: dataNascimento.getDate().toString(),
        mesNascimento: dataNascimento.toLocaleString('en-US', { month: 'long' }),
        anoNascimento: dataNascimento.getFullYear().toString(),
        empresa: faker.company.name(),
        endereco1: faker.location.streetAddress(),
        endereco2: faker.location.secondaryAddress(),
        pais: faker.helpers.arrayElement(country),
        estado: faker.location.state(),
        cidade: faker.location.city(),
        cep: faker.location.zipCode(),
        numeroCelular: faker.phone.number('+55 9#########')
    }
}