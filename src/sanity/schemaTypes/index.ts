import {
    type ArrayDefinition,
    type DocumentDefinition,
    type ObjectDefinition,
    type SchemaTypeDefinition,
} from "sanity";

import { portableTextSimpleType } from "./portableText/portableTextSimple";
import { faqType } from "./documents/faqType";
import { linkEmailType } from "./objects/link/linkEmailType";
import { linkExternalType } from "./objects/link/linkExternalType";
import { linkInternalType } from "./objects/link/linkInternalType";
import { imageType } from "./objects/global/imageType";

const portableText: ArrayDefinition[] = [portableTextSimpleType];

const annotations: ObjectDefinition[] = [
    linkEmailType,
    linkExternalType,
    linkInternalType,
];

const objects: ObjectDefinition[] = [imageType];
const documents: DocumentDefinition[] = [faqType];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [...annotations, ...documents, ...portableText, ...objects],
};
