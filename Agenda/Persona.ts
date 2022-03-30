import { Direccion } from './Direccion';
import { TipoMail, Mail } from './Mail';
import { TipoTelefono, Telefono } from './Telefono';

export enum Color
{
    Ninguno = '', 
    Blanco = 'Blanco', 
    Negro = 'Negro', 
    Rojo = 'Rojo', 
    Verde = 'Verde', 
    Azul = 'Azul', 
    Rosa = 'Rosa', 
    Amarillo = 'Amarillo', 
    Naranja = 'Naranja', 
    Violeta = 'Violeta'
}
export enum Sexo
{
    Femenino = 'Femenino', 
    Masculino = 'Masculino', 
    Otros = 'Otros'
}

export class Persona
{
    private _nombre: string;
    private _apellido: string;  
    private _edad: number;   
    private _dni: string;
    private _cumpleanos: string;
    private _colorFavorito: Color;
    private _sexo: Sexo;
    private _notas: string;
    private _direccion: Direccion;
    private _mail: Mail;  
    private _telefono: Telefono;
   
    public constructor(nombre: string, apellido: string, edad: number, dni: string, cumpleanos: string, colorFavorito: Color, 
        sexo: Sexo, notas: string, direccion: Direccion, mail: Mail, telefono: Telefono){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._notas = notas;
        this._direccion = direccion;
        this._mail = mail;
        this._telefono = telefono;            
    }
    public getNombre(): string {
        return this._nombre;
    }
    public getApellido(): string {
        return this._apellido;
    }
    public getEdad(): number {
        return this._edad;
    }
    public getDni(): string {
        return this._dni;
    }
    public getCumpleanos(): string {
        return this._cumpleanos;
    }
    public getColorFavorito(): Color {
        return this._colorFavorito;
    }
    public getSexo(): Sexo {
        return this._sexo;
    }  
    public getNotas(): string {
        return this._notas;
    }
    public getDireccion(): Direccion{
        return this._direccion;
    }
    public getMail(): Mail{
        return this._mail;
    }
    public getTelefono(): Telefono{
        return this._telefono;
    }
    
    public setNombre(value: string) {
        this._nombre = value;
    }
    public setApellido(value: string) {
        this._apellido = value;
    }
    public setEdad(value: number) {
        this._edad = value;
    }
    public setDni(value: string) {
        this._dni = value;
    }
    public setCumpleanos(value: string) {
        this._cumpleanos = value;
    }
    public setColorFavorito(value: Color) {
        this._colorFavorito = value;
    }
    public setSexo(value: Sexo) {
        this._sexo = value;
    }
    public setNotas(value: string) {
        this._notas = value;
    }
    public setDireccion(value: Direccion) {
        this._direccion = value;
    }
    public setMail(value: Mail) {
        this._mail = value;
    }
    public setTelefono(value: Telefono) {
        this._telefono = value;
    }

    MostrarDatos(){   
        return console.log(`Contacto\nNombre:${this._nombre} ${this._apellido}\nDNI:${this._dni}\nFecha de nacimiento:${this._cumpleanos}\nEdad:${this._edad}\nSexo:${this._sexo}\nColor Favorito:${this._colorFavorito}\nNotas:${this._notas}\nDirección:${this._direccion.MostrarDatos()}\nEmail:${this._mail.MostrarDatos()}\nTeléfono:${this._telefono.MostrarDatos()}\n`);   
    }

    BuscarContacto(dni: string, agenda: Persona[]): Persona{
        let persona = new Persona(this._nombre, this._apellido, this._edad, this._dni, this._cumpleanos,this._colorFavorito, this._sexo, this._notas, this._direccion, this._mail, this._telefono);
        agenda.forEach(element => {
            if(element._dni == dni){
                persona = element;
            }   
        });
        return persona;
    }
}
