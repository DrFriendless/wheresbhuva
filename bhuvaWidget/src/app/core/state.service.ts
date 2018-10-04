import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private foundBhuva: boolean;
  private description: string;

  constructor() { }

  public findBhuva(description: string) {
    this.foundBhuva = true;
    this.description = description;
  }

  public isBhuvaFound(): boolean {
    return this.foundBhuva;
  }

  public whereBhuvaIs(): string {
    return this.description;
  }
}
