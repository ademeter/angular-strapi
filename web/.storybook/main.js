module.exports = {
    'stories': [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    'framework': '@storybook/html',
    'core': {
        'builder': '@storybook/builder-webpack5',
        disableTelemetry: true,
    },
};
