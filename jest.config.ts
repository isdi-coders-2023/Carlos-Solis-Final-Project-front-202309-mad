/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    'src/main.tsx',
    'src/vite-env.d.ts',
    'src/services/local.storage.ts',
    'src/config.ts',
    'src/store/store.ts',
    'src/components/app/app.tsx',
    'src/services/images.ts',
    'src/pages/admin.panel/admin.panel.tsx',
    'src/pages/login/login.tsx',
    'src/pages/register/register.tsx',
  ],
};
