import { ReverseDatePipe } from './reverse-date.pipe';

describe('ReverseDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseDatePipe();
    expect(pipe).toBeTruthy();
  });
});
