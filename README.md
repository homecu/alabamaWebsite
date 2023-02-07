# BlossomWebPPG

Gatsby project for PPG.

## Requeriments

- Node.js (>=12.13.1)

## Installation

1. Create `.npmrc` file ([See how to create a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token))

   ```
   @homecu:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   ```

1. Install dependencies: `npm install`
   Link Core Components Package`npm link @homecu/blossom-websites-core-package`
1. Run on development mode: `npm start`

## Environments

- Staging ()
- Production ()

## Reglas para escritura de los archivos css

1. Las clases unicas siempre irán primero
2. Las clases que tienen como padre "LAYOUT" O DYNAMIC_PAGE siempre seran las ultimas en su media query
3. Las media query se organizaran de mayor a menor 1280, 1024, 768, 640
4. Si exiten el mismo breakpoint de pantalla se colocara antes el max-width y despues el min-width

## ejemplo

```
.clase1 {}
.clase2 {}
.DYNAMIC_ZONES_PAGE clase 1{}
.DYNAMIC_ZONES_PAGE clase 3{}
.LAYOUT_MAIN_CONTACT_US clase 1{}
.LAYOUT_MAIN_CONTACT_US clase 4{}

@media only screen(max-width: 1280px){
   .clase1 {}
   .clase2 {}
   .DYNAMIC_ZONES_PAGE clase 1{}
   .DYNAMIC_ZONES_PAGE clase 3{}
   .LAYOUT_MAIN_CONTACT_US clase 1{}
   .LAYOUT_MAIN_CONTACT_US clase 4{}
}

@media only screen(min-width: 1280px){
   ...
}

@media only screen(max-width: 1023px){
   ...
}

@media only screen(min-width: 1023px){
   ...
}

...
```
