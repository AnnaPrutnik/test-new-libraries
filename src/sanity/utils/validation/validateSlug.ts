import { Slug } from "../../types";

export const validateSlug = (maxLength: number) => {
    return (value: Slug | undefined) => {
        const currentSlug = value && value.current;
        if (!currentSlug) {
            return true;
        }

        if (currentSlug.length >= maxLength) {
            return `Посилання повинно бути не більше ${maxLength} символів`;
        }

        return true;
    };
};
