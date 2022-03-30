export class Direccion 
    {
        private _calle: string;
        private _numero: string;
        private _piso: string;
        private _letra: string;
        private _codPostal: number;
        private _poblacion: string;
        private _provincia: string;

        constructor(calle: string, numero: string, piso: string, letra: string, codPostal: number, poblacion: string, provincia: string){
            this._calle = calle;
            this._numero = numero;
            this._piso = piso;
            this._letra = letra;
            this._codPostal = codPostal;
            this._poblacion = poblacion;
            this._provincia = provincia;
        }
   
        public getCalle(): string {
            return this._calle;
        }
        public getNumero(): string {
            return this._numero;
        }
        public getPiso(): string {
            return this._piso;
        }
        public getLetra(): string {
            return this._letra;
        }
        public getCodPostal(): number {
            return this._codPostal;
        }
        public getPoblacion(): string {
            return this._poblacion;
        }
        public getProvincia(): string {
            return this._provincia;
        }   
        
        public setCalle(value: string) {
            this._calle = value;
        }
        public setNumero(value: string) {
            this._numero = value;
        }
        public setPiso(value: string) {
            this._piso = value;
        }
        public setLetra(value: string) {
            this._letra = value;
        }
        public setCodPostal(value: number) {
            this._codPostal = value;
        }
        public setPoblacion(value: string) {
            this._poblacion = value;
        }
        public setProvincia(value: string) {
            this._provincia = value;
        }
    
        public MostrarDatos(){  
           return `Calle:${this._calle} Nº:${this._numero} Piso:${this._piso} Letra:${this._letra} Población:${this._poblacion} Provincia:${this._provincia} CP:${this._codPostal}`;
        }

        public ModificarDireccion(direccion: Direccion, calle: string, numero: string, piso: string, letra: string, codPostal: number, poblacion: string, provincia: string){
            direccion.setCalle(calle);
            direccion.setNumero(numero);
            direccion.setPiso(piso);
            direccion.setLetra(letra);
            direccion.setCodPostal(codPostal);
            direccion.setPoblacion(poblacion);
            direccion.setProvincia(provincia);
            return direccion;
        }
    }
