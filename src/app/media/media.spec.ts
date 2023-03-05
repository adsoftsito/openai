import { media } from "./getMedia";

describe('media test suite', () => {
  it('Si n = [160, 591, 114, 229,230,270,128,1657,624,1503] retorna 550.6', () => {
      const resultado = media([160, 591, 114, 229,230,270,128,1657,624,1503]);
      expect(resultado).toBe(550.6);
  })

  it('Si n = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] retorna 60.32', () => {
      const resultado = media([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
      expect(resultado).toBe(60.32);
  })
});

