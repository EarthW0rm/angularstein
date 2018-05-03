import '../node_modules/angular/angular'
import StartedController from './StartedController'
import './angular-app';
import ObjetoTeste from './ObjetoTeste'

var a = new ObjetoTeste(1, "Entrada 1");
console.log(a);
console.log({...a, _id: 2});
