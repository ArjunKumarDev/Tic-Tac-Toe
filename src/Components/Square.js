import React from "react";


const Square = ({ value, chooseSquare }) => (<div className="square" onClick={() => chooseSquare()}>{value}</div>)


export default Square;