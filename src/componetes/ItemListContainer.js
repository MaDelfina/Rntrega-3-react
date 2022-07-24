import Button from 'react-bootstrap/Button';

const ItemListContainer = (props) => {

  if (props.type == "NavBar") {
    return (
      <nav>
        <Button variant="outline-dark"><a href="#">Home</a></Button>
        <Button variant="outline-dark"><a href="#">contacto</a></Button>
        <Button variant="outline-dark"><a href="#">Productos</a></Button>
      </nav>
    )
  }else{
    return (
      <nav>
        <a href="#">Talles</a>
        <a href="#">Contacto</a>
        <a href="#">Redes Sociales</a>
        <a href="#">Productos</a>
      </nav>
    )
  }
}

export default ItemListContainer;