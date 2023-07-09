export class Recipe {
  public description: string;
  public name:string;
  public imagePath:string

  constructor(desc : string, name: string, imagePath: string){

    this.description= desc;
    this.name=name;
    this.imagePath= imagePath;

  }

}
