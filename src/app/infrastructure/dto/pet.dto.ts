export interface PetDTO {
  name: string,
  gender: string,
  race: string,
  characteristicsExtremities: string,
  idCustomerEntity: number,
  weightValue: string,
  idMassMeasurementUnitsEntity: number,
  idHairColorEntity: number,
  idBodySizeEntity: number,
  idTypeFigureEntity: number,
  idEyeColorEntity: number,
  idPetCategoryEntity: number,
  id?: number,
  photo?: string,
  birthdate?: string,
  age?: string
}
