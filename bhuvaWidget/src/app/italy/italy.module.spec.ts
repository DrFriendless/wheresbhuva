import { ItalyModule } from './italy.module';

describe('ItalyModule', () => {
  let italyModule: ItalyModule;

  beforeEach(() => {
    italyModule = new ItalyModule();
  });

  it('should create an instance', () => {
    expect(italyModule).toBeTruthy();
  });
});
