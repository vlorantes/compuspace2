import React from 'react'
import { Link } from "react-router-dom";

import Organigrama from "../../imagenes/o.jpg";
import Equipo from "../../imagenes/Equipo.png";
import LogoEmpresa from "../../imagenes/logo.png";
import fb from "../../imagenes/facebook.png";
import tw from "../../imagenes/twitter.png";

export const Inicio = () => {
	return (
		<div className="inicio">
			<Link to="/">
				<h1 className="title">¿Quienes somos?</h1>
			</Link>
				<br/>
				<p>Empresa 100% Salvadoreña fundada en 1922, por Lic Alejandro,Ing Jefferson, Ing Gabriela e Ing Vladimir; quienes al analizar las necesidades del mercado tuvieron la idea de iniciar en el negocio de ventas de computadoras,partes,accesorios de mas alta calidad y mejores marcas, compitiendo asi mismo con precios accesibles y respaldo de os prooovedores mejor establecido de la region,
				 ahora contamos con 100 años de experiencia y seguimos adelante... </p>
			
			<Link to="/">
				<h1 className="title">Nuestro Equipo</h1>
			</Link>
				<br/>
				<p>Contamos con un equipo de profesionales altamente capacitados y con las mejores politicas de calidad en brindr la mejor atencion a nuestros clientes</p>
				<br/>
				<center><img src={Equipo} alt="Equipo" /></center>

			<Link to="/">
				<h1 className="title">Mision</h1>
			</Link>
				<br/>
				<p>Brindar a través de nuestros productos en el sector de tecnologia la total satisfacción a nuestros distribuidores y clientes</p>
				
			<Link to="/">
				<h1 className="title">Vision</h1>
			</Link>
				<br/>
				<p>Ser la primera opcion de los clientes actuales y futuros, satisfaccion y requerimientos, y ademas ser reconocida a nivel regional, por nuestra calidad de productos y servicios, ser lideres en el mercado de la tecnologia.</p>
				
			<Link to="/">
				<h1 className="title">Valores</h1>
			</Link>
				<br/>
				
					<p>RESPONSABILIDAD, HONESTIDAD, EXCELENCIA, COMPROMISO, AMABILIDAD,
						<br/>
					HUMILDAD, CALIDAD, PASION, LEALTAD, EMPATIA</p>
		

			<Link to="/productos">
				<h1 className="title"> Nuestros productos</h1>
			</Link>
				<br/>
				<p>Algunos de los productos que Distribuimos:</p>
				
			
				<p>Motherboards, Cases, Procesadores, Memorias Ram, Discos Duros Internos y Externos</p> 
				<p>Proyectores, Monitores, Teclados, Mouses, Memorias USB y Micro SD</p>
					<p>Y Mmuchos accesorios....</p>	
				<br/>
				<br/>

				<center><img src={LogoEmpresa} alt="inicio" /></center>

			<Link to="/">
				<h1 className="title">Nuestra Organizacion</h1>
			</Link>
				
				<center>
					<div id='container'>
						<img src={Organigrama} alt="organigrama" />
					</div>	
				</center>
		
		<footer>
			
			<div id="pie">
				<div id="redes">
					<br/>
					<a href="https://www.facebook.com/"><img src={fb} alt="fb" width="75"/></a>
					<a href="https://twitter.com/"><img src={tw} alt="tw" width="75"/></a>
				</div>
		
	
			</div>

		</footer>


		</div>

		
	)
}