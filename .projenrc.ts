import { KikodaOpenSourceProject } from '@kikoda/projen-templates';
import { YamlFile } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { ArrowParens, EndOfLine, TrailingComma } from 'projen/lib/javascript';
import { TypeScriptProject } from 'projen/lib/typescript';

const project = new TypeScriptProject({
  name: 'kikoda-delivery',
  description: 'Collection of useful things',
  authorName: 'Kikoda, LLC',
  authorEmail: 'platform@kikoda.com',
  repository: 'https://github.com/KikodaCode/kikoda-delivery.git',
  defaultReleaseBranch: 'main',
  keywords: ['configuration', 'websites', 'cicd'],
  stability: 'experimental',
  license: 'Apache-2.0',
  projenrcTs: true,
  devContainer: true,
  vscode: true,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.AVOID,
      endOfLine: EndOfLine.LF,
    },
  },
  tsconfig: {
    compilerOptions: { esModuleInterop: true },
    include: ['src/typescript-function/esbuild.js'],
  },
  devDeps: ['@kikoda/projen-templates'],
  packageName: '@kikoda/delivery',
  gitignore: [],
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
  pullRequestTemplate: false,
  codeCov: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['projen-workflows[bot]'],
  },
  jestOptions: {
    jestConfig: {
      coveragePathIgnorePatterns: ['/node_modules/'],
    },
  },
});

// Run Build workflow on push to main to update base code coverage
const buildWorkflow = project.github?.tryFindWorkflow('build');
buildWorkflow?.on({
  push: { branches: ['main'] },
});

new YamlFile(project, 'codecov.yml', {
  obj: {
    coverage: {
      status: {
        patch: true,
      },
    },
  },
});

new KikodaOpenSourceProject(project, {
  title: 'Kikoda delivery library',
});

project.synth();
