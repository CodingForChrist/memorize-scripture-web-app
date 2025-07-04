const colorBlue600 = "oklch(54.6% .245 262.881)";
const colorBlue800 = "oklch(42.4% .199 265.638)";
const colorWhite = "#fff";

export const buttonStyles = `
  .button-primary {
    display: inline-block;
    font: inherit;
    font-weight: 600;
    font-size: .875rem;
    line-height: 1.5rem;
    background-color: ${colorBlue600};
    color: ${colorWhite};
    margin-top: .25rem;
    padding: .5rem 1rem;
    cursor: pointer;
    border: 0;
  }
  .button-primary:hover {
    background-color: ${colorBlue800};
  }
`;

// copied from https://github.com/americanbible/scripture-styles
export const scriptureStyles = `
  .scripture-styles {
    /* custom update - comment out font size to match app styling */
    /* font-size: 18px; */
    /* custom update - use tinos google font */
    font-family: "Tinos", "Noto Serif", serif;
    line-height: 25px;
    /* custom update - comment out font color to match app styling */
    /* color: #111; */
    -webkit-font-smoothing: antialiased;
  }
  .scripture-styles html,
  .scripture-styles body,
  .scripture-styles div,
  .scripture-styles span,
  .scripture-styles applet,
  .scripture-styles object,
  .scripture-styles iframe,
  .scripture-styles h1,
  .scripture-styles h2,
  .scripture-styles h3,
  .scripture-styles h4,
  .scripture-styles h5,
  .scripture-styles h6,
  .scripture-styles p,
  .scripture-styles blockquote,
  .scripture-styles pre,
  .scripture-styles a,
  .scripture-styles abbr,
  .scripture-styles acronym,
  .scripture-styles address,
  .scripture-styles big,
  .scripture-styles cite,
  .scripture-styles code,
  .scripture-styles del,
  .scripture-styles dfn,
  .scripture-styles em,
  .scripture-styles img,
  .scripture-styles ins,
  .scripture-styles kbd,
  .scripture-styles q,
  .scripture-styles s,
  .scripture-styles samp,
  .scripture-styles small,
  .scripture-styles strike,
  .scripture-styles strong,
  .scripture-styles sub,
  .scripture-styles sup,
  .scripture-styles tt,
  .scripture-styles var,
  .scripture-styles b,
  .scripture-styles u,
  .scripture-styles i,
  .scripture-styles center,
  .scripture-styles dl,
  .scripture-styles dt,
  .scripture-styles dd,
  .scripture-styles ol,
  .scripture-styles ul,
  .scripture-styles li,
  .scripture-styles fieldset,
  .scripture-styles form,
  .scripture-styles label,
  .scripture-styles legend,
  .scripture-styles table,
  .scripture-styles caption,
  .scripture-styles tbody,
  .scripture-styles tfoot,
  .scripture-styles thead,
  .scripture-styles tr,
  .scripture-styles th,
  .scripture-styles td,
  .scripture-styles article,
  .scripture-styles aside,
  .scripture-styles canvas,
  .scripture-styles details,
  .scripture-styles embed,
  .scripture-styles figure,
  .scripture-styles figcaption,
  .scripture-styles footer,
  .scripture-styles header,
  .scripture-styles hgroup,
  .scripture-styles menu,
  .scripture-styles nav,
  .scripture-styles output,
  .scripture-styles ruby,
  .scripture-styles section,
  .scripture-styles summary,
  .scripture-styles time,
  .scripture-styles mark,
  .scripture-styles audio,
  .scripture-styles video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    vertical-align: baseline;
  }
  .scripture-styles article,
  .scripture-styles aside,
  .scripture-styles details,
  .scripture-styles figcaption,
  .scripture-styles figure,
  .scripture-styles footer,
  .scripture-styles header,
  .scripture-styles hgroup,
  .scripture-styles menu,
  .scripture-styles nav,
  .scripture-styles section {
    display: block;
  }
  .scripture-styles ol,
  .scripture-styles ul {
    list-style: none;
  }
  .scripture-styles blockquote,
  .scripture-styles q {
    quotes: none;
  }
  .scripture-styles blockquote:before,
  .scripture-styles blockquote:after,
  .scripture-styles q:before,
  .scripture-styles q:after {
    content: "";
    content: none;
  }
  .scripture-styles table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .scripture-styles .c {
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
  }
  .scripture-styles .ca {
    font-style: italic;
    font-weight: normal;
    color: #777;
  }
  .scripture-styles .ca:before {
    content: "(";
  }
  .scripture-styles .ca:after {
    content: ")" !important;
  }
  .scripture-styles .cl {
    text-align: center;
    font-weight: bold;
  }
  .scripture-styles .cd {
    margin-left: 1em;
    margin-right: 1em;
    font-style: italic;
  }
  .scripture-styles .v,
  .scripture-styles .vp,
  .scripture-styles sup[class^="v"] {
    color: #000;
    font-size: 0.7em;
    letter-spacing: -0.03em;
    vertical-align: 0.25em;
    line-height: 0;
    font-family: sans-serif;
    font-weight: bold;
    top: inherit;
  }
  .scripture-styles .v:after,
  .scripture-styles .vp:after,
  .scripture-styles sup[class^="v"]:after {
    content: "\a0";
  }
  .scripture-styles sup + sup:before {
    content: "\a0";
  }
  .scripture-styles .va {
    font-style: italic;
  }
  .scripture-styles .va:before {
    content: "(";
  }
  .scripture-styles .va:after {
    content: ")" !important;
  }
  .scripture-styles .x {
    font-size: 16px;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    padding: 0 0.4em;
    margin: 0 0.1em;
    text-indent: 0;
    text-align: left;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
  }
  .scripture-styles .xo {
    font-weight: bold;
  }
  .scripture-styles .xk {
    font-style: italic;
  }
  .scripture-styles .xq {
    font-style: italic;
  }
  .scripture-styles .notelink {
    text-decoration: underline;
    padding: 0.1em;
  }
  .scripture-styles .notelink,
  .scripture-styles .notelink:hover,
  .scripture-styles .notelink:active,
  .scripture-styles .notelink:visited {
    color: #6a6a6a;
  }
  .scripture-styles .notelink sup {
    font-size: 0.7em;
    letter-spacing: -0.03em;
    vertical-align: 0.25em;
    line-height: 0;
    font-family: sans-serif;
    font-weight: bold;
  }
  .scripture-styles .notelink + sup:before {
    content: "\a0";
  }
  .scripture-styles .f {
    font-size: 16px;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 0.4em;
    margin: 0 0.1em;
    text-indent: 0;
    text-align: left;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
  }
  .scripture-styles .fr {
    font-weight: bold;
  }
  .scripture-styles .fk {
    font-style: italic;
    font-variant: small-caps;
  }
  .scripture-styles [class^="fq"] {
    font-style: italic;
  }
  .scripture-styles .fl {
    font-style: italic;
    font-weight: bold;
  }
  .scripture-styles .fv {
    color: #515151;
    font-size: 0.75em;
    letter-spacing: -0.03em;
    vertical-align: 0.25em;
    line-height: 0;
    font-family: sans-serif;
    font-weight: bold;
  }
  .scripture-styles .fv:after {
    content: "\a0";
  }
  .scripture-styles .h {
    text-align: center;
    font-style: italic;
  }
  .scripture-styles [class^="imt"],
  .scripture-styles [class^="is"] {
    text-align: center;
    font-weight: bold;
    font-size: 27px;
    line-height: 50px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .scripture-styles [class^="ip"] {
    text-indent: 1em;
  }
  .scripture-styles .ipi {
    padding-left: 1em;
    padding-right: 1em;
  }
  .scripture-styles .im {
    text-indent: 0;
  }
  .scripture-styles .imi {
    text-indent: 0;
    margin-left: 1em;
    margin-right: 1em;
  }
  .scripture-styles .ipq {
    font-style: italic;
    margin-left: 1em;
    margin-right: 1em;
  }
  .scripture-styles .imq {
    margin-left: 1em;
    margin-right: 1em;
  }
  .scripture-styles .ipr {
    text-align: right;
    text-indent: 0;
  }
  .scripture-styles [class^="iq"] {
    margin-left: 1em;
    margin-right: 1em;
  }
  .scripture-styles .iq2 {
    text-indent: 1em;
  }
  .scripture-styles [class^="ili"] {
    padding-left: 1em;
    text-indent: -1em;
  }
  .scripture-styles .ili1 {
    margin-left: 1em;
    margin-right: 1em;
  }
  .scripture-styles .ili2 {
    margin-left: 2em;
    margin-right: 1em;
  }
  .scripture-styles .iot {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-top: 25px;
    margin-bottom: 0px;
  }
  .scripture-styles .io,
  .scripture-styles .io1 {
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .io2 {
    margin-left: 2em;
    margin-right: 0em;
  }
  .scripture-styles .io3 {
    margin-left: 3em;
    margin-right: 0em;
  }
  .scripture-styles .io4 {
    margin-left: 4em;
    margin-right: 0em;
  }
  .scripture-styles .ior {
    font-style: italic;
  }
  .scripture-styles .iex {
    text-indent: 1em;
  }
  .scripture-styles .iqt {
    text-indent: 1em;
    font-style: italic;
  }
  .scripture-styles [class^="p"] {
    text-indent: 1em;
  }
  .scripture-styles .m {
    text-indent: 0 !important;
  }
  .scripture-styles .pmo {
    text-indent: 0;
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .pm {
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .pmr {
    text-align: right;
  }
  .scripture-styles .pmc {
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .pi {
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .pi1 {
    margin-left: 2em;
    margin-right: 0em;
  }
  .scripture-styles .pi2 {
    margin-left: 3em;
    margin-right: 0em;
  }
  .scripture-styles .pi3 {
    margin-left: 4em;
    margin-right: 0em;
  }
  .scripture-styles .mi {
    margin-left: 1em;
    margin-right: 0em;
    text-indent: 0;
  }
  .scripture-styles .pc {
    text-align: center;
    text-indent: 0;
  }
  .scripture-styles .cls {
    text-align: right;
  }
  .scripture-styles [class^="li"] {
    padding-left: 1em;
    text-indent: -1em;
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .li2 {
    margin-left: 2em;
    margin-right: 0em;
  }
  .scripture-styles .li3 {
    margin-left: 3em;
    margin-right: 0em;
  }
  .scripture-styles .li4 {
    margin-left: 4em;
    margin-right: 0em;
  }
  .scripture-styles .b {
    height: 25px;
  }
  .scripture-styles [class^="q"] {
    padding-left: 1em;
    text-indent: -1em;
    margin-left: 1em;
    margin-right: 0em;
  }
  .scripture-styles .q2 {
    margin-left: 1.5em;
    margin-right: 0em;
  }
  .scripture-styles .q3 {
    margin-left: 2em;
    margin-right: 0em;
  }
  .scripture-styles .q4 {
    margin-left: 2.5em;
    margin-right: 0em;
  }
  .scripture-styles .qr {
    text-align: right;
    font-style: italic;
  }
  .scripture-styles .qc {
    text-align: center;
  }
  .scripture-styles .qs {
    font-style: italic;
    text-align: right;
  }
  .scripture-styles .qa {
    text-align: center;
    font-style: italic;
    font-size: 1.1em;
    margin-left: 0em;
    margin-right: 0em;
  }
  .scripture-styles .qac {
    margin-left: 0em;
    margin-right: 0em;
    padding: 0;
    text-indent: 0;
    font-style: italic;
  }
  .scripture-styles .qm2 {
    margin-left: 1.5em;
    margin-right: 0em;
  }
  .scripture-styles .qm3 {
    margin-left: 2em;
    margin-right: 0em;
  }
  .scripture-styles .qt {
    font-style: italic;
    text-indent: 0;
    padding: 0;
    margin: 0;
  }
  .scripture-styles .bk {
    font-style: italic;
  }
  .scripture-styles .nd {
    font-variant: small-caps;
  }
  .scripture-styles .add {
    font-style: italic;
  }
  .scripture-styles .dc {
    font-style: italic;
  }
  .scripture-styles .k {
    font-weight: bold;
    font-style: italic;
  }
  .scripture-styles .lit {
    text-align: right;
    font-weight: bold;
  }
  .scripture-styles .pn {
    font-weight: bold;
    text-decoration: underline;
  }
  .scripture-styles .sls {
    font-style: italic;
  }
  .scripture-styles .tl {
    font-style: italic;
  }
  .scripture-styles .wj {
    color: #cc0000;
  }
  .scripture-styles .em {
    font-style: italic;
  }
  .scripture-styles .bd {
    font-weight: bold;
  }
  .scripture-styles .it {
    font-style: italic;
  }
  .scripture-styles .bdit {
    font-weight: bold;
    font-style: italic;
  }
  .scripture-styles .no {
    font-weight: normal;
    font-style: normal;
  }
  .scripture-styles .sc {
    font-variant: small-caps;
  }
  .scripture-styles .qt {
    font-style: italic;
  }
  .scripture-styles .sig {
    font-weight: normal;
    font-style: italic;
  }
  .scripture-styles table {
    width: 100%;
    display: table;
  }
  .scripture-styles .tr {
    display: table-row;
  }
  .scripture-styles [class^="th"] {
    font-style: italic;
    display: table-cell;
  }
  .scripture-styles [class^="thr"] {
    text-align: right;
    padding: 0 25px;
  }
  .scripture-styles [class^="tc"] {
    display: table-cell;
  }
  .scripture-styles [class^="tcr"] {
    text-align: right;
    padding: 0 25px;
  }
  .scripture-styles [class^="mt"] {
    text-align: center;
    font-weight: bold;
    letter-spacing: normal;
  }
  .scripture-styles .mt,
  .scripture-styles .mt1,
  .scripture-styles .mt2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .scripture-styles .mt2 {
    font-size: 34px;
    margin-top: -25px;
    font-style: italic;
    font-weight: normal;
  }
  .scripture-styles [class^="ms"],
  .scripture-styles .ms,
  .scripture-styles .ms1,
  .scripture-styles .ms2,
  .scripture-styles .ms3 {
    text-align: center;
    font-weight: bold;
    font-size: 27px;
    line-height: 50px;
    margin-top: 25px;
    margin-bottom: 0px;
  }
  .scripture-styles .mr {
    font-size: 0.9em;
    margin-bottom: 25px;
    text-align: center;
    font-weight: normal;
    font-style: italic;
  }
  .scripture-styles .s,
  .scripture-styles .s1,
  .scripture-styles .s2,
  .scripture-styles .s3,
  .scripture-styles .s4 {
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: inherit;
    margin-bottom: 15px;
    margin-top: 25px;
  }
  .scripture-styles .sr {
    font-weight: normal;
    font-style: italic;
    text-align: center;
    font-size: inherit;
    letter-spacing: normal;
  }
  .scripture-styles .r {
    font-size: 18px;
    font-weight: normal;
    font-style: italic;
    text-align: center;
    letter-spacing: normal;
  }
  .scripture-styles .rq {
    font-size: inherit;
    line-height: 25px;
    font-style: italic;
    text-align: right;
    letter-spacing: normal;
  }
  .scripture-styles .d {
    font-style: italic;
    text-align: center;
    font-size: inherit;
    letter-spacing: normal;
  }
  .scripture-styles .sp {
    text-align: left;
    font-weight: normal;
    font-style: italic;
    font-size: inherit;
    letter-spacing: normal;
  }
`;
