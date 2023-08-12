import {
  getColorAction,
  getColorNeutral,
  getColorAlert,
  getFontFamily,
  getWeight,
  getSize,
  getLineHeight,
  getSpacing,
  getSquish,
  getStroke,
  getRadius
} from './getters';

import theme from './theme';

describe('Utility Functions', () => {
    test('getColorAction returns the correct color', () => {
      const color = getColorAction('medium', { theme });
      expect(color).toBe('#0070AB');
    });
  
    test('getColorNeutral returns the correct color', () => {
      const color = getColorNeutral('dark', { theme });
      expect(color).toBe('#202020');
    });
  
    test('getColorAlert returns the correct color', () => {
      const color = getColorAlert('info', { theme });
      expect(color).toBe('#3255E2');
    });
  
    test('getFontFamily returns the correct font family', () => {
      const fontFamily = getFontFamily('default', { theme });
      expect(fontFamily).toBe('Roboto, sans-serif');
    });
  
    test('getWeight returns the correct font weight', () => {
      const weight = getWeight('bold', { theme });
      expect(weight).toBe(700);
    });
  
    test('getSize returns the correct font size', () => {
      const size = getSize('sm', { theme });
      expect(size).toBe('24px');
    });
  
    test('getLineHeight returns the correct line height', () => {
      const lineHeight = getLineHeight('loose', { theme });
      expect(lineHeight).toBe(1.7);
    });
  
    test('getSpacing returns the correct spacing', () => {
      const spacing = getSpacing('lg', { theme });
      expect(spacing).toBe('56px');
    });
  
    test('getSquish returns the correct spacing', () => {
      const squish = getSquish('md', { theme });
      expect(squish).toBe('16px 32px');
    });
  
    test('getStroke returns the correct stroke width', () => {
      const stroke = getStroke('300', { theme });
      expect(stroke).toBe('4px solid');
    });
  
    test('getRadius returns the correct radius value', () => {
      const radius = getRadius('400', { theme });
      expect(radius).toBe('16px');
    });
  });
  