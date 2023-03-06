import '!style-loader!css-loader!sass-loader!../libs/theme/src/lib/theme/storybook.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Styleguide', ['Design System', 'Colors', 'Spacing', 'Typography'], 'Storybook', ['Introduction', 'Examples']],
        },
    },
};
