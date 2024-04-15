import {StyleSheet} from 'react-native';

import {Configs} from '../commons/Configs';
import COLORS from './colors';

export const Styles = {
  flexColumn: {
    flex: 1,
  },

  typography: {
    heading: {
      h6_medium: {
        color: COLORS.neutral.black.B900,
        fontSize: Configs.FontSize.size14,
        fontFamily: Configs.FontFamily.medium,
      },
      h5_medium: {
        color: COLORS.neutral.black.B900,
        fontSize: Configs.FontSize.size16,
        fontFamily: Configs.FontFamily.medium,
      },
      h4_medium: {
        color: COLORS.neutral.black.B900,
        fontSize: Configs.FontSize.size18,
        fontFamily: Configs.FontFamily.semiBold,
      },
      h3_medium: {
        color: COLORS.neutral.black.B900,
        fontSize: Configs.FontSize.size24,
        fontFamily: Configs.FontFamily.bold,
      },
      h2_medium: {
        color: COLORS.neutral.black.B900,
        fontSize: Configs.FontSize.size32,
        fontFamily: Configs.FontFamily.medium,
      },
      h1_medium: {
        color: COLORS.neutral.black.B900,
        fontSize: Configs.FontSize.size40,
        fontFamily: Configs.FontFamily.semiBold,
      },
    },
    body: {
      regular: {
        color: COLORS.neutral.black.B800,
        fontSize: Configs.FontSize.size14,
        fontFamily: Configs.FontFamily.bold,
        lineHeight: Configs.LineHeight.size24_5,
      },
    },
  },
};

