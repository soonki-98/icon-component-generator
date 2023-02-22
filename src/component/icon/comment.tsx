import React from 'react'
import { IconProps } from './type'
const SvgComment = ({
  size,
  title,
  desc,
  titleId,
  descId,
  ...props
}: IconProps) => {
  let ariaLabelledBy = titleId ? titleId : ''
  ariaLabelledBy += desc && descId ? ` ${descId}` : ''
  ariaLabelledBy = ariaLabelledBy ? ariaLabelledBy : ''
  props['aria-labelledby'] = ariaLabelledBy
  props.style = {
    outline: 'none',
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 22"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabelledBy}
      aria-hidden={!ariaLabelledBy}
      fill="currentcolor"
      {...props}
    >
      {!!title && <title id={titleId}>{title}</title>}
      {!!desc && <desc id={descId}>{desc}</desc>}
      <path
        d="M12.215 22C17.838 20.645 18 17.669 18 17.341V6.736c0-.643-.602-1.167-1.342-1.167-.74 0-1.344.524-1.344 1.167v5.012l-1.059-.46V2.676c0-.633-.644-1.167-1.407-1.167-.74 0-1.343.523-1.343 1.167v8.21l-1.072-.616V1.203c0-.63-.72-1.203-1.51-1.203-.764 0-1.385.54-1.385 1.203v9.879l-1.054-.473V3.232c0-.632-.645-1.166-1.408-1.166-.74 0-1.342.523-1.342 1.166v10.816l-1.048-.499v-3.08c0-.644-.602-1.167-1.343-1.167-.74 0-1.343.523-1.343 1.166v4.976l.087.2c.34.787 1.769 3.52 6.171 6.356h5.957Z"
        fill="#00AC39"
        fillRule="nonzero"
      />
    </svg>
  )
}
SvgComment.isIcon = true
SvgComment.defaultProps = {
  size: 24,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
}
export default SvgComment
