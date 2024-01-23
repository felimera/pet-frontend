export class PhotoPet {
  constructor(
    public name: string,
    public extension: string,
    public location: string,
    public profilePicture: boolean,
    public petId: number,
    public comment?: string,
    public id?: number,
  ) { }
}
