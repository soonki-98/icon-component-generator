import React from 'react'
import { IconProps } from './type'
const SvgDocumentallreturn = ({
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
        d="m17.562 19.003-2.149 5.718h1.805l.278-.944h2.006l.286.944h1.85l-2.149-5.718h-1.927zm.942 1.483.631 2.055H17.88l.624-2.055zm3.645 4.235h1.592v-5.718h-1.592zm2.661 0h1.591v-5.718H24.81zM8.803 15.17a1.05 1.05 0 0 0 .743-1.793L7.589 11.42h8.888a4.87 4.87 0 0 1 4.864 4.865c0 .535-.09 1.05-.25 1.532h2.353a7.1 7.1 0 0 0 .168-1.532 7.143 7.143 0 0 0-7.135-7.135H7.552l1.957-1.958a1.049 1.049 0 1 0-1.485-1.484L4.207 9.524a1.05 1.05 0 0 0 0 1.485l3.854 3.853c.205.205.473.307.742.307m6.108 5.981H5.377a1.135 1.135 0 1 0 0 2.27H14.1l.81-2.27z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  )
}
SvgDocumentallreturn.isIcon = true
SvgDocumentallreturn.defaultProps = {
  size: 24,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
}
export default SvgDocumentallreturn
