/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }

}*/
// Parte 2 Formularios
// log-in.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  username: string = " ";
  password: string = " ";

  onSubmit(): void {
    console.log('Formulario de inicio de sesión enviado');
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
   
}
