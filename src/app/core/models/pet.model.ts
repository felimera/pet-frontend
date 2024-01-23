export class Pet {
  constructor(
    public name: string,
    public gender: string,
    public race: string,
    public characteristicsExtremities: string,
    public idCustomerEntity: number,
    public weightValue: string,
    public idMassMeasurementUnitsEntity: number,
    public idHairColorEntity: number,
    public idBodySizeEntity: number,
    public idTypeFigureEntity: number,
    public idEyeColorEntity: number,
    public idPetCategoryEntity: number,
    public photo: string,
    public id?: number,
    public birthdate?: string,
    public age?: string
  ) { }
}
