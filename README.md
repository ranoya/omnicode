# Omnicode

## What is Omnicode

Omnicode is a livecode editor for HTML + CSS + Javascript, Javascript only, Processing (Java mode), P5 (Processing + Javascript), Markdown, and other client side programing languages, eventually.

Omnicode is an evolution from HTML/Processing/P5/Markdown [Playground](https://github.com/ranoya/Playground) and relies on [ACE Editor](https://ace.c9.io/) as it's core (wich is a favorite, since it was called _Bespin - Code in the Cloud_).

It's simplier than it's previous instance, and far more customizable. Also have a customizable [POE Instace](https://github.com/ranoya/poepalette) implementation as a command palette interface.

You can use (and embed) Omnicode in this address: [https://omnicode.vercel.app](https://omnicode.vercel.app).

## Customization

You can customize Omnicode with URL variables, like these:

[https://omnicode.vercel.app/?bgcolor=fef6e4&preview=80&theme=solarized_light&gutcolor=f8f0e0&bordercolor=c0cf54&minimal=true&poecss=https://poepalette.vercel.app/dev/lesssolarized.css](https://omnicode.vercel.app/?bgcolor=fef6e4&preview=80&theme=solarized_light&gutcolor=f8f0e0&bordercolor=c0cf54&minimal=true&poecss=https://poepalette.vercel.app/dev/lesssolarized.css)

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
| file        | url                        | opens a external file in the editor                                                        | https://omnicode.vercel.app/?file=https://omnicode.vercel.app/example/myfile.html                                       |
| nopoe       | boolean                    | disable POE (command palette) from the editor                                              | https://omnicode.vercel.app/?nopoe=true                                                                                 |
| basepoe     | url                        | JSON with the POE commands (see [POE Documentation](https://github.com/ranoya/poepalette)) | https://omnicode.vercel.app/?basepoe=https://opensheet.elk.sh/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/ExemplosHTML |
| poecss      | url                        | CSS customization for POE command palette                                                  | https://omnicode.vercel.app/?poecss=https://poepalette.vercel.app/dev/lesssolarized.css                                 |
| noconsole   | boolean                    | don't show the console                                                                     | https://omnicode.vercel.app/run/?noconsole=true                                                                         |
