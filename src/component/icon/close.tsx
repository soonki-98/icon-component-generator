import React from 'react'
import { IconProps } from './type'
const SvgClose = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      aria-labelledby={ariaLabelledBy}
      aria-hidden={!ariaLabelledBy}
      fill="currentcolor"
      {...props}
    >
      {!!title && <title id={titleId}>{title}</title>}
      {!!desc && <desc id={descId}>{desc}</desc>}
      <g fill="#FFF" fillRule="evenodd">
        <path d="M4.905 25.98a.905.905 0 0 1-.64-1.545L24.45 4.265a.906.906 0 0 1 1.28 1.28L5.545 25.714a.902.902 0 0 1-.64.264" />
        <path d="M25.095 26a.9.9 0 0 1-.64-.265L4.267 5.562a.906.906 0 0 1 1.28-1.28l20.188 20.174a.905.905 0 0 1-.64 1.544" />
      </g>
    </svg>
  )
}
SvgClose.isIcon = true
SvgClose.defaultProps = {
  size: 24,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
}
export default SvgClose
