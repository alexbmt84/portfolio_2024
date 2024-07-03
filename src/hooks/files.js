import {useColors} from "./colors";

export const useFiles = () => {

    const colors = useColors();

    return {
        cv: `[${colors.white}cv.txt]`
    }
}