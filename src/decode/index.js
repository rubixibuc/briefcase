import table from "../table";
import separator from "../separator";
import isNonEmptyString from "../isNonEmptyString";

const inverseTable = table.reduce(
  (accumulator, char, index) => ({ ...accumulator, [char]: index }),
  {}
);

export default string =>
  isNonEmptyString(string)
    ? Array.prototype.map
        .call(string.split(separator), char =>
          String.fromCharCode(
            parseInt(
              Array.prototype.map
                .call(char, char => {
                  if (inverseTable[char] != null) {
                    return inverseTable[char];
                  } else {
                    throw new Error("encountered invalid character");
                  }
                })
                .join(""),
              table.length
            )
          )
        )
        .join("")
    : string;
