export const handleClick = () => {
    // Sobrescribe completamente la aplicación con el nuevo componente
    ReactDOM.render(<AnotherComponent />, document.getElementById("root"));
  };