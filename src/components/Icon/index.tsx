import { IconEmail } from './IconEmail/IconEmail'
import { IconLogo } from './IconLogo/IconLogo'
import {IconEyeOpen} from "./IconEyeOpen/IconEyeOpen";
import {IconEyeClose} from "./IconEyeClose/IconEyeClose";

export type IconProps = {
  className?: string
}

export const Icon = {
  EyeOpen: IconEyeOpen,
  EyeClose: IconEyeClose,
  Email: IconEmail,
  Logo: IconLogo
};
