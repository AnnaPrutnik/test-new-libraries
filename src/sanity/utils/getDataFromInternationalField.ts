import {
    InternationalizedArrayPortableTextSimple,
    InternationalizedArrayString,
    InternationalizedArrayText,
} from "../types";

export const getUkrainianTitleFromIntArrays = (
    title: InternationalizedArrayString | InternationalizedArrayText,
    fallbackMessage: string = "Не вказано"
) => {
    if (!title) {
        return fallbackMessage;
    }
    const uaTitle =
        title.find(item => item._key === "ua")?.value || fallbackMessage;
    return uaTitle;
};

export const getUkrainianBlockFromIntArrays = (
    blocks: InternationalizedArrayPortableTextSimple,
    fallbackMessage: string = "Не вказано"
) => {
    if (!blocks) {
        return fallbackMessage;
    }
    const uaBlocks =
        blocks.find(item => item._key === "ua")?.value || fallbackMessage;
    return uaBlocks;
};

export const getUkrainianTitleFromBlocks = (
    title: InternationalizedArrayPortableTextSimple
) => {
    const uaTitleBlock = title?.find(block => block._key === "ua")?.value;

    if (uaTitleBlock) {
        return (
            uaTitleBlock
                .flatMap(({ children }) =>
                    children?.map(child => child.text || "")
                )
                .join(" ") || "Не вказано"
        );
    }
    return "Не вказано";
};
