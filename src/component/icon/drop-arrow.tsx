import React from 'react'
import { IconProps } from './type'
const SvgDropArrow = ({
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
      viewBox="0 0 12 12"
      aria-labelledby={ariaLabelledBy}
      aria-hidden={!ariaLabelledBy}
      fill="currentcolor"
      {...props}
    >
      {!!title && <title id={titleId}>{title}</title>}
      {!!desc && <desc id={descId}>{desc}</desc>}
      <path
        fill="#FFF"
        d="M8.818 3.137H3.182a1 1 0 0 0-.805 1.593l2.817 3.83a1.001 1.001 0 0 0 1.612 0l2.817-3.83a1 1 0 0 0-.805-1.593z"
        fillRule="evenodd"
      />
    </svg>
  )
}
SvgDropArrow.isIcon = true
SvgDropArrow.defaultProps = {
  size: 24,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
}
export default SvgDropArrow
