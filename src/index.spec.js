import { render } from './index';
import { colors } from 'themer-colors-default';

describe('themer JetBrains color scheme generator', () => {

  const testColorSetConfiguration = (message, colors) => {
    it(message, async() => {
      const files = await Promise.all(render(colors, {}));

      let unknownCount = 0;
      let darkCount = 0;
      let lightCount = 0;

      files.forEach((file) => {
        if (/dark/.test(file.name)) {
          darkCount++;
        }
        else if (/light/.test(file.name)) {
          lightCount++;
        }
        else {
          unknownCount++;
        }
      });

      expect(darkCount).toBe(+('dark' in colors));
      expect(lightCount).toBe(+('light' in colors));
      expect(unknownCount).toBe(0);
    });
  };

  testColorSetConfiguration('should produce two files containing both schemes if passed both a dark and light theme', colors);
  testColorSetConfiguration('should produce one file containing only a dark scheme if passed only a dark color set', { dark: colors.dark });
  testColorSetConfiguration('should produce one file containing only a light scheme if passed only a light color set', { light: colors.light });

});
