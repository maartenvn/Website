/**
 * Convert a given string to a color value.
 * @param string Color, as a string
 */
export function stringToColor(string: String) {
    switch (string.toLowerCase()) {
        case "primary": {
            return `var(--color-primary)`;
        }

        default: {
            return string;
        }
    }
}
