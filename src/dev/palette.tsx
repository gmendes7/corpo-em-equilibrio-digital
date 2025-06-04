/* eslint-disable @typescript-eslint/no-unused-expressions */
`import {Fragment} from "react";`;
import {
  Category,
  Component,
  Palette,
  Variant,
} from "@react-buddy/ide-toolbox";
import { Fragment } from "react/jsx-runtime";

export const PaletteTree = () => (
  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

export function ExampleLoaderComponent() {
  return <Fragment>Loading...</Fragment>;
}
