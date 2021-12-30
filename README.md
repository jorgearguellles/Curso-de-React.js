# Apuntes sobre el Curso de React.js: Patrones de render y composición

# 1. Introducción

## Qué son los patrones de render

- Los patrones de render son soluciones comunes que nos pueden ayudar a resolver un problema en específico, por lo general estos patrones son bien conocidos dentro de la comunidad, aunque esto no significa que siempre los debamos usar, ya que cada proyecto conlleva diferentes problemas y funcionalidades.
- Los patrones simplemente son formas que podríamos usar para llegar a una solución. 

## Filosofía y principios de diseño en React

- Los principios de diseño son las reglas, normas y lineamientos generales que sigue un equipo para desarollar sus proyectos.
### Principios de react para react:
- **Abstracciones comunes:** En el core de React no se van a incluir APIs para resolver problemas demasiado específicos, a menos de que muchas personas estén resolviendo dicho problema de una manera muy mala y poco funcional. 
- **Interoperatividad:** React debe ser capaz de convivir con otras herramientas sin causar ningún problema, por lo tanto podemos tener proyectos que usan diferentes herramientas y funcional igualmente, o también podemos migrar proyectos que están construidos con otra herramienta y lentamente incluir React sin que la app se rompa.
#### Cambios al Core:
- **Estabilidad:** React no va a lanzar nuevas versiones de su core si estas rompen el código que ya existe, por lo tanto el código que escribimos hace varios meses o años todavía va a funcionar a día de hoy. En caso de que el equipo de React saque alguna funcionalidad que cause conflictos con APIs anteriores, entonces le avisaran a la comunidad para así poder implementar una solución diferente a tiempo.
- **Experiencia de desarrollo:** React no solo busca que podamos implementar soluciones a nuestros problemas con sus APIs, sino que también busca que estas soluciones sean disfrutables, y que brinden una buena experiencia a la hora de ser implementadas.
#### Prioridades hacia el futuro:
- **Implementación:** El código 'aburrido' siempre se va a preferir sobre el código elegante, ya que este último puede llegar a ser difícil de mover o eliminar en caso de que se deseen hacer modificaciones a la app.
- **Optimizado para la instrumentación:** Los nombres de las APIs de react siempre tratarán de ser autodescriptivos, detallados y distintivos, aunque esto no significa que se vayan a colocar nombres muy largos. 
- **Dogfooding:** Debemos recordar que React es un proyecto creado por y para Facebook, por lo tanto el equipo encargado de crear nuevas funcionalidades siempre priorizará lo que necesita Facebook y no lo que quiere o necesita la comunidad. Aunque esto parece malo a primera vista, es todo lo contrario, ya que React cuenta con el apoyo y mantenimiento de una empresa enorme, lo cual lo convierte en una herramienta muy confiable. 

### Principios de react para la comunidad:

- **Planificación:** Antes de empezar cualquier proyecto debemos definir qué responsabilidades le vamos a delegar a React y cuales dependen de nosotros. 
- **Configuración:** Nosotros no podemos, o mejor, no deberíamos modificar directamente el código de React, ya que esto podría causar conflictos a la hora de añadir nuevas herramientas al entorno de nuestro proyecto.
- **Depuración:** React siempre nos va a dejar pequeñas pistas cada vez que ocurra un error dentro de nuestra aplicación, para así poder encontrar cuál es el foco del problema y saber que deberíamos cambiar.
- **Composición:** next module...

[Documentación oficial de los principios de React.js](https://es.reactjs.org/docs/design-principles.html)

# 2. Composición de componentes

- **Composición:** Es un patrón o principio para crear componentes que nos dan más libertad para elgir donde y como usamos nuestros omponentes. Cada componente debe cumplir una tareas muy especifica pero no debe decirnos especificamente como usar esa solución que nos esta proveyendo.
- [Official React.js Docs: Compocisión vs herencia](https://es.reactjs.org/docs/composition-vs-inheritance.html)

**¿Donde va el estado? = Colocación del estado**

Dos de los principios más populares para decidir donde poner el estado:
1. **Máxima cercanía a la relevancia:** El estado debe estar tan cerca como sea posible de donde lo estemos usando y actualizando.

Ejemplo 1: Si tenemos un estado que solo lo usamos en un componente ```<TodoHeader/>```, entonces ese estado debe ir en ese componente ```<TodoHeader/>```.
```js
const App() => {
  <>
    <TodoHeader />
    <TodoList />
  <>
};
```

Ejemplo 2: Si tenemos un estado que usamos en dos componentes ```<TodoHeader/>``` y ```<TodoList />```, entonces ese estado debe ir en el componente padre más cercado que contenga a esos dos componentes. En este caso es el componente ```App```
```js
const App() => {
  <>
    <TodoHeader />
    <TodoList />
  <>
};
```

2. **Stateful vs Stateless:** Separar componentes entre los que solo manejan logica y estado vs otros que solo manejan la UI. No combinarlos.

**¿Cuál es la diferencia entre state y props?**

props (abreviatura de ”properties”) y state son objetos planos de JavaScript. Mientras ambos contienen información que influye en el resultado del render, son diferentes debido a una importante razón: props se pasa al componente (similar a los parámetros de una función) mientras que state se administra dentro del componente (similar a las variables declaradas dentro de una función).

- [ReactJS: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)
- [React guide: props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

> ... props are a way of passing data from parent to child. ... State is reserved only for interactivity, that is, data that changes over time.

# 3. Render props

Antes de estudiar las render props debes conocer la composición de componentes. 

- **¿Qué son las render props?** 
  - El término “render prop” se refiere a una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función.
  - Nos ayudan a elevar nuestra composición de componentes a otro nivel porque nos permiten ser más específicos sobre que vamos a:
    - Renderizar
    - Cuando
    - Donde 
- **¿Qué son las render functions?**
  - Es el patrón de entregar la información en una función es lo que llamamos.


A partir de ahora podemos decir que tenemos 2 tipos de props: 
1. Las props normales que reciben un valor o variable 
2. Las props que contienen una función. Estas que contienen una función son las que nos interesan.
Esta función devuelve un componente o un elemento que pudiera tener anidados más elementos y componentes.



# 4. High Order Components
# 5. React Hooks
