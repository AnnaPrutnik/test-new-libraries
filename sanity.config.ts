"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { SUPPORTED_LANGUAGES } from "./src/sanity/constants";

export default defineConfig({
    basePath: "/studio",
    projectId,
    dataset,
    // Add and edit the content schema in the './src/sanity/schemaTypes' folder
    schema,
    plugins: [
        structureTool({ structure }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        internationalizedArray({
            languages: SUPPORTED_LANGUAGES,
            defaultLanguages: ["ua"],
            fieldTypes: ["string", "text", "portableTextSimple"],
        }),
    ],
});
