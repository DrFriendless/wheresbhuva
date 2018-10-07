import { RomaModule } from './roma.module';

describe('RomaModule', () => {
  let romaModule: RomaModule;

  beforeEach(() => {
    romaModule = new RomaModule();
  });

  it('should create an instance', () => {
    expect(romaModule).toBeTruthy();
  });
});
