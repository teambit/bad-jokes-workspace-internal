# A Bit Workspace for testing the pre-release

**IMPORTANT** the pre-release binary is called `bbit`, not `bit`. **IMPORTANT**

See docs [here](https://bit-new-docs.netlify.app/docs/workspace/overview).

## Install pre-release

Bit is going to be published to a different package, so install from the new name:

```sh
npm i -g @teambit/bit
yarn global add @teambit/bit
```

> Installation is slow. we'll be removing a bunch of deps soon.

## Import / export / tag still experimental

There are performance issues with the three commands. Use this repository to experiment with Bit's local workflow.

- bit.dev will not accept exporting of components from this repository.
- Importing components from bit.dev to this repo may also not work properly.
- Tag is aimed for running during CI. Please wait for this [capability](https://github.com/teambit/bit/issues/2712)

## Setup instructions

1. Clone this repo
1. `cd` to the root directory and run `bbit install`
1. Open the code in your favorite editor
1. run `bbit start`

## workspace operations

### If using VSCode

Configure node module debug as shows in this issue - https://github.com/microsoft/vscode/issues/102042#issuecomment-656402933

### Create new components

To create a new component create the component's directory and it's containing files.

- must create a barrel file named `index.ts`
- create `*.docs.tsx` to manually control documentation
- create `*.composition.tsx` to create composition for development
- create `*.specs.ts` for creating jest tests.

when dir created, run `bit add path/to/new/component --namespace <namespace>`.

see new component in the web ui.

### Run dev server

```sh
bbit start
```

### Run tests

```sh
bbit test
```

### Adding dependency

1. open `workspace.jsonc` file
1. add new dependency and version
1. run `bbit install`

### Known issues

1. No ability to import/export components.
1. Missing component scaffolding (`bbit create`).
1. Performance issues in the component showcase.
1. Documentation for creating your environment (example added in the repository).
1. No automated documentation generation for node-components.
1. No test-summary in the workspace UI.
