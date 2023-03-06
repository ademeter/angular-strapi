'use strict';

module.exports = {
    extends: ['@team23/stylelint-config-team23-scss'],
    rules: {
        indentation: 4,
        'no-empty-source': null,
        'selector-type-no-unknown': [
            true,
            {
                'ignore': ['custom-elements'],
            },
        ],
    },
    'overrides': [
        {
            'files': ['**/*.scss'],
            'rules': {
                'scss/dollar-variable-empty-line-before': null,
                'no-invalid-position-at-import-rule': null,
            },
        },
    ],
};
