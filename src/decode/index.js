import table from "../table";
import separator from "../separator";
import isNonEmptyString from "../isNonEmptyString";

const inverseTable = table.reduce(
  (accumulator, char, index) => ({ ...accumulator, [char]: index }),
  {}
);

module.exports = string =>
  isNonEmptyString(string)
    ? Array.prototype.map
        .call(string.split(separator), char =>
          String.fromCharCode(
            parseInt(
              Array.prototype.map
                .call(char, char => inverseTable[char])
                .join(""),
              table.length
            )
          )
        )
        .join("")
    : string;
