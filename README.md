# FontFlex

FontFlex is a user-friendly and accessible Markdown framework suitable for individuals of all skill levels, enabling anyone to create visually appealing and customizable documents with enhanced typography.

## Usage

## Recommended

1. Add .gitmodules file, on same level of your repo where `.git` directory is located, if You have not done already.
2. Open your prefered terminal in repo directory.
3. Use git to add submodule:
  `git submodule add https://github.com/jasjs1/FontFlex.git <path>`
  Update submodule if needed.
  
  Example:

  ```bash
  git submodule add https://github.com/jasjs1/FontFlex.git src/vendor/fontflex
  ```
  
  it will be put automatically in .../repo/src/vendor/fontflex

## Important Notices
### 1. Folder paths


** Make sure if you do change the folder path of FontFlex that you change lines below. But if you did not change anything about the folder directories then you can ignore this. **

  ```html
    <script src="/scripts/createMarkdownFormatting.js"></script>
    <link rel="stylesheet" href="styles/markdownStyling.css">
  ```
  
Do not change any of the link, or script folder paths. This can cause the FontFlex not to be functional unless you change the folder paths.

  ```html
  <script src="/scripts/createMarkdownFormatting.js"></script>
  <link rel="stylesheet" href="/FontFlexComponents/styles/formatting.css">
  ```

If you do change any folder paths ensure that you change the folder path in this file: 'buttons.html'. Change these lines:

  ```HTML
  <script src="/scripts/createMarkdownFormatting.js"></script>

  <link rel="stylesheet" href="/styles/formatting.css">
  ```

### Changing the folder directory:
If you ever do change the folder directory of FontFlex make sure that you change **every** folder reference to make sure that FontFlex is in working condition.


## FontFlex not working?
Before you make a Issue make sure that you check these things first:
1. Folder reference paths
2. That you are on the latest verison of FontFlex (check here: https://github.com/FontFlex/FontFlex/releases)
      * If you are **not** on the latest verison of FontFlex please update it by pressing the
      "Source code (zip)" button, this will download the latest version of FontFlex.

Ensure that you change this line to the text area that you want FontFlex to be working on.

  ```js
  const textarea = document.getElementById('test-textarea');
  ```

If you have checked those and it is still not working, make a Issue.