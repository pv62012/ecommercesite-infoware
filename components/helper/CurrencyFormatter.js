import React from "react";
import CurrencyFormat from "react-currency-format";
function CurrencyFormatter({ price }) {
  return (
    <CurrencyFormat
      renderText={(value) => value}
      decimalScale={2}
      value={price}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}

export default CurrencyFormatter;
