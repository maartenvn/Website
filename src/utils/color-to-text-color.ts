/**
 * Get the text color for a given background-color.
 * @param string Background color, as a string
 * @param darkColor Dark text color
 * @param lightColor Light text color
 */
export function colorToTextColor(
    string: String,
    darkColor: string = "black",
    lightColor: string = "white"
) {
    const color = string.charAt(0) === "#" ? string.substring(1, 7) : string;
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
}
