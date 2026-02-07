
export class Usuario {
  tamPx:number;
  Matriz3D: Array<Array<Array<string>>>;
  Matriz2D: Array<Array<string>>;
  constructor( Matriz3D: Array<Array<Array<string>>> ,tamPx:number,) {
    this.Matriz3D = Matriz3D;
    this.Matriz2D = view2D(tamPx,Matriz3D,[tamPx/2,tamPx/2]); 
    this.tamPx = tamPx;
  }
}
function view2D(tampx:number, matriz3D:Array<Array<Array<string>>>, cam:Array<number>):Array<Array<string>> {
  var array = [[]]
  for(var z of matriz3D){
    for (var y of z) {
      for (let x of y) {
        if(x!="I"){
          
        }else{

        }
      }
    }
  }
  return array
}
