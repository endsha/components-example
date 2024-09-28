import { StyleSheet } from 'react-native';
import Themes from './Themes';
import Typo from './Typo';
import Layout from './Layout';

const DefaultStyles = StyleSheet.create({
  button: {
    ...Layout.flexRow.center,
    backgroundColor: Themes.slate900,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
});

const CommonStyles = {
  button: StyleSheet.create({
    default: DefaultStyles.button,
    textDefault: {
      ...Typo.bodyMedium,
      color: Themes.white,
    },
    destructive: {
      ...DefaultStyles.button,
      backgroundColor: Themes.red500,
    },
    destructiveText: {
      ...Typo.bodyMedium,
      color: Themes.white,
    },
    outline: {
      ...DefaultStyles.button,
      backgroundColor: Themes.white,
      borderWidth: 1,
      borderColor: Themes.slate200,
    },
    outlineText: {
      ...Typo.bodyMedium,
      color: Themes.slate900,
    },
    subtle: {
      ...DefaultStyles.button,
      backgroundColor: Themes.slate100,
    },
    subtleText: {
      ...Typo.bodyMedium,
      color: Themes.slate900,
    },
    ghost: {
      ...DefaultStyles.button,
      backgroundColor: Themes.white,
    },
    ghostText: {
      ...Typo.bodyMedium,
      color: Themes.slate900,
    },
    link: {
      ...DefaultStyles.button,
      backgroundColor: 'transparent',
    },
    linkText: {
      ...Typo.bodyMedium,
      color: Themes.slate900,
      textDecorationLine: 'underline',
    },
  }),
};

export default CommonStyles;
