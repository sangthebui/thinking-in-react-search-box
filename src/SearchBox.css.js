// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default css`
    width: 100%;
    box-sizing: border-box;
`;