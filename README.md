React template compatible with style agnostic components approach.

# node & npm versions
project created with node 18 and npm 8

# Build setup notes
The same build setup **has to be used for style-agnostic-component** template.
So everytime some changes introduced to react-template same changes have to be
applied to style-agnostic-component.

## Eslint
1. Install `npm install eslint --save-dev`
2. Initialize `npx elsint --init`, here are questions&answers used:
```
  omatviiv@Olehs-MBP:~/pers/react-template$ npx eslint --init
  You can also run this command directly using 'npm init @eslint/config'.
  ✔ How would you like to use ESLint? · style
  ✔ What type of modules does your project use? · esm
  ✔ Which framework does your project use? · react
  ✔ Does your project use TypeScript? · No / Yes
  ✔ Where does your code run? · browser
  ✔ How would you like to define a style for your project? · prompt
  ✔ What format do you want your config file to be in? · JavaScript
  ✔ What style of indentation do you use? · 4
  ✔ What quotes do you use for strings? · single
  ✔ What line endings do you use? · unix
  ✔ Do you require semicolons? · No / Yes
  The config that you've selected requires the following dependencies:

  eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
  ✔ Would you like to install them now? · No / Yes
  ✔ Which package manager do you want to use? · npm
  Installing eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest

  up to date, audited 513 packages in 2s

  120 packages are looking for funding
    run `npm fund` for details

  found 0 vulnerabilities
  A config file was generated, but the config file itself may not follow your linting rules.
  Successfully created .eslintrc.js file in /Users/omatviiv/pers/react-template
```
3. Test eslint: `npx eslint src/index.tsx`
4. Slightly updated rules.
5. Made a fix for warning:
```
  Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration
```
fixed with the help of these comments:
- https://github.com/jsx-eslint/eslint-plugin-react/issues/1955#issuecomment-437532908
- https://github.com/jsx-eslint/eslint-plugin-react/issues/1955#issuecomment-437533089
6. Configure webpack to run eslint for dev script while watching file changes.
As eslint-loader is deprecated used `eslint-webpack-plugin`.
But without specifying options to that plugin eslint simply doesn't run and no
errors produces. Unfortunately plugin documentation states that options can be
provided. Which gives an impression that options are not requied for the eslint
to work. Also no examples provided.
Found useful this stackoverflow [article](https://stackoverflow.com/questions/66521418/eslint-webpack-plugin-no-output-file-and-no-errors)

## Jest
The simplest way to configure jest to work with typescript is to use ts-jest.
It will add support for imports and there is no need to install babel.

[how to use ts-jest](https://github.com/kulshekhar/ts-jest)

## SVGR
Very useful library that allows to automatically transform svg into react component.
Just followed instructions on svgr
[documentation](https://react-svgr.com/docs/webpack/) to install it.

To fix typescript error after svgr is added there has to be svg global
declaration available to typescript. Check `src/type/svg.d.ts`.

When using suggested resourseQuery method to be able to use svg as url there was
typescript related issue which was fixed with the help of this
[question](https://stackoverflow.com/questions/60816666/how-to-use-query-param-import-in-webpack-with-typescript-without-getting-cannot).
