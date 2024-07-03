import {useColors} from "./colors";

export const useDirectories = () => {

    const colors = useColors();

    return {
        about: `[${colors.purple}about]`,
        projects: `[${colors.purple}projects]`,
        secret: `[${colors.purple}secret]`
    }
}