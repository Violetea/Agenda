import { Direccion } from './Direccion';
import { TipoMail, Mail } from './Mail';
import { TipoTelefono, Telefono } from './Telefono';
import { Color, Sexo, Persona } from './Persona';

var direccion1 = new Direccion('Ingeniero Melchor', '4', '1', 'C', 30004, 'La Flota', 'Murcia');
var direccion2 = new Direccion('Pablo Iglesias', '5', '2', 'B', 30005, 'Atalayas', 'Murcia');
var direccion3 = new Direccion('Las Violetas', '6', '3', 'A', 30006, 'Fuente Librilla', 'Murcia');

var persona1 = new Persona('Duna', 'Alcalde', 17, '34888992M', '15/10/2004', Color.Negro, Sexo.Femenino, 'Hija', direccion1, new Mail('duna@alu.com', TipoMail.Personal), new Telefono('686053445', TipoTelefono.Personal));
var persona2 = new Persona('Kaili', 'Alcalde', 12, '48239898Z', '24/07/2009', Color.Azul, Sexo.Masculino, 'Hijo', direccion2, new Mail('kaili@alu.com', TipoMail.Escuela), new Telefono('624534190', TipoTelefono.Escuela));
var persona3 = new Persona('Gabriel', 'Alcalde', 46, '49876543Y', '01/01/1975', Color.Violeta, Sexo.Masculino, 'Pareja', direccion3, new Mail('gaby@empresa.com', TipoMail.Trabajo), new Telefono('676567898', TipoTelefono.Trabajo));

//Array de personas las muestro
var persona = new Persona('', '', 0 , '', '', Color.Ninguno, Sexo.Otros, '', new Direccion('', '', '', '', 0, '', ''), new Mail('', TipoMail.Ninguno), new Telefono('', TipoTelefono.Ninguno));
var contactos = [persona1, persona2, persona3];

var p1 = persona.BuscarContacto('34888992M', contactos);
var p2 = persona.BuscarContacto('48239898Z', contactos);
var p3 = persona.BuscarContacto('49876543Y', contactos);

p1.MostrarDatos();
p1.getDireccion().ModificarDireccion(p1.getDireccion(), 'Cambio calle persona1', '1', '4', 'A', 30001, 'La Flota', 'Murcia');
p1.getMail().ModificarMail(p1.getMail(), 'otro1@gmail.com', TipoMail.Escuela);
p1.getTelefono().ModificarTelefono(p1.getTelefono(), '888888888', TipoTelefono.Casa);
p1.MostrarDatos();

p2.MostrarDatos();
p2.getDireccion().ModificarDireccion(p2.getDireccion(), 'Cambio calle persona2', '2', '5', 'B', 30002, 'Atalayas', 'Murcia');
p2.getMail().ModificarMail(p2.getMail(), 'otro2@gmail.com', TipoMail.Personal);
p2.getTelefono().ModificarTelefono(p2.getTelefono(), '777777777', TipoTelefono.Movil);
p2.MostrarDatos();

p3.MostrarDatos();
p3.getDireccion().ModificarDireccion(p3.getDireccion(), 'Cambio calle persona3', '3', '6', 'C', 30003, 'Fuente Librilla', 'Murcia');
p3.getMail().ModificarMail(p3.getMail(), 'otro3@gmail.com', TipoMail.Personal);
p3.getTelefono().ModificarTelefono(p3.getTelefono(), '966666666', TipoTelefono.Fijo);
p3.MostrarDatos();