import { ALL_TEXT_VALUE } from "./actionTypes";

export const addTextValue = formData => {
    return {
        type: ALL_TEXT_VALUE,
        data: formData,
    };
};