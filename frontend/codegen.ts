
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:4000/graphql",
    documents: "src/api/graphql/**/*.graphql",
    generates: {
        "src/api/__generated__/graphql/": {
            preset: "client",
            presetConfig: {
                fragmentMasking: false,
            },
            plugins: [],
        },
    }
};

export default config;
