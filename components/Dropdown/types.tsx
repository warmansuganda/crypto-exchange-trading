import {
  ElementRects,
  OffsetOptions,
  Placement,
  Strategy,
} from '@floating-ui/react';
import { ReactElement } from 'react';

export type OverlayFn = (elementRects?: ElementRects) => ReactElement;

export interface DropdownProps {
  children: ReactElement;
  overlay: ReactElement | OverlayFn;
  placement?: Placement;
  strategy?: Strategy;
  offsetOptions?: OffsetOptions;
  show?: boolean;
  onToggle?: (show: boolean, event?: Event) => void;
}
