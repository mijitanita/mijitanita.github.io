# mijitanita.github.io
# Tarjeta de crédito válida

## Índice

1. Preámbulo
2. Objetivos de aprendizaje generales
3. Consideraciones generales
4. Hito 1: Criterios de aceptación mínimos del proyecto
5. Definición del producto.
6. Consideraciones técnicas
7. Descripción de scripts / archivos
8. Desplegar tu aplicación (Deploy)

---

## 1. Preámbulo

Ésta aplicación web será usada en una p+agina web de una tienda de "Dulces Hechos en casa-Artesanales", que inicia sus actividades en la web, venta on-line, para lo cual es sumamente importante el tema de medios de pago y en especial el validar el número de una tarjeta de crédito.

## 2. Objetivos de aprendizaje generales

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

### Web APIs

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Tipos de datos primitivos**

- [ ] **Strings (cadenas de caracteres)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Seguir los principios básicos de diseño visual**

## 3. Consideraciones generales

- Este proyecto se trabajó de manera **individual**.
- Tiempo estimado para completar las 2 partes: **1-4 _sprints_** (semanas).

## 4. Hito 1: Criterios de aceptación mínimos del proyecto

Estos son los requisitos que debe cumplir tu trabajo para que consideremos que has completado lo mínimamemnte indispensable para esta etapa de tu aprendizaje.

**1. La interfaz de tu aplicación debe:**

- Permitir insertar el número de la tarjeta que se quiere validar (texto) en un campo de texto vacío.
- Evitar que puedan escribir caracteres que no sean numéricos (dígitos 0-9).
- Impedir que se intente validar si es que el campo está vacío (no se ha escrito nada).
- Comunicar a la usuaria si se trata una taerjeta válida o no.
- Ocultar todos los dígitos del número de tarjeta con exepción de los últimos
  4 caracteres.

**2. Pruebas unitarias de los métodos.**  
Los metódos de `validator` (`isValid` y `maskify`) deben tener cobertura con
pruebas unitarias.

**3. Código de tu proyecto subido a tu repo e interfaz "desplegada".**  
El código final debe estar subido en un repositorio en GitHub. La interfaz o
pagina web, debe ser "desplegada" (accesible públicamente online) usando
GitHub Pages.

**5. Definición del producto.**

- La aplicacion es un producto sumamanete empatico, realizado pensando en las necesidades de los nuevos emprendedores , que buscan ampliar su mercado y crecer de la mano de los nuevos canales de venta, especialmente orientado al negocio de los postres y tortas para toda ocasión, pero esto no debe de ser limitante para poderlo aplicar a otras actividades, realizando los ajustes necesariios segun la necesidad del emprendimiento.
- Obtener la seguridad y confianza que los datos ingresados seran validades de manera opotima y eficaz, evitando ser victimas de fraudes , los que generarían pérdidas económicas.
  Demostrar a su público objetico , que es un emprendimiento nuevo en el ambito online , no adeloce de soporte tecnico para su buena performance.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.Ésta aplicación es de gran ayuda para los emprendimientos sobre todo medianos y pequeños que pretenden conquistar el amplio mercado que ofrece la tecnología, mercado que se a hecho mas visible en estos ultimos 3 años , por la coyuntura global. Podríamos decir que hasta los más excepticos y poco amigos de la tecnología, se han visto capturados por ella y obligados a modernizar sus canales de venta para no peder pesencia y/o ganarla. Ademas que las carteras de clientes pueden llegar a experimentar un crecimiento exponencial , al saber tratar adecuadamente todos sus procesos digitales, le damos la bienvenida a esta nueva area de "LA DULZURA DE MAMÁ" Hechos en casa por: "Lupe Castro".

## 6. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript. En
este proyecto NO se han utilizado librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Comenzamos este proyecto haciendo un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_
es la estructura basica de un proyecto que sirve como un punto de partida con
archivos inicial y configuración basica de dependencias y tests.

Los tests unitarios cumplen con el 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El boilerplate contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

## 7. Descripción de scripts / archivos

- `src/index.html`: este es el punto de entrada a tu aplicación.
- `src/style.css`: tiene las reglas de estilo.
- `src/validator.js`: contiene objeto (`validator`) el que tiene dos
  métodos:

  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
    con el número de tarjeta que se va a verificar. Esta función retorna
    un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn]
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función retorna un `string` donde todos menos
    los últimos cuatro caracteres son reemplazados por un numeral (`#`) o 🐱.
    Esta función siempre mantiene los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify("4556364607935616") === "############5616";
    maskify("64607935616") === "#######5616";
    maskify("1") === "1";
    maskify("") === "";
    ```

- `src/index.js`: escucha eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualiza el resultado en la UI (interfaz de usuario).
- `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo para `validator.isValid()` y `validator.maskify()`.

## 8. Desplegar tu aplicación (Deploy)

En este proyecto utilizaremos _Github Pages_ para desplegar nuestro sitio web.
