export class Form{
    name: string;
    email: string;
    telefono: string;
    curso: string;
    modalidad: string;
    horario: string;
    mensaje: string
    constructor(name: string, email: string, curso: string, telefono: string, modalidad: string, horario: string, mensaje: string){   
      this.name = name;   
      this.email = email;      
      this.telefono = telefono;
      this.curso = curso;
      this.modalidad = modalidad;
      this.horario = horario;
      this.mensaje = mensaje;
    }
  }