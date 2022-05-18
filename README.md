# Desafío para Software Engineers

- Nombre postulante: Jonatan Moreno
- Link a la app en producción: https://kimchechallenge-sigma.vercel.app/

## Herramientas elegidas

- [React](https://es.reactjs.org/) - Framework de JavaScript
- [GraphQL](https://graphql.org/) - GraphQL
- [Vercel](https://www.vercel.com/) - Deploy
- [Styled components](https://styled-components.com) - Estilos
- [Eslint](https://eslint.org/) - Linting
- [ApolloClient](https://www.apollographql.com/docs/react/) - Apollo Client

## Aclaraciones

- Recurro a los datos en el custom hook useFilteredDate y es ahí mismo donde los filtros se aplican, conforme a como se desee mostrar, ya sea filtrado por país, o por lenguaje.
- Una de las decisiones que tomé fue elegir filtrar los paises que comenzaban por el contenido del input (startsWith method) para reducir la cantidad de paises visibles y que así sea más fácil encontrar el país que se quiere. Debo aclarar que en las imágenes proporcionadas no se puede diferenciar si se usa ese método o, por ejemplo, el método .includes().
- La capacidad de ordenarlo por Continente o Lenguaje no se ejecutan juntos, evitando así que se filtren datos innecesarios.
- Implementé un custom hook para utilizar el [LocalStorage](https://javascript.info/localstorage) y así guardar el texto previamente ingresado en el input.

## Respuesta a la pregunta formulada

En referencia a la pregunta formulada, separemos el problema a partir de los datos brindados;

- 90 millones de filas en una tabla de asistencia. Asumiré que esa tabla contiene datos relacionados, (o se compara a datos relacionados), sobre el desempeño del niño en cuestión, historial académico, etc.
- Esta tabla, y el resto de las tablas, están una BDD en MySQL.
- Al pasar asistencia, la mayoría de los usuarios experimentan un tiempo de uso de 10 segundos (el 95% de los usuarios; p95)

- En base a la cantidad de filas, es posible que existan asistencias que podrían agruparse por algún tipo de relación, como por ejemplo, por franjas horarias, asignatura o días de la semana. Estas podrían conformar tablas independientes, evitando recorrer datos innecesarios.
- Teniendo en cuenta la cantidad de datos relacionados con el niño (y con el resto de niños), cabría la posibilidad de reducir el tiempo que toma el usuario en la aplicación si se utiliza una database NoSQL, pudiendo así lidiar con los datos relacionados con los niños en paralelo, (abriendo la posibilidad a trabajar con big data), debido a la optimización que representa una BDD NoSQL (como MongoDB) por sobre una SQL.
- Como el tiempo de uso no podría ser 0, también evaluaría opciones tales como:

* Buscar un algoritmo de búsqueda qué, en conformidad con los datos almacenados, permita reducir el tiempo de uso.
* Debbugear la lógica del backend, para ver si hay algún error en la base de datos o datos innecesarios y/o repetidos.
* Tener otra tabla en paralelo que contenga la información como copia de seguridad, utilizando la primera tabla para la actualización de datos.
