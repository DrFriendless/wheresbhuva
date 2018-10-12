import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private foundBhuva: boolean;
  private description: string;
  private dogs: string[] = [];

  constructor() {
  }

  public findBhuva(description: string) {
    this.foundBhuva = true;
    this.description = description;
  }

  public findDog(name: string) {
    if (this.dogs.indexOf(name) < 0) this.dogs.push(name);
    console.log(this.dogs);
  }

  public isBhuvaFound(): boolean {
    return this.foundBhuva;
  }

  public whereBhuvaIs(): string {
    return this.description;
  }

  public whatDogsHaveBeenFound(): string {
    if (this.dogs.length === 0) return "You haven't found any dogs.";
    return "You've found these dogs: " + this.dogs.join(", ") + ".";
  }
}
