import { BadwordsPipe } from './badwords.pipe';

describe('BadwordsPipe', () => {
  it('create an instance', () => {
    const pipe = new BadwordsPipe();
    expect(pipe).toBeTruthy();
  });
});
