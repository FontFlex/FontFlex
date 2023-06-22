# FontFlex

FontFlex is a versatile framework for effortless management and customization of font sizes in buttons and text areas. It empowers developers to create visually consistent and aesthetically pleasing user interfaces.

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
  
  it will put automatically in .../repo/src/vendor/fontflex

## Important Notices
### 1. Folder paths

** Make sure if you do change the folder path of FontFlex that you change lines below. But if you did not change anything about the folder directories then you can ignore this. **

  ```html
    <script src="/scripts/createMarkdownFormatting.js"></script>
    <link rel="stylesheet" href="styles/markdownStyling.css">
  ```

### Changing the folder directory:
If you ever do change the folder directory of FontFlex make sure that you change **every** folder reference to make sure that FontFlex is in working condition.

## FontFlex not working?
Before you make a Issue make sure that you check these things first:
1. Folder reference paths
2. That you are on the latest verison of FontFlex (check here: https://github.com/FontFlex/FontFlex/releases)
      * If you are **not** on the latest verison of FontFlex please update it by pressing the
      "Source code (zip)" button, this will download the latest version of FontFlex.

If you have checked those and it is still not working, make a Issue.