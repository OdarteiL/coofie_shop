import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

window._config = {
  cognito: {
      userPoolId: 'us-east-1_Yq651NMuk', // e.g. us-east-2_uXboG5pAb
      userPoolClientId: '6quk9cu2c35mm9geu6idug07ol', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
      region: 'us-east-1' // e.g. us-east-2
  },
  api: {
      invokeUrl: 'https://main.d3dz21bixr25l3.amplifyapp.com/' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
  }
};