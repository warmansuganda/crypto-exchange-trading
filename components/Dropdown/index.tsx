'use client';

import { cloneElement, useState } from 'react';
import {
  useClick,
  useFloating,
  useInteractions,
  FloatingPortal,
  offset,
  size,
  useDismiss,
  useTransitionStyles,
  ElementRects,
} from '@floating-ui/react';

import { DropdownProps } from './types';

function Dropdown({
  children,
  overlay,
  placement,
  strategy,
  offsetOptions,
  show,
  onToggle,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [elementRects, setElementRects] = useState<ElementRects>();
  const { refs, context, floatingStyles } = useFloating({
    placement,
    transform: true,
    strategy: strategy ?? 'fixed',
    open: show ?? isOpen,
    onOpenChange: onToggle ?? setIsOpen,
    middleware: [
      offset(offsetOptions ?? 15),
      size({
        apply({ rects }) {
          setElementRects(rects);
        },
      }),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps } = useInteractions([click, dismiss]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 200,
    initial: ({ side }) => ({
      opacity: 0,
      transform:
        side === 'bottom'
          ? 'translate3d(0, -50%, 0)'
          : 'translate3d(0, 50%, 0)',
      transformStyle: 'preserve-3d',
      transformOrigin: 'right -10%',
    }),
  });

  return (
    <>
      {cloneElement(children, {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}
      {isMounted && (
        <FloatingPortal>
          <div
            className="w-fit z-50"
            ref={refs.setFloating}
            style={floatingStyles}
            onClick={() => setIsOpen(!isOpen)}
          >
            {cloneElement(
              typeof overlay === 'function' ? overlay(elementRects) : overlay,
              {
                style: styles,
              },
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

export default Dropdown;
