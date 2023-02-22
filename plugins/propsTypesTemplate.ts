import { types } from "@babel/core";
import { TemplateBuilder } from "@babel/template";

interface TemplateVariables {
  componentName: string;
  interfaces: types.TSInterfaceDeclaration[];
  props: (types.ObjectPattern | types.Identifier)[];
  imports: types.ImportDeclaration[];
  exports: (types.VariableDeclaration | types.ExportDeclaration | types.Statement)[];
  jsx: types.JSXElement;
}

interface TemplateContext {
  tpl: TemplateBuilder<types.Statement | types.Statement[]>["ast"];
}

const propTypesTemplate = ({ componentName, props, jsx }: TemplateVariables, { tpl }: TemplateContext) => {
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
	props.style = { outline: "none" , width: size, height: size } 
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

export default propTypesTemplate;
