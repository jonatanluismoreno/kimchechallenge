# Desafío para Software Engineers

Nombre postulante: Jonatan Moreno
Link a la app en producción: https://kimchechallenge-sigma.vercel.app/

## Herramientas elegidas

[React](https://es.reactjs.org/) - Framework de JavaScript
[GraphQL](https://graphql.org/) - GraphQL
[Vercel](https://www.vercel.com/) - Deploy
[Styled components](https://styled-components.com) - Estilos
[Eslint](https://eslint.org/) - Linting
[Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb) - Linting (Airbnb)
[ApolloClient](https://www.apollographql.com/docs/react/) - Apollo Client

## Aclaraciones

- Recurro a los datos en el custom hook useFilteredDate y es ahí mismo donde los filtros se aplican, conforme a como se desee mostrar, ya sea filtrado por país, o por lenguaje.
- Una de las decisiones que tomé fue elegir filtrar los paises que comenzaban por el contenido del input (startsWith method) para reducir la cantidad de paises visibles y que así sea más fácil encontrar el país que se quiere. Debo aclarar que en las imágenes proporcionadas no se puede diferenciar si se usa ese método o, por ejemplo, el método .includes().
- La capacidad de ordenarlo por Continente o Lenguaje no se ejecutan juntos, evitando así que se filtren datos innecesarios.
- Implementé un custom hook para utilizar el [LocalStorage](https://javascript.info/localstorage) y así guardar tanto el texto previamente ingresado en el input.

## Respuesta a la pregunta formulada
