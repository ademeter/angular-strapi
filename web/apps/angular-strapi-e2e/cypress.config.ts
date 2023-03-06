import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';


// eslint-disable-next-line import/no-default-export
export default defineConfig({
    e2e: nxE2EPreset(__dirname),
});
