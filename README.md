# Amogus.css
**Minimalist CSS Framework**
```
No JavaScript. Raw CSS.
```

## Get Started
[Download](https://github.com/sus-amogus/sus-amogus.github.io/archive/refs/heads/main.zip)

[Download CSS](https://raw.githubusercontent.com/sus-amogus/sus-amogus.github.io/main/css/amogus.css)

[Download CSS (minified)](https://raw.githubusercontent.com/sus-amogus/sus-amogus.github.io/main/css/amogus.min.css)

[Download drop-in CSS](https://raw.githubusercontent.com/sus-amogus/sus-amogus.github.io/main/css/amogus.drop-in.css)

[Download drop-in CSS (minified)](https://raw.githubusercontent.com/sus-amogus/sus-amogus.github.io/main/css/amogus.drop-in.min.css)

[Download CSS classes](https://raw.githubusercontent.com/sus-amogus/sus-amogus.github.io/main/css/amogus.classes.css)

[Download CSS classes (minified)](https://raw.githubusercontent.com/sus-amogus/sus-amogus.github.io/main/css/amogus.classes.min.css)

### JSDelivr CDN
* `https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.min.css`


* `https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.css`
* `https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.drop-in.css`
* `https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.drop-in.min.css`
* `https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.classes.css`
* `https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.classes.min.css`

### `script` with JSDelivr CDN
```HTML
<script src="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.min.css"></src>

<script src="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.css"></src>
<script src="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.drop-in.css"></src>
<script src="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.drop-in.min.css"></src>
<script src="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.classes.css"></src>
<script src="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.classes.min.css"></src>
```

## [Website](https://sus-amogus.github.io/index.html)

## [Demo](https://sus-amogus.github.io/demo.html)

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
* `.center`: Center the children of an element.
* **Padding and margin classes**: Amogus.css includes a few different classes for margin and padding.

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
|faded-blue|var(--faded-blue)|#5c95f4|
|blue|var(--blue)|#4285f4|
|darker-blue|var(--darker-blue)|#3c78dc|
|darkest-blue|var(--darkest-blue)|#2766cf|
|default-padding|var(--default-padding)|5px|
|default-margin|var(--default-margin)|5px|


As an example, let's try to override white with `#fff`:
```CSS
:root {
    --white: #fff;
}
```
Calling `var(--white)` will now return the value `#fff`.

## Padding and margin classes
```CSS
.p {  padding: var(--default-padding); }
.px { padding-left: var(--default-padding); padding-right: var(--default-padding); }
.py { padding-top: var(--default-padding); padding-bottom: var(--default-padding); }
.pl { padding-left: var(--default-padding); }
.pr { padding-right: var(--default-padding); }
.pt { padding-top: var(--default-padding); }
.pb { padding-bottom: var(--default-padding); }

.m {  margin: var(--default-margin); }
.mx { margin-left: var(--default-margin); margin-right: var(--default-margin); }
.my { margin-top: var(--default-margin); margin-bottom: var(--default-margin); }
.ml { margin-left: var(--default-margin); }
.mr { margin-right: var(--default-margin); }
.mt { margin-top: var(--default-margin); }
.mb { margin-bottom: var(--default-margin); }

.rm-p { padding: 0; }
.rm-m { margin: 0; }
```