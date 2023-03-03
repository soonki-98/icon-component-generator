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
	...props
  }: IconProps) => { 
	props.style = { outline: "none" , width: size, height: size } 
	return (${jsx})
  }
 
  ${componentName}.defaultProps = {
	size: 24,
  }

  export default ${componentName}`;
};

export default propTypesTemplate;
