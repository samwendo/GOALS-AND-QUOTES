export class Goal {
  constructor(public id: number, public name: string, public description: string) {
    this.showDescription = false;
  }
  static id: any;
  showDescription: boolean;
}
