import { cloneElement, Children } from 'react';

function TodoHeader({children, loading}){
  // cloneElement( componente a clonar, { atributos que les quiero pasar})
  // Children.toArray(children);
  
  return(
    <header>
      {Children.toArray(children).map( child => cloneElement(child, {loading}))}
    </header>
  )
}

export {TodoHeader};