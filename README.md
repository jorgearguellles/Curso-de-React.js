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

# 2. Composición de componentes
# 3. Render props
# 4. High Order Components
# 5. React Hooks
