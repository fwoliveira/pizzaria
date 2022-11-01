import 'styled-components';
import theme from './styled';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}
