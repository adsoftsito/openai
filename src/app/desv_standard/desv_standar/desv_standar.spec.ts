import { media } from '../media/media';
import { dev_standard } from './dev_standard';


const proxySize = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
const developmentHours = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

describe('Standard Deviation test suite', () => {

  it('should return 572.03 if the given mean is proxySize', () => {
    const calculatedMean = mean();
    const calculatedStdDev = stdDev(proxySize, calculatedMean);
    expect(calculatedStdDev).toBe(572.03);
  });

  it('should return 62.26 if the given mean is of the developmentHours', () => {
    const calculatedMean = mean(developmentHours);
    const calculatedStdDev = stdDev(developmentHours, calculatedMean);
    expect(calculatedStdDev).toBe(62.26);
  });

});
