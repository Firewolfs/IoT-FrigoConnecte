export class User {

  private id: number;
  private prenom: string;
  private nom: string;
  private login: string;
  private password: string;

  constructor(id: number, prenom: string, nom: string, login: string, password: string) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.login = login;
    this.password = password;
  }

  get Id(): number {
    return this.id;
  }

  get Prenom(): string {
    return this.prenom;
  }

  get Nom(): string {
    return this.nom;
  }

  get Login(): string {
    return this.login;
  }

  get Password(): string {
    return this.password;
  }
}
