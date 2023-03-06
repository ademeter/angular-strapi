'use strict';

module.exports = {
    extends: ['../../../../../../.stylelintrc.cjs'],
    overrides: [
        {
            files: ["*.scss"],
            rules: {
                "scss/dollar-variable-pattern": null,
                "scss/dollar-variable-empty-line-before": null,
                "no-invalid-position-at-import-rule": null,
            }
        }
    ],
    ignoreFiles: [
        "primeng/designer/**/*.scss",
        "primeng/custom/**/*.scss",
        "primeflex/**/*.scss"
    ]
};
