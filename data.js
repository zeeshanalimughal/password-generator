const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?', '/', '.', '_', ':', ';', '|', '~', '`', ',', '=', '-', '+', '[', ']', '{', '}', '(', ')', '"']

const alphabets = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z']

var regexFormAlphabetsAndNumbers = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/  //it is for all uppercase lowercase and numbers except the special characters

var regexComplete = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/  // for all including special characters