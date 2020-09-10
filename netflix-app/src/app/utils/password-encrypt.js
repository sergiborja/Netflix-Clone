export function hash(password) {
  var encrypted = [];

  for (var i = 0; i < password.length; i++) {
    var charCode = password[i].charCodeAt(0).toString();
    if (charCode.length > 2) {
      encrypted.push(6 + charCode[2] + charCode[1] + charCode[0]);
    } else {
      encrypted.push(4 + charCode[1] + charCode[0]);
    }
  }
  encrypted = encrypted.join("");

  return encrypted;
}

export function unHash(password) {
  var unEncrypted = [];
  for (var i = 0; i < password.length; i++) {
    if (password[i] === "6") {
      unEncrypted.push(
        String.fromCharCode(
          Number(password[i + 3] + password[i + 2] + password[i + 1])
        )
      );
      i = i + 3;
    } else if (password[i] === "4") {
      unEncrypted.push(
        String.fromCharCode(Number(password[i + 2] + password[i + 1]))
      );
      i = i + 2;
    }
  }
  unEncrypted = unEncrypted.join("");

  return unEncrypted;
}
