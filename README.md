# Omnicode

## What is Omnicode

Omnicode is an embedable editor and livecode editor for HTML + CSS + Javascript, Javascript only, Processing (Java mode), P5 (Processing + Javascript), Markdown, and other client side programing languages, eventually, with a built in preview. It was designed to assist HTML, Javascript, Processing and P5 lectures and documentation.

Omnicode is an evolution from HTML/Processing/P5/Markdown [Playground](https://github.com/ranoya/Playground) and relies on [ACE Editor](https://ace.c9.io/) as it's core, wich is a favorite project since it was called _Bespin - Code in the Cloud_ (nice, right? don't know why they changed the name...). It also uses [Pyp5js](https://github.com/berinhard/pyp5js) with [Pyodide](https://github.com/pyodide/pyodide) for Processing Python Mode.

It's simplier than it's previous instance, and far more customizable. Also have a customizable [POE Instace](https://github.com/ranoya/poepalette) implementation as a command palette interface.

You can use (and embed) Omnicode Livecode at this address: [https://omnicode.vercel.app](https://omnicode.vercel.app) and Omnicode with a edit/run control at this address: [https://omnicode.vercel.app/run](https://omnicode.vercel.app/run).

## Customization

You can customize Omnicode with URL variables, like these:

[https://omnicode.vercel.app/?bgcolor=fef6e4&preview=80&theme=solarized_light&gutcolor=f8f0e0&bordercolor=c0cf54&minimal=true&poecss=https://poepalette.vercel.app/dev/lesssolarized.css](https://omnicode.vercel.app/?bgcolor=fef6e4&preview=80&theme=solarized_light&gutcolor=f8f0e0&bordercolor=c0cf54&minimal=true&poecss=https://poepalette.vercel.app/dev/lesssolarized.css)

## Some examples:

Livecode with all the default options:

[https://omnicode.vercel.app](https://omnicode.vercel.app)

Livecode with Borland Turbo-C color scheme (yes... i'm that old) in blue background and Cobalt code highlight, with no status bar or console, and with a different menu with examples only:

[https://omnicode.vercel.app/?nostatus=true&noconsole=true&preview=65&bgcolor=000cd0&bordercolor=9fc5e866&gutcolor=000cd0&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=911937453&theme=cobalt&poecss=https://poepalette.vercel.app/dev/lessblue.css](https://omnicode.vercel.app/?nostatus=true&noconsole=true&preview=65&bgcolor=000cd0&bordercolor=9fc5e866&gutcolor=000cd0&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=911937453&theme=cobalt&poecss=https://poepalette.vercel.app/dev/lessblue.css)

Run mode with Solarized color scheme and background, loading a introductory P5 example:

[https://omnicode.vercel.app/run/?lang=p5&bgcolor=fef6e4&preview=60&theme=solarized_light&gutcolor=f8f0e0&bordercolor=ded6c4&poecss=https://poepalette.vercel.app/dev/lesssolarized.css&file=https://omnicode.vercel.app/examples/p5start.js](https://omnicode.vercel.app/run/?lang=p5&bgcolor=fef6e4&preview=70&theme=solarized_light&gutcolor=f8f0e0&bordercolor=ded6c4&poecss=https://poepalette.vercel.app/dev/lesssolarized.css&file=https://omnicode.vercel.app/examples/p5start.js)

Run mode with default background, Tomorrow code highlight, and minimal interface, loading the same introductory P5 example as before:

[https://omnicode.vercel.app/run/?lang=p5&preview=80&minimal=true&theme=tomorrow&file=https://omnicode.vercel.app/examples/p5start.js](https://omnicode.vercel.app/run/?lang=p5&preview=80&minimal=true&theme=tomorrow&file=https://omnicode.vercel.app/examples/p5start.js)

Run mode with a "deep purple" theme (purple background and Tomorrow Night Blue highlight), loading the introductory P5 example and a different menu with examples in both Processing and P5:

[https://omnicode.vercel.app/run/?variant=p&lang=p5&bgcolor=40124d&gutcolor=40124d&guttext=e4b9e7&bordercolor=652e68&theme=tomorrow_night_blue&poecss=https://poepalette.vercel.app/dev/lessdeeppurple.css&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=1860118124&file=https://omnicode.vercel.app/examples/p5start.js](https://omnicode.vercel.app/run/?variant=p&lang=p5&bgcolor=40124d&gutcolor=40124d&guttext=e4b9e7&bordercolor=652e68&theme=tomorrow_night_blue&poecss=https://poepalette.vercel.app/dev/lessdeeppurple.css&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=1860118124&file=https://omnicode.vercel.app/examples/p5start.js)

A dedicated configuration for Processing (P5 / Original Java Mode / Python Mode) classes:

https://omnicode.vercel.app/run/?variant=p&lang=p5&bgcolor=40124d&gutcolor=40124d&guttext=e4b9e7&bordercolor=652e68&theme=tomorrow_night_blue&poecss=https://poepalette.vercel.app/dev/lessdeeppurple.css&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=1860118124

These are the variables you can use:

| variable    | type                       | description                                                                                | example                                                                                                                 |
| ----------- | -------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| bgcolor     | RGBA value (without the #) | sets the background color                                                                  | https://omnicode.vercel.app/?bgcolor=fef6e4                                                                             |
| gutcolor    | RGB value (without the #)  | sets the editor's lines column background                                                  | https://omnicode.vercel.app/?gutcolor=f8f0e0                                                                            |
| guttext     | RGB value (without the #)  | sets the editor's lines color                                                              | https://omnicode.vercel.app/?gutcolor=FF0000                                                                            |
| bordercolor | RGBA value (without the #) | sets the line borders color                                                                | https://omnicode.vercel.app/?bordercolor=c0cf54                                                                         |
| preview     | percentage (without the %) | sets the size for the preview                                                              | https://omnicode.vercel.app/?preview=50                                                                                 |
| theme       | keyword                    | sets the ACE Theme for code highlighting                                                   | https://omnicode.vercel.app/?theme=cobalt                                                                               |
| lang        | keyword                    | sets the ACE Mode (programing language)                                                    | https://omnicode.vercel.app/?lang=markdown                                                                              |
| minimal     | boolean                    | remove the borders keeping only the border between the editor and the preview              | https://omnicode.vercel.app/?minimal=true&bordercolor=c0cf54                                                            |
| file        | url                        | opens a external file in the editor                                                        | https://omnicode.vercel.app/?file=https://omnicode.vercel.app/examples/myfile.html                                      |
| nopoe       | boolean                    | disable POE (command palette) from the editor                                              | https://omnicode.vercel.app/?nopoe=true                                                                                 |
| basepoe     | url                        | Google Sheet URL with the POE commands (see [POE Documentation](https://github.com/ranoya/poepalette)) | https://omnicode.vercel.app/?basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=911937453 |
| poecss      | url                        | CSS customization for POE command palette                                                  | https://omnicode.vercel.app/?poecss=https://poepalette.vercel.app/dev/lesssolarized.css                                 |
| noconsole   | boolean                    | don't show the console                                                                     | https://omnicode.vercel.app/run/?noconsole=true                                                                         |
| nostatus    | boolean                    | don't show the status bar                                                                  | https://omnicode.vercel.app/?nostatus=true                                                                              |
| readonly    | boolean                    | don't let changes to the actual code                                                       | https://omnicode.vercel.app/?readonly=true&file=https://omnicode.vercel.app/examples/myfile.html                        |
| line        | integer                    | starts the editor at the desired line                                                      | https://omnicode.vercel.app/?line=10&readonly=true&file=https://omnicode.vercel.app/examples/myfile.html                |
| variant     | nomenubutton / blank       | changes the status bar                                                                     | https://omnicode.vercel.app/?variant=blank                                                                              |
| startandrun     | boolean       | run code as soon a file is loaded (for run mode only)      |  https://omnicode.vercel.app/run/?startandrun=true&file=https://omnicode.vercel.app/examples/myfile.html   |
| nocache     | boolean       | don´t use code stored in the browser (important when using multiple instances in the same document)      |  https://omnicode.vercel.app/run/?nocache=true&file=https://omnicode.vercel.app/examples/myfile.html   |
| buffer      | string        | specify a variable in local storage to store and retrieve code in the browser      |  https://omnicode.vercel.app/run/?buffer=tempcode  |
| dark        | boolean       | sets the preview html element color to white (for dark backgrounds)                |  https://omnicode.vercel.app/run/?dark=true        |
| htmledit    | boolean       | enable text edit inside the rendered html document                                 |  https://omnicode.vercel.app/?htmledit=true        | 

<br><br>

## ALWAYS ON COMMAND PALETTE VERSIONS

[https://omnicode.vercel.app/monor/](https://omnicode.vercel.app/monor/)

This version always show de menu options. Use CTRL+/ or CTRL+. to focus the command palette menu.

Menu colors can be set with URL variables:


| variable    | type                       | description                               | example                                         |
| ----------- | -------------------------- | ----------------------------------------- | ----------------------------------------------- |
| bgcolor     | RGBA value (without the #) | sets the background color                 | https://omnicode.vercel.app/?bgcolor=fef6e4     |
| gutcolor    | RGB value (without the #)  | sets the editor's lines column background | https://omnicode.vercel.app/?gutcolor=f8f0e0    |
| guttext     | RGB value (without the #)  | sets the editor's lines color             | https://omnicode.vercel.app/?gutcolor=FF0000    |
| bordercolor | RGBA value (without the #) | sets the line borders color               | https://omnicode.vercel.app/?bordercolor=c0cf54 |
| pborder     | RGBA value (without the #) | sets the menu line borders color          | https://omnicode.vercel.app/?pborder=00FFFF     |
| hgcolor     | RGBA value (without the #) | sets the highlight background color       | https://omnicode.vercel.app/?hgcolor=00FFFF     |
| fgcolor     | RGBA value (without the #) | sets the foreground color                 | https://omnicode.vercel.app/?fgcolor=FFFFFF     |

All other variables also apply, except for **nopoe** and **poecss**.

Example:

[https://omnicode.vercel.app/monor/?&bgcolor=235b8d&fgcolor=ffffff&hgcolor=bbbbbb&guttext=ffffff&bordercolor=16bdbd&pborder=cccccc&gutcolor=276093&dark=true&theme=cobalt](https://omnicode.vercel.app/monor/?&bgcolor=235b8d&fgcolor=ffffff&hgcolor=bbbbbb&guttext=ffffff&bordercolor=16bdbd&pborder=cccccc&gutcolor=276093&dark=true&theme=cobalt)



<br><br>


## TODO

**Mobile ready**
Allow touch to resize the editor and some media queries to resize things for comfortable use on mobile (I don't think it can really be comfortable).

**Cell Programing Mode**
A new mode, like Jupyter ou Observable, with independent cells with code and obervable results of each cell instead of a big preview.
