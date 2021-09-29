<div align="center" id="top">
  <p>
    <a href="https://github.com/brlaney/mtrx/commits/master">
      <img src="https://img.shields.io/github/last-commit/brlaney/mtrx?style=flat-square">
    </a>
    <a href="#status"><img src="https://img.shields.io/badge/Maintained-yes-green.svg?style=flat-square"></a>
  </p>
  <img
    src="https://user-images.githubusercontent.com/64326462/134097233-d1484521-9ee7-4160-832c-c0bd18a1b07d.png"
    alt="Mtrx_Logo"
    style="margin: 0; padding: 0;"
  />
</div>

<div align="center">
  <h1>[Mtrx]</h1>
  <p style="text-align: justify">
    A <b>Next.js</b> app that solves statically indeterminate </br>
    trusses, beams, and frames using the <b>matrix displacement method</b>.
  </p>
</div>

## Table Of Contents

- [Project summary](#Summary)
- [Project demo](#Demo)
- [Features](#features)
- [Quick start](#quick-start)
  - [1. Clone repository](#1-clone-repository)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Start development server](#3-start-development-server)
- [Problem solving](#problem-solving)
- [Project code sumary](#project-code-summary)
- [Connect with me](#connect-with-me)
- [References and resources](#references-and-resources)
- [License](#license)
- [Contributions and issues](#contributions-and-issues)

</br>

## Summary

The main goal of this project is to allow the user to understand the [matrix displacement method](https://en.wikipedia.org/wiki/Direct_stiffness_method) by learning visually and interactively. The **matrix displacement method**, or the **stiffness method**, usually requires an understanding of statics and structural mechanics (analysis) - my goal is to make content that is approachable from any level of understanding of these topics.

I am referring to statics and structural analysis within the context of *Civil Engineering*, they are both courses required for [ABET](https://www.abet.org/) accredited Civil Engineering degrees. Regardless if you are a Civil Engineer (or studying to become one), they are interesting and intuitive subjects that are a direct implication of [Newtonian Mechanics](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion). Newton's first law states that `an object at rest will stay at rest` implying that the sum of all forces on that object equal zero.

How does this apply to Civil Engineering? Well, when designing and modeling any structure, our end goal is for the structure to be rigid - Civil Engineers call this **static equalibrium**. This is pretty obvious, but this basic concept is the foundation for analysing any structural system.

This project contains three **components** or **page directories** (see src/pages/). 

- **1. Solver** (*./src/pages/solver/*)
- **2. Stiffness** (*./src/pages/stiffness/*)
- **3. Bridge-Design** (*./src/pages/bridge-design/*)

The solver **(1.)** is where users can go through an a multi-part form inputting all of the necessary information about either a Truss, Beam, or Frame system and a detailed solution will be output. The pages within the stiffness **(2.)** directory contain tutorials, walkthroughs, and examples which allow the user to better understand the matrix displacement method or build a solid foundation of the basics. The bridge-design **(3.)** directory will eventually contain similar tutorials as the stiffness **(2.)** directory, but as of `9/29/2021` I have mainly been building the features within solver **(1.)** and stiffness **(2.)**.

Let me know if you have any questions and feel free to reach out to me through any of the provided contacts at the bottom of this readme. Have fun!

</br>

## Demo

</br>

<div align="center">
  <h4><b>Homepage (desktop) - figure 1.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135329043-33ea31dd-f4df-4155-8106-c120634e2424.png" alt="Homepage-desktop"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4><b>Truss deformation - figure 2.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135328659-637d24cb-0b2f-4a6d-97f3-97a31ee4c9b1.png" alt="truss-deformation"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4><b>Beam deformation - figure 3.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135328653-a190919c-c149-4775-8b3b-1c664bb4c018.png" alt="beam-deformation"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4><b>Frame deformation - figure 4.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135328656-74973971-443a-48a7-ae0f-f3d186174f85.png" alt="frame-deformation"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4><b>Framer-motion Animations and responsive design - figure 5.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/134567611-744b98d7-6f69-4f50-a5fd-7d98716d4519.gif" />
</div>

</br>
</br>
  
<div align="center">
  <h4><b>Visualize deformations - figure 6.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135326890-b09c0b85-b668-43c2-8e5e-0f7b06df32c7.gif" />
</div>

</br>

</br>

## Features

- 💻 The following Technologies are used
  - [Next.js](https://nextjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Scss](https://sass-lang.com/documentation)
- 📝 Form handling simplified with
  - [Formik](https://formik.org/docs/overview)
  - [Yup](https://github.com/jquense/yup)
- 🎞️ Animations created with [Framer-motion](https://www.framer.com/docs/)
- 📊 For charts and equations I used
  - [Chart.js](https://www.chartjs.org/)
  - [Katex](https://github.com/KaTeX/KaTeX)
- 🎨 Styled with `Ui-Kit`
  - [Documentation](https://getuikit.com/)
  - [Github repository](https://github.com/uikit/uikit)
  
</br>

## Quick start

### 1. Clone repository

```bash
git clone https://github.com/Brlaney/mtrx.git
```

### 2. Install dependencies

```bash
cd mtrx

# then for yarn users:
yarn install

# or npm users:
npm i 
```

### 3. Start development server

```bash
yarn dev

#or

npm run dev

```

Now navigate to [http://localhost:3000/](http://localhost:3000/) and check it out.

</br>

## Problem solving

In this section I will sumarize my problem solving process for any issues that arose while creating this project. Issues, bugs, errors, etc. yield critical points in any project were you are presented with the opportunity to evolve your web development skills - after all, Engineering at its core *is* **problem solving**.

### Framer-motion button component glitch

Link to a short video I uploaded to youtube showing this issue and how it was debugged: [Framer-motion bug fix](https://youtu.be/uJpbSbn3jOc)

## Project code summary

- **Date updated:** `09-29-2021`
- **First commit:** `08-20-2021`
- **Directory:** `\mtrx\src`
- **Totals:** 
  - `203 files`
  - `21,747 lines of code`
  - `320 comments` 
  - `962 blanks`
  - **Sum total** `23,029 lines`

### Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| TypeScript React | 132 | 18,211 | 40 | 643 | 18,894 |
| SCSS | 22 | 2,004 | 9 | 106 | 2,119 |
| TypeScript | 49 | 1,532 | 271 | 213 | 2,016 |

### Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| src/ | 204 | 21,670 | 337 | 970 | 22,977 |
| src/components | 101 | 16,286 | 40 | 421 | 16,747 |
| src/lib | 42 | 1,474 | 274 | 196 | 1,944 |
| src/pages | 39 | 1,891 | 14 | 246 | 2,151 |
| src/scss | 22 | 2,019 | 9 | 107 | 2,135 |

</br>

## Connect with me

- Email: <brlaney@outlook.com>
- Twitter: [brendan_webdev](https://twitter.com/Brendan_webdev)
- Instagram: [brlaney94](https://www.instagram.com/brlaney94/)

</br>

## References and resources

- Great introduction video by [Dr. Structure](https://youtu.be/kFkU1M7xVbg)
- Wikipedia:
  - [Direct Stiffness Method](https://en.wikipedia.org/wiki/Direct_stiffness_method)
  - [Finite Element Method](https://en.wikipedia.org/wiki/Finite_element_method)
  - [Newtonian Mechanics](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
  - [Structural Analysis](https://en.wikipedia.org/wiki/Structural_analysis)
- [ABET](https://www.abet.org/)

</br>

## License

```text
MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files, to deal 
in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Brendan Laney | Copyright (c) 2021
```

</br>

## Contributions and issues

I would love your feedback on my project - please feel free to make a pull request or submit an issue if you find any. Thanks for checking out my project!
