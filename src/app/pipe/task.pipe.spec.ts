import { TitlePipe } from './task.pipe';

describe('CustomsPipe', () => {
  it('create an instance', () => {
    const pipe = new TitlePipe();
    expect(pipe).toBeTruthy();
  });
});