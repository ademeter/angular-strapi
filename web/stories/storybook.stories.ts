import { Meta } from '@storybook/html';

import MDX from './storybook.doc.mdx';
import HTML from './storybook.stories.html';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Storybook/Examples',
    argTypes: {
        value: {
            description: 'The description of the arg',
        },
    },
    parameters: {
        docs: {
            page: MDX,
        },
        layout: 'centered',
    },
    decorators: [
        (Story) => `
<div class="p-m background-secondary color-text-on-secondary">
    ${ Story() }
</div>`,
    ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => `External .ts with value: ${ args.value }, written in Html`;

export const external = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
external.args = {
    value: 'Hello World',
}

external.argTypes = {
    value: { control: { disable: true } },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const HtmlTemplate = () => HTML;

export const custom = HtmlTemplate.bind({});
