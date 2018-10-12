import { AustraliaModule } from './australia.module';

describe('AustraliaModule', () => {
  let australiaModule: AustraliaModule;

  beforeEach(() => {
    australiaModule = new AustraliaModule();
  });

  it('should create an instance', () => {
    expect(australiaModule).toBeTruthy();
  });
});
