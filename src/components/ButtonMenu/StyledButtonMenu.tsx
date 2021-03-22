// import styled, { DefaultTheme } from "styled-components";
// import { Variant, variants } from "../Button/types";
import styled from "styled-components";
import { Variant } from "../Button/types";

// type StyledButtonMenuProps = {
//   variant: Variant;
//   theme: DefaultTheme;
// };

// const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
//   return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
// };

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
