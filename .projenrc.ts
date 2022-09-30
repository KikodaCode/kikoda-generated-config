import { KikodaOpenSourceProject } from '@kikoda/projen-templates';
import { YamlFile } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { ArrowParens, EndOfLine, TrailingComma } from 'projen/lib/javascript';
import { TypeScriptProject } from 'projen/lib/typescript';

const project = new TypeScriptProject({
  name: 'kikoda-generated-config',
  description: 'Generate a config file from a base config and a set of config layers',
  authorName: 'Kikoda, LLC',
  authorEmail: 'platform@kikoda.com',
  repository: 'https://github.com/KikodaCode/kikoda-delivery.git',
  defaultReleaseBranch: 'main',
  keywords: ['configuration', 'websites', 'cicd', 'webpack', 'react'],
  stability: 'experimental',
  license: 'Apache-2.0',
  projenrcTs: true,
  devContainer: true,
  vscode: true,
  prettier: true,
  releaseToNpm: true,
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
  bundledDeps: ['md5', 'lodash'],
  tsconfig: {
    compilerOptions: { esModuleInterop: true },
  },
  devDeps: ['@kikoda/projen-templates', '@types/lodash', '@types/md5', '@types/uuid', 'uuid'],
  peerDeps: [],
  packageName: '@kikoda/generated-config',
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
      coveragePathIgnorePatterns: ['/node_modules/', 'test/config'],
    },
  },
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
  title: 'Kikoda Generated Config',
});

project.synth();
