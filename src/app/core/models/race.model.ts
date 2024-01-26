export class Race {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public active: boolean,
    public idBodySizeEntity?: number,
    public idPetCategoryEntity?: number,
  ) { }
}
