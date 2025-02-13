import { useState } from 'react' 

const RegistroVotantes = () => {

  const [votante, setVotante] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    curp: '', 
    alcaldia: ''
  });

  const handleChange = (e) => {
    setVotante({
      ...votante,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Votante: ${votante.nombre} registrado`);
  };

  const h1Style = {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px"
  };
  
  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555"
  };
  
  const inputStyle = {
    width: "60%",
    padding: "1em",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "1em",
    fontSize: "16px"
  };

  const TextStyle = {
    width: "50%",
    padding: "1em",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "1em",
    fontSize: "16px",
    height: "100px"
  };
  
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    display: "block",
    width: "100%",
    textAlign: "center"
  };
  
  const divStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
      <div style={divStyle}>
        <h1 style={h1Style}>Registro de Votantes</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Nombre</label>
            <input 
              style={inputStyle}
              type="text" 
              name="nombre" 
              value={votante.nombre} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label style={labelStyle}>Teléfono</label>
            <input 
              style={inputStyle}
              type="text" 
              name="telefono" 
              value={votante.telefono} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label style={labelStyle}>Dirección</label>
            <textarea 
              style={TextStyle}
              type="text" 
              name="direccion" 
              value={votante.direccion} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label style={labelStyle}>CURP</label>
            <input 
              style={inputStyle}
              type="text" 
              name="curp" 
              value={votante.curp} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label style={labelStyle}>Alcaldía</label>
            <select
              style={inputStyle}
              type="text" 
              name="alcaldia" 
              value={votante.alcaldia} 
              onChange={handleChange} 
            >
              <option value="">Selecciona una alcaldía</option>
              <option value="Azcapotzalco">Azcapotzalco</option>
              <option value="Benito Juárez">Benito Juárez</option>
              <option value="Coyoacán">Coyoacán</option>
              <option value="Cuajimalpa">Cuajimalpa</option>
              <option value="Gustavo A. Madero">Gustavo A. Madero</option>
            </select>
        </div>
        <button 
          style={buttonStyle}
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  )
}

export default RegistroVotantes