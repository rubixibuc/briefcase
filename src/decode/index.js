import table from "../table";
import separator from "../separator";

const inverseTable = table.reduce(
  (accumulator, char, index) => ({ ...accumulator, [char]: index }),
  {}
);

module.exports = string =>
  Array.prototype.map
    .call(string.split(separator), char =>
      String.fromCharCode(
        parseInt(
          Array.prototype.map.call(char, char => inverseTable[char]).join(""),
          table.length
        )
      )
    )
    .join("");
