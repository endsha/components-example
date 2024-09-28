import CommonStyles from '@constants/CommonStyles';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

export enum ButtonType {
  Default = 'Default',
  Destructive = 'Destructive',
  Outline = 'Outline',
  Subtle = 'Subtle',
  Ghost = 'Ghost',
  Link = 'Link',
}

export enum ButtonShape {
  Default = 'Default',
  Round = 'Round',
}

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: JSX.Element;
  type?: ButtonType;
  shape?: ButtonShape;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { title, icon, type, shape } = props;

  const buttonStyle = React.useMemo<ViewStyle>(() => {
    let typeStyle = {},
      shapeStyle = {};

    switch (type) {
      case ButtonType.Default:
        typeStyle = CommonStyles.button.default;
        break;
      case ButtonType.Destructive:
        typeStyle = CommonStyles.button.destructive;
        break;
      case ButtonType.Outline:
        typeStyle = CommonStyles.button.outline;
        break;
      case ButtonType.Subtle:
        typeStyle = CommonStyles.button.subtle;
        break;
      case ButtonType.Ghost:
        typeStyle = CommonStyles.button.ghost;
        break;
      case ButtonType.Link:
        typeStyle = CommonStyles.button.link;
        break;
      default:
        typeStyle = CommonStyles.button.default;
        break;
    }

    return { ...typeStyle, ...shapeStyle };
  }, [type, shape]);

  const buttonTextStyle = React.useMemo<TextStyle>(() => {
    switch (type) {
      case ButtonType.Default:
        return CommonStyles.button.textDefault;
      case ButtonType.Destructive:
        return CommonStyles.button.destructiveText;
      case ButtonType.Outline:
        return CommonStyles.button.outlineText;
      case ButtonType.Subtle:
        return CommonStyles.button.subtleText;
      case ButtonType.Ghost:
        return CommonStyles.button.ghostText;
      case ButtonType.Link:
        return CommonStyles.button.linkText;
      default:
        return CommonStyles.button.textDefault;
    }
  }, [type]);

  return (
    <TouchableOpacity {...props} style={[buttonStyle, props.style]}>
      {icon}
      {!!icon && !!title && <View style={{ width: 8 }} />}
      {!!title && <Text style={buttonTextStyle}>{title}</Text>}
    </TouchableOpacity>
  );
}
