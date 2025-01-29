function PasswordBox(options) {
  let opts = options["options"];
  //   opts
  //   0 - includeUppercase,
  //   1 - includeLowercase,
  //   2 - includeNumbers,
  //   3 - includeSpecial,
  //   4 - includeRepeating,
  //   5 - passwordLength,

  let characters = "";
  let length = 14;
  let repeats = false;
  if (opts.length > 0) {
    if (opts[0]) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (opts[1]) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (opts[2]) {
      characters += "0123456789";
    }
    if (opts[3]) {
      characters += "~!@-#$";
    }
    if (opts[4]) {
      repeats = true;
    }

    length = opts[5];
  }

  const generatePassword = (
    length = 20,
    characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$",
    repeats = false
  ) => {
    let result = "";
    result = Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => characters[x % characters.length])
      .join("");
    if (repeats) {
      return result;
    } else {
      let result2 = "";
      for (let i = 1; i < result.length; i++) {
        if (result[i] === result[i - 1]) {
          let newChar = Array.from(crypto.getRandomValues(new Uint32Array(1)))
            .map((x) => characters[x % characters.length])
            .join("");
          result2 += newChar;
        } else {
          result2 += result[i - 1];
        }
      }
      return result2;
    }
  };

  let newPassword = generatePassword(length, characters, repeats);

  if (opts.length > 0) {
    return (
      <div className="outer">
        <div className="inner2">
          <h2>Your generated password:</h2>

          <div className="password">{newPassword}</div>
          <button
            id="copybutton"
            onClick={() => {
              navigator.clipboard.writeText(`${newPassword}`);
            }}
          >
            Copy to clipboard
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="inner2"> &nbsp;</div>;
  }
}
export default PasswordBox;
