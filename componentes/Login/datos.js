import React from 'react'
import { Link } from "react-router-dom";
import { Datos } from "./datos"


export const Datoss = () => {
	return (
		
		<body id="login">

		<br/>
		<br/>
		<div className="formulariou">
<form action="" method="post">
		<img src="img/foto-perfil.jpg" alt="foto perfil"/><h1>Perfil</h1>

		<fieldset id="datos">
			<legend>Datos</legend>
			<table border="0">

				<tr>
					<td>Fecha Nacimiento:</td>
					<td><input type="date" name="apellido"/></td>
				</tr>
				<tr>
					<td>Ingrese su foto:</td>
					<td><input type="file" name="foto"/></td>
				</tr>
				<tr>
					<td>Metodo de Pago:</td>
					<td>
						<input type="text" list="metodo de pago" value="" pattern="^[a-zA-Z\s]+$" title="solo acepto letras" class="control" placeholder="Metodo de pago" required />

						<datalist id="metodo de pago">
							<option value="Bitcoin">Bitcoin</option>
							<option value="Targeta de credito">Targeta de credito</option>
							<option value="Targeta de debito">Targeta de debito</option>
							<option value="Efectico">Efectivo</option>
							
						</datalist>
					</td>
				</tr>
					<tr><td>Color Favorito:</td><td><input type="color" name="color"/></td></tr>
					<tr><td>Sexo:</td></tr>
					<td><input type="radio" name="sexo" value="mas" checked/>Maculino</td><br/>
					<td><input type="radio" name="sexo" value="mas" checked/>Femenino</td><br/>
					<tr><td>Edad:</td><td><input type="number" name="edad" min="18" max="50"/></td></tr>
					<tr><td>Direccio&oacute;n</td><td><textarea rows="s" cols="30"></textarea></td></tr>
				
			</table>
			
		</fieldset>

		<br/>
<br/>
<br/>
<br/>
		<button id="boton" type="submit" value="CrearCuenta">Crear Cuenta</button>
		
	</form>
		</div>
</body>

)
}
