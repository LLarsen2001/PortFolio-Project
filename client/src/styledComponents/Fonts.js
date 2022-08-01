import styled from "styled-components";
import { COLORS } from "./styles";
const T1_FONT_SIZE = "44px";
const T1_LINE_HEIGHT = "56px";
const T2_FONT_SIZE = "32px";
const T2_LINE_HEIGHT = "36px";

const T3_FONT_SIZE = "24px";
const T3_LINE_HEIGHT = "28px";

const getFontSize = (type) => {
    if (type === "t2") {
        return T2_FONT_SIZE;
    }
    if (type === "t3") {
        return T3_FONT_SIZE;
    }
    return T1_FONT_SIZE;
};

const getFontSpacing = (type) => {
    if (type === "t2") {
        return T2_LINE_HEIGHT;
    }
    if (type === "t3") {
        return T3_LINE_HEIGHT;
    }
    return T1_LINE_HEIGHT;
};
const getColor = (type) => {
    if (type === "t3") {
        return COLORS.GREY;
    }
    return COLORS.BLACK;
};

const getFontWeight = (type) => {
    if (type === "t3") {
        return "400";
    }
    return "800";
};

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => getFontSize(props.type)};
  font-weight: ${(props) => getFontWeight(props.type)};
  line-height: ${(props) => getFontSpacing(props.type)};
  color: ${(props) => getColor(props.type)};
`;

const getSpecificStyles = (props) => {
    if (props.large) {
        return `
    font-size: 19px;
    line-height: 24px;
  `;
    }
    if (props.small) {
        return `
    font-size: 14px;
    line-height: 18px;
  `;
    }
    if (props.micro) {
        return `
    font-size: 8px;
    line-height: 8px;
    font-weight: 800;
  `;
    }
    return `
  font-size: 17px;
  line-height: 22px;
  `;
};

const getTextColor = (props) => {
    if (props.dark) {
        return COLORS.dark;
    }
    if (props.red) {
        return COLORS.RED;
    }
    if (props.teal) {
        return COLORS.TEAL;
    }
    return COLORS.GREY;
};

export const Text = styled.p`
  ${(props) => getSpecificStyles(props)};
  font-weight: ${(props) => (props.bold ? "800" : "300")};
  font-family: "Roboto", sans-serif;
  color: ${(props) => getTextColor(props)};
`;