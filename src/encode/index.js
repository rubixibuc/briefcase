import table from "../table";
import separator from "../separator";

module.exports = string =>
  Array.prototype.map
    .call(string, char =>
      Array.prototype.map
        .call(
          char.charCodeAt(0).toString(table.length),
          char => table[parseInt(char)]
        )
        .join("")
    )
    .join(separator);
