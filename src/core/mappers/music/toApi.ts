export interface IMusicToApiMapper {
  id: number;
}

export class MusicToApiMapper {
  public readonly id: number;

  public constructor(body: IMusicToApiMapper) {
    this.id = body.id;
  }
}
