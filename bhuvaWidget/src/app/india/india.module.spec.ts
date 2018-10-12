import { IndiaModule } from './india.module';

describe('IndiaModule', () => {
  let indiaModule: IndiaModule;

  beforeEach(() => {
    indiaModule = new IndiaModule();
  });

  it('should create an instance', () => {
    expect(indiaModule).toBeTruthy();
  });
});
