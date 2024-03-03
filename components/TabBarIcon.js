import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import COLORS from '../constants/colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
  size={30}
  style={{ marginBottom: -3 }}
  color={props.focused ? COLORS.shrunkgreen : COLORS.black}
  />
);
}
