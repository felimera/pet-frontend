export class PhotoPet {
  constructor(
    public location: string,
    public profilePicture: boolean,
    public petId: number,
    public name?: string,
    public extension?: string,
    public comment?: string,
    public id?: number,
  ) { }
}
