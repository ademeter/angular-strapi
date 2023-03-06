# Design System

## How to use it in other projects

```
npm i primeflex
nx g @nrwl/angular:library theme --buildable

rm -rf libs/theme/src/lib libs/theme/src/index.ts
cp -R ../../angular-strapi-nx-angular/web/libs/theme/src/lib libs/theme/src/lib
cp ../../angular-strapi-nx-angular/web/libs/theme/src/index.ts libs/theme/src
```

Add following to the `project.json` in `targets -> build -> options`
```
                "stylePreprocessorOptions": {
                    "includePaths": [
                        "libs/theme/src/lib"
                    ]
                }
```

Add following to your `styles.scss`
```
/* Import global theme, classes and placeholder */
@import 'theme';
/* Import all variables and utilities */
@import 'theme/utilities';
```

## How to use it
`@import 'theme';` in your main style file to have access to all global classes and placeholders.
`@import 'theme/utilities';` in every file you want to use some helper mixins or functions

### Customization
Every variable from the variables folder can be overridden for each app individually.

```scss
/* Import all variables and utilities */

$base-size: 1rem;
$spacing-xs: 4rem;

$color-mapping-for-utilities: (
    grey: #888,
);

$color-mapping-for-background: (
    primary: (
        heading: yellow,
    ),
);

@import 'theme';
@import 'theme/utilities';
```

## Structure

```
theme/
|
|- abstracts/
|   |- _color.scss              # mixins to work with colors
|   |- _spacing.scss            # mixins to work with spacing
|
|- placeholders/
|   |- _color.scss              # placeholders for colors
|   |- _spacing.scss            # placeholders for spacing
|   |- _typography.scss         # placeholders for typography
|
|- ui/
|   |- _reset.scss              # base styling to reset browser defaults
|   |- _base.scss               # global styling that might want to stay in the design system
|   |- _color.scss              # utility classes to work with color
|   |- _spacing.scss            # utility classes to work with spacing
|   |- _typography.scss         # utility classes to work with typography
|   |- _hover.scss              # bem classes to work with hover effects
|
|- variables/
|   |- _base.scss               # base css variables
|   |- _color.scss              # variables to define available colors (e.g. colors and mappings)
|   |- _spacing.scss            # variables to define available spacings (e.g. sizes and names)
|   |- _typography.scss         # variables to define typography (e.g. font-sizes and family)
|   |- _prime.scss              # variables used by prime
|
|- vendors/
|   |- _prime.scss              # all variables used for the prime frameworks (when used, not tested)
|   |- _primeflex.scss          # primeflex integration with some required variables
|
 - utilities                    # a collection of all utilities. can be imported seperately
 - index                        # all classes to import once in your app
 - storybook                    # a merged stylesheet to be used in storybook

```

## What's inside?

### Colors
A collection of placeholders and classes to style the color/background-color. More see storybook.
### Typography
A collection of placeholders and classes to style the font-size/weight/style. More see storybook.
### Spacing
A collection of placeholders and classes to style spacings (margin/padding). More see storybook.
### Utilities
To quickly create layouts we decided to use some utility classes. Therefor we do use parts of [Primeflex](https://www.primefaces.org/primeflex/):
- grid
- display
- position
- flexbox
- gap
