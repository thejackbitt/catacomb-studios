import { Injectable } from '@angular/core';

@Injectable()
export class SleepService {
  public sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
}
