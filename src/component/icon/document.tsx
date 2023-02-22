import React from 'react'
import { IconProps } from './type'
const SvgDocument = ({
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
      <path
        fill="#FFF"
        d="M21.85 23.908H7.092V6.092h10.154v4.04c0 .33.267.597.598.597h4.062v6.123l-.058 7.056zm-2.57-6.55a.898.898 0 0 1 0 1.793h-9.27a.897.897 0 1 1 0-1.793zm0-4.259a.898.898 0 0 1 0 1.794h-9.27a.898.898 0 0 1 0-1.794zm-.838-6.208 2.754 2.642h-2.754V6.891zm5.236 2.124-4.922-4.724A1.052 1.052 0 0 0 18.03 4H6.046C5.468 4 5 4.468 5 5.046v19.908C5 25.532 5.468 26 6.046 26h16.841c.575 0 1.042-.463 1.047-1.038L24 16.86V9.77c0-.285-.116-.557-.322-.755z"
        fillRule="evenodd"
      />
    </svg>
  )
}
SvgDocument.isIcon = true
SvgDocument.defaultProps = {
  size: 24,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
}
export default SvgDocument
