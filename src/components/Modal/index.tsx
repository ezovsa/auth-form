import { createPortal } from "react-dom";
import { ReactNode, FC, useState, useRef, useEffect } from "react";
import cx from "classnames";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { CSSTransition } from "react-transition-group";

import styles from './Modal.module.scss'

type ModalProps = {
  className?: string;
  closeClassName?: string;
  containerClassName?: string;
  visible: boolean;
  onClose?: any;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = ({
  className,
  containerClassName,
  closeClassName,
  visible,
  onClose,
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const ref = useRef(null);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      visible ? disablePageScroll() : enablePageScroll();
    }
  }, [visible]);

  useEffect(() => setIsLoaded(true), []);

  return isLoaded
    ? createPortal(
      <CSSTransition
        classNames={"modal"}
        in={visible}
        timeout={400}
        nodeRef={ref}
        unmountOnExit
      >
        <div
          className={cx(styles.modal, className)}
          onClick={onClose}
          data-scroll-lock-scrollable
          data-scroll-lock-fill-gap
          ref={ref}
        >
          <div
            className={cx(
              styles.container,
              containerClassName
            )}
            onClick={(e) => e.stopPropagation()}
            style={{ minHeight: '100vh' }}
          >
            {children}
          </div>
        </div>
      </CSSTransition>,
      document.body
    )
    : null;
};
