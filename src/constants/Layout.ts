import { Dimensions, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Layout = {
  flexCol: StyleSheet.create({
    default: {
      flexDirection: 'column',
    },
    alignCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    alignEnd: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    alignBetween: {
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    justifyCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    center: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyBetween: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    justifyBetweenCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    justifyEndCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  }),
  flexRow: StyleSheet.create({
    default: {
      flexDirection: 'row',
    },
    alignStart: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    alignCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    justifyCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    justifyEnd: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    justifyEndCenter: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    center: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyBetweenCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    justifyBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    justifyAroundCenter: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    wrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  }),
};

export default Layout;
