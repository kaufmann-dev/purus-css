# Amogus.css
**Minimalist CSS Framework**
```
No JavaScript. Raw CSS.
```

## Get Started
[Download](https://github.com/david-kaufmann-2003/amogus.css/archive/refs/heads/main.zip)

[Download CSS](https://raw.githubusercontent.com/david-kaufmann-2003/amogus.css/main/css/amogus.css)

[Download CSS (minified)](https://raw.githubusercontent.com/david-kaufmann-2003/amogus.css/main/css/amogus.min.css)

[Download drop-in CSS](https://raw.githubusercontent.com/david-kaufmann-2003/amogus.css/main/css/amogus.drop-in.css)

[Download drop-in CSS (minified)](https://raw.githubusercontent.com/david-kaufmann-2003/amogus.css/main/css/amogus.drop-in.min.css)

[Download CSS classes](https://raw.githubusercontent.com/david-kaufmann-2003/amogus.css/main/css/amogus.classes.css)

[Download CSS classes (minified)](https://raw.githubusercontent.com/david-kaufmann-2003/amogus.css/main/css/amogus.classes.min.css)

### JSDelivr CDN
* https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.min.css
* https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.css
* https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.drop-in.css
* https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.drop-in.min.css
* https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.classes.css
* https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.classes.min.css

### `link` with JSDelivr CDN
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.drop-in.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.drop-in.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.classes.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/david-kaufmann-2003/amogus.css/css/amogus.classes.min.css">
```

## [Website](https://david-kaufmann-2003.github.io/amogus.css/)

## Example sites
* [Demo](https://david-kaufmann-2003.github.io/amogus.css/examples/demo.html)
* [Starter site](https://david-kaufmann-2003.github.io/amogus.css/examples/starter_site.html)

## Key features
* Developed alongside [Normalize.css](https://github.com/necolas/normalize.css/), which means every normalization is included
* Customize using CSS variables
* Responsive and mobile-friendly
* Clean, beautiful typography
* Forms, tables, buttons and navigation

## Classes
* `.container`: Responsive fixed width container.
* `.container-fluid`: Full width container.
* `.fill-vertical-space`: Make an element fill out remaining vertical space.
* `.active`  and `.important`: Style buttons.
* `outline-none`: Remove outline.

### Height and width
```CSS
.h-25      { height: 25%; }
.h-50      { height: 50%; }
.h-75      { height: 75%; }
.h-100     { height: 100%; }
.h-auto    { height: auto; }
.h-content { height: fit-content; }

.w-25      { width: 25%; }
.w-50      { width: 50%; }
.w-75      { width: 75%; }
.w-100     { width: 100%; }
.w-auto    { width: auto; }
.w-content { width: fit-content; }
```

### Paddind and margin
```CSS
.p        { padding: var(--padding); }
.px       { padding-left: var(--padding); padding-right: var(--padding); }
.py       { padding-top: var(--padding); padding-bottom: var(--padding); }
.pl       { padding-left: var(--padding); }
.pr       { padding-right: var(--padding); }
.pt       { padding-top: var(--padding); }
.pb       { padding-bottom: var(--padding); }
.p-nav    { padding: var(--padding) var(--padding) calc(var(--padding) - 5px) var(--padding); }

.p-lg     { padding: var(--padding-lg); }
.px-lg    { padding-left: var(--padding-lg); padding-right: var(--padding-lg); }
.py-lg    { padding-top: var(--padding-lg); padding-bottom: var(--padding-lg); }
.pl-lg    { padding-left: var(--padding-lg); }
.pr-lg    { padding-right: var(--padding-lg); }
.pt-lg    { padding-top: var(--padding-lg); }
.pb-lg    { padding-bottom: var(--padding-lg); }
.p-nav-lg { padding: var(--padding-lg) var(--padding-lg) calc(var(--padding-lg) - 5px) var(--padding-lg); }

.p-none   { padding: 0; }

.m        { margin: var(--margin); }
.mx       { margin-left: var(--margin); margin-right: var(--margin); }
.my       { margin-top: var(--margin); margin-bottom: var(--margin); }
.ml       { margin-left: var(--margin); }
.mr       { margin-right: var(--margin); }
.mt       { margin-top: var(--margin); }
.mb       { margin-bottom: var(--margin); }

.m-lg     { margin: var(--margin-lg); }
.mx-lg    { margin-left: var(--margin-lg); margin-right: var(--margin-lg); }
.my-lg    { margin-top: var(--margin-lg); margin-bottom: var(--margin-lg); }
.ml-lg    { margin-left: var(--margin-lg); }
.mr-lg    { margin-right: var(--margin-lg); }
.mt-lg    { margin-top: var(--margin-lg); }
.mb-lg    { margin-bottom: var(--margin-lg); }

.m-none   { margin: 0; }
.m-auto   { margin: auto; }
```

### Color and background color
```CSS
.bg-border-grey        { background-color: var(--border-grey); }
.bg-text-grey          { background-color: var(--text-grey); }
.bg-lighter-white      { background-color: var(--lighter-white); }
.bg-white              { background-color: var(--white); }
.bg-darker-white       { background-color: var(--darker-white); }
.bg-darkest-white      { background-color: var(--darkest-white); }
.bg-black              { background-color: var(--black); }
.bg-faded-primary      { background-color: var(--faded-primary); }
.bg-primary            { background-color: var(--primary); }
.bg-darker-primary     { background-color: var(--darker-primary); }
.bg-darkest-primary    { background-color: var(--darkest-primary); }

.color-border-grey     { color: var(--border-grey); }
.color-text-grey       { color: var(--text-grey); }
.color-lighter-white   { color: var(--lighter-white); }
.color-white           { color: var(--white); }
.color-darker-white    { color: var(--darker-white); }
.color-darkest-white   { color: var(--darkest-white); }
.color-black           { color: var(--black); }
.color-faded-primary   { color: var(--faded-primary); }
.color-primary         { color: var(--primary); }
.color-darker-primary  { color: var(--darker-primary); }
.color-darkest-primary { color: var(--darkest-primary); }
```

### Visibility
```CSS
.visible   { visibility: visible; }
.invisible { visibility:  hidden; }
```

### Text alignment
```CSS
.text-center { text-align: center; }
.text-left   { text-align: left; }
.text-right  { text-align: right; }
```

### Vertical alignment
```CSS
.align-baseline    { vertical-align: baseline; }
.align-top         { vertical-align: top; }
.align-middle      { vertical-align: middle; }
.align-bottom      { vertical-align: bottom; }
.align-text-bottom { vertical-align: text-bottom; }
.align-text-top    { vertical-align: text-top; }
```

### Shadow
```CSS
.shadow-sm    { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
.shadow       { box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06); }
.shadow-md    { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06); }
.shadow-lg    { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05); }
.shadow-xl    { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04); }
.shadow-2xl   { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06); }
```

### Border
```CSS
.border        { border: 1px solid var(--border-grey); }
.border-top    { border-top: 1px solid var(--border-grey); }
.border-bottom { border-bottom: 1px solid var(--border-grey); }
.border-y      { border-top: 1px solid var(--border-grey); border-bottom: 1px solid var(--border-grey); }
.border-right  { border-right: 1px solid var(--border-grey); }
.border-left   { border-left: 1px solid var(--border-grey); }
.border-x      { border-right: 1px solid var(--border-grey); border-left: 1px solid var(--border-grey); }
.border-none   { border: 0; }

.border-solid  { border-style: solid; }
.border-dashe  { border-style: dashed; }
.border-dotted { border-style: dotted; }
.border-double { border-style: double; }
.border-none   { border-style: none; }
```

### Border radius
```CSS
.rounded-none { border-radius: 0px; }
.rounded-sm   { border-radius: 0.125rem; }
.rounded      { border-radius: 0.25rem; }
.rounded-md   { border-radius: 0.375rem; }
.rounded-lg   { border-radius: 0.5rem; }
.rounded-xl   { border-radius: 0.75rem; }
.rounded-2xl  { border-radius: 1rem; }
.rounded-3xl  { border-radius: 1.5rem; }
.rounded-full { border-radius: 9999px; }
```

### Float
```CSS
.float-none  { float: none; }
.float-left  { float: left; }
.float-right { float: right; }
```

### Opacity
```CSS
.opacity-0   { opacity: 0; }
.opacity-5   { opacity: 0.05; }
.opacity-10  { opacity: 0.1; }
.opacity-20  { opacity: 0.2; }
.opacity-25  { opacity: 0.25; }
.opacity-30  { opacity: 0.3; }
.opacity-40  { opacity: 0.4; }
.opacity-50  { opacity: 0.5; }   
.opacity-60  { opacity: 0.6; }
.opacity-70  { opacity: 0.7; }
.opacity-75  { opacity: 0.75; }
.opacity-80  { opacity: 0.8; }
.opacity-90  { opacity: 0.9; }
.opacity-95  { opacity: 0.95; }
.opacity-100 { opacity: 1; }
```

### Position
```CSS
.position-static   { position: static; }
.position-relative { position: relative; }
.position-absolute { position: absolute; }
.position-sticky   { position: sticky; }
.position-fixed    { position: fixed; }
```

### Top/Right/Bottom/Left
```CSS
.all-0     { left: 0; right: 0; bottom: 0; top: 0; }
.all-10    { left: 10px; right: 10px; bottom: 10px; top: 10px; }
.x-0       { left: 0; right: 0; }
.x-10      { left: 10px; right: 10px; }
.y-0       { bottom: 0; top: 0; }
.y-10      { bottom: 10px; top: 10px; }
.bottom-0  { bottom: 0; }
.bottom-10 { bottom: 10px; }
.top-0     { top: 0; }
.top-10    { top: 10px; }
.left-0    { left: 0; }
.left-10   { left: 10px; }
.right-0   { right: 0; }
.right-10  { right: 10px; }
```

## Customize using CSS variables
In Amogus.css, several predefined variables exist. This is in order to make it easier for you to customize these values. All variables have a default value. To change these values, simply define variables with the same name in a custom CSS file. This will override the old values. **Make sure to load your custom CSS after Amogus.css!**
As of version 1.0, the following predefined variables exist:

| Name | CSS Name | Value |
|:---|:---|:---|
|border-grey|var(--border-grey)|#d1d1d1|
|text-grey|var(--text-grey)|#7d7d7d|
|lighter-white|var(--lighter-white)|#f7f7f7|
|white|var(--white)|#f3f3f3|
|darker-white|var(--darker-white)|#eee|
|darkest-white|var(--darkest-white)|#e9e9e9|
|black|var(--black)|#121212|
|faded-primary|var(--faded-primary)|#5c95f4|
|primary|var(--primary)|#4285f4|
|darker-primary|var(--darker-primary)|#3c78dc|
|darkest-primary|var(--darkest-primary)|#2766cf|
|padding|var(--padding)|5px|
|margin|var(--margin)|5px|
|padding-lg|var(--padding-lg)|10px|
|margin-lg|var(--margin-lg)|10px|


As an example, let's try to override white with `#fff`:
```CSS
:root {
    --white: #fff;
}
```
Calling `var(--white)` will now return the value `#fff`.
