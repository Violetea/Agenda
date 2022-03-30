export enum TipoMail 
{ 
    Ninguno = '',
    Personal = 'Personal', 
    Trabajo = 'Trabajo', 
    Escuela = 'Escuela', 
    Casa = 'Casa' 
}

export class Mail 
    { 
        
        private _tipoMail: TipoMail;
        private _direccion: string;
        
        constructor(direccion: string, tipoMail: TipoMail){
            this._tipoMail = tipoMail;
            this._direccion = direccion;
        }
        
        public getTipoMail(): TipoMail {
            return this._tipoMail;
        }
        public getDireccion(): string {
            return this._direccion;
        }
    
        public setTipoMail(value: TipoMail) {
            this._tipoMail = value;
        }
        public setDireccion(value: string) {
            this._direccion = value;
        }
    
        public MostrarDatos(){
            return `Dirección:${this._direccion} Tipo:${this._tipoMail}`;
        }
    
        public ModificarMail(mail: Mail, direccion: string, tipoMail: TipoMail){
            mail.setDireccion(direccion);
            mail.setTipoMail(tipoMail);
            return mail;
        }

    }