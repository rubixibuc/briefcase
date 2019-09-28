import table from "../table";
import separator from "../separator";
import isNonEmptyString from "../isNonEmptyString";

export default string =>
  isNonEmptyString(string)
    ? Array.prototype.map
        .call(string, char =>
          Array.prototype.map
            .call(
              char.charCodeAt(0).toString(table.length),
              char => table[parseInt(char)]
            )
            .join("")
        )
        .join(separator)
    : string;
