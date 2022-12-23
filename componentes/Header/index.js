import React, {useContext} from 'react'
import LogoEmpresa from "../../imagenes/logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export const Header = () => {
	const value = useContext(DataContext);
	const [menu, setMenu] = value.menu;
	const [carrito] = value.carrito

	const toogleMenu = () =>{
		setMenu(!menu)
	}

	return (
		<header>
			<Link to="/">
				<div className="logo">
					<img src={LogoEmpresa} alt="logo" width="150"/>
				</div>
			</Link>
			<ul>
				<li>
					<Link to="/">INICIO</Link>
				</li>
				<li>
					<Link to="/Productos">PRODUCTOS</Link>
				</li>	


				<li>
					<Link to="/Sucursales">SUCURSALES</Link>
				</li>	

				<li>
					<Link to="/Marcas">MARCAS</Link>
				</li>

				<li>
					<Link to="/Promociones">PROMOCIONES</Link>
				</li>

				<li>
					<Link to="/Login">REGISTRESE</Link>
				</li>


			</ul>
			<div className="cart" onClick={toogleMenu}>
				<box-icon name="cart"></box-icon>
				<span className="item__total">{carrito.length}</span>
			</div>
		</header>


		

	)
}


