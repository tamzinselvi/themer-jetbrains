# themer-jetbrains [![Travis](https://img.shields.io/travis/tomselvi/themer-jetbrains.svg)](https://travis-ci.org/tomselvi/themer-jetbrains)

An JetBrains theme template for [themer](https://github.com/mjswensen/themer). Compatible with JetBrains products such
as PHPStorm, WebStorm, PyCharm & more!

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-jetbrains

Then pass `themer-jetbrains` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-jetbrains -o gen

Compatible with [ChrisRM/material-theme-jetbrains](https://github.com/ChrisRM/material-theme-jetbrains)

## Output

`themer-jetbrains` will generate multiple colorscheme files for you to choose from based on the palettes specified in your color scheme.

## Installation

1.  Copy `themer.palette.icls` to your JetBrains IDE preferences
    color directory. The directory varies, depending on which JetBrains IDE you are using.

    *The colors directory may need to be created.*

    It is typically in:

    **Mac OS X**

    * IntelliJ IDEA: `~/Library/Preferences/jetbrainsIdea{version}/colors`
    * WebStorm `~/Library/Preferences/WebStorm{version}/colors`
    * PyCharm `~/Library/Preferences/PyCharm{version}/colors`

    **Windows**
    * IntelliJ IDEA `%USERPROFILE%\.IdeaIC{version}\config\colors` 
    * PyCharm `%USERPROFILE%\.PyCharm{version}\config\colors`

2. Restart jetbrains IDEA

3. Go to `Preferences | Editor | Colors & Fonts` and select one of the new 
color themes.
