# laboratorio-web-5

> ¿Qué significa className en React? ¿Las props tienen un límite? ¿Quién define las props?

- Ok, entonces, al parecer `class` es una palabra reservada de JavaScript, entonces el workaround es usar `className` para trabajar con las clases de CSS.
- Pues parece ser que no, si quisiera puedo tener 50 props para un componente de React. Aunque al chile, tener 50 props está gracioso, creo que lo mejor es intentar no abusar de esto.
- Parece ser que son definidas por el componente padre. `props` no se define directamente, sino que al llamar al hijo es donde colocamos el valor de los props, como si fueran parámetros a pasar.