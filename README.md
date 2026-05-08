# Minsc VSCode Extension

VSCode Extension for Bitcoin's [Minsc Programming language](https://min.sc/)

> <a href="https://github.com/as1ndu/minsc-vscode-extension"><img src="/icons/logo.png" align="right" width="64" height="64" /></a>

>**Minsc** is a high-level scripting language for expressing Bitcoin Script spending conditions. It is based on the [Miniscript Policy language](https://bitcoin.sipa.be/miniscript/), with additional features and syntactic sugar sprinkled on top, including variables, functions, infix notation, and more.



## Features

- [x] Syntax highlighting
- [x] Comment toggling
- [x] Auto closing
- [x] Auto complete
- [x] Code Snippets
- [x] Hover Messages
- [x] Icon support for `.minsc` files
- [ ] Compile to Script Opcodes
- [ ] Analyze Minsc code
- [ ] Linting, Warning & Error Messages

## Installation

| Editor   | Installation URL     |
|----------|----------------------|
| VSCode   | <a href="#">url</a>  |
| VSCodium | <a href="#">url</a>  |

For `.vsix` build files in case you need a specific version check out the `.vsix` release [file list](/).

## Usage

### Syntax highlighting

Name your files with a `.minsc` file extension, and then VSCode (or VSCodium) will automatically recognize them. Syntax highlighting and the Minsc logo will be applied automatically.

<div align="center">
  <img src="/media/syntax.webp" />
</div>


### Comment toggling

Use the keyboard combination's below to convert an entire line into a comment or code;

| OS             | Shortcut                       |
| ---------------| -------------------------------|
| MacOS          | <kbd>⌘</kbd> + <kbd>/</kbd>    |
| Windows, Linux | <kbd>Ctrl</kbd> + <kbd>/</kbd> |

<div align="center">
  <img src="/media/comments.webp" />
</div>


### Autocomplete

Simply type the first character of any keyword and a list of relevant keywords will drop down at the bottom.
Select the one your looking for.

<div align="center">
  <img src="/media/autocomplete.webp" />
</div>


### Code Snippets

Start by typing `ms:`, and you will see a list of code snippets for commonly used Bitcoin Scripts, like hash locks, time locks and multi-sig schemes. 

<div align="center">
  <img src="/media/snippet.webp" />
</div>

### Hover Messages

To learn more a Minsc keyword, hover your cursor over the keyword and a description of what it is about will be displayed.

<div align="center">
  <img src="/media/hover.webp" />
</div>
