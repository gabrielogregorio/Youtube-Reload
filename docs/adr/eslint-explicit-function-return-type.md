# ESLint @typescript-eslint/explicit-function-return-type

Date: September 9, 2023

## Context

Just a test

## Decision

The `@typescript-eslint/explicit-function-return-type` rule was removed from the project, in order to test scalability. I believe that you can speed up development by having all the security of typescript.

```json
"@typescript-eslint/explicit-function-return-type": "error",
"import/no-unused-modules": [
     1,
     {
     "unusedExports": true
     }
],
```

and remove

```json
"no-null/no-null": ["error"],
```

## Consequences

Let's find out