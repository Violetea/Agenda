export enum TipoTelefono 
{ 
    Ninguno = '',
    Personal = 'Personal', 
    Trabajo = 'Trabajo', 
    Escuela = 'Escuela', 
    Movil = 'Móvil',
    Fijo = 'Fijo',
    Casa = 'Casa' 
}

export class Telefono {
    
    private _tipoTelefono: TipoTelefono;
    private _numero: string;

    constructor(numero: string, tipoTelefono: TipoTelefono){
        this._tipoTelefono = tipoTelefono;
        this._numero = numero;
    }

    public getTipoTelefono(): TipoTelefono {
        return this._tipoTelefono;
    }
    public getNumero(): string {
        return this._numero;
    }

    public setTipoTelefono(value: TipoTelefono) {
        this._tipoTelefono = value;
    }
    public setNumero(value: string) {
        this._numero = value;
    }

    public MostrarDatos(){
        return `Número:${this._numero} Tipo:${this._tipoTelefono}`;
    }

    public ModificarTelefono(telefono: Telefono, numero: string, tipoTelefono: TipoTelefono){
        telefono.setNumero(numero);
        telefono.setTipoTelefono(tipoTelefono);
        return telefono;
    }

}