import { FC } from "react";
import cx from "classnames";

import styles from './Success.module.scss'

type SuccessProps = {
  onClose: () => void;
};

export const Success: FC<SuccessProps> = ({onClose}) => {
  return (
    <div className={styles.success}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Thank you for being with us!</p>
        <button className={cx('btn', styles.button)} onClick={onClose}>Go back</button>
      </div>
    </div>
  )
}
