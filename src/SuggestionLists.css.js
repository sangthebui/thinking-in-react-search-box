// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default css`
    float: left;
    list-style-type: none;
    background-color: #e2dfdf61;
    margin: 0;
    padding: 5px;
    height: 100px;
    overflow: scroll;
    width: 100%;
    box-sizing: border-box;
`;