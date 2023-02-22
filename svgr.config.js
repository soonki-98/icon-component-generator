/* eslint-disable no-irregular-whitespace */
const dynamicTitlePlugin = require("./plugins/svg-dynamic-title-plugin");

const propTypesTemplate = ({ componentName, props, jsx }, { tpl }) => {
  return tpl` 
import React from 'react'
import { IconProps } from "./type";
const ${componentName} = ({
	size,
	title,
	desc,
	titleId,
	descId,
	...props
  }: IconProps) => { 
	let ariaLabelledBy = titleId ? titleId : ''
	ariaLabelledBy += desc && descId ? \` \${descId}\` : ''
	ariaLabelledBy = ariaLabelledBy ? ariaLabelledBy : ''
	props['aria-labelledby'] = ariaLabelledBy
	props.style = { outline: "none" } 
	return (${jsx})
  }

  ${componentName}.isIcon = true
  ${componentName}.defaultProps = {
	size: 24,
	focusable: false,
	'aria-hidden': true,
	role: 'img'
  }
  export default ${componentName}`;
};

module.exports = {
  template: propTypesTemplate,
  icon: true,
  jsx: {
    babelConfig: {
      plugins: [dynamicTitlePlugin],
    },
  },
  svgProps: {
    "aria-labelledby": "{ariaLabelledBy}",
    "aria-hidden": "{!ariaLabelledBy}",
    height: "{size}",
    width: "{size}",
    fill: "currentcolor",
  },
  prettierConfig: {
    semi: false,
    singleQuote: true,
  },
};
