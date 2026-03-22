// BG & FG

export type ThemeColor =
    | "transparent"
    | "primary"
    | "secondary"
    | "accent"

export type BackgroundType = ThemeColor
export type ForegroundType = ThemeColor
export type BorderColor = ThemeColor

// Border

export type BorderRoundedness =
    | "none"
    | "squircle"
    | "full"

export type BorderConfig = {
    color?: BorderColor
    rounded?: BorderRoundedness
}

// Generator

export type StyleGenerator = {
    background?: BackgroundType
    foreground?: ForegroundType
    border?: BorderConfig
}

/**
 * Generates TailwindCSS styles resembling FloorUI from a configuration.
 * @param generator Generator configuration
 */
export function generateStyles(generator: StyleGenerator, extra?: string) {
    let classes: string[] = []
    if (generator.background) classes.push(`bg-${generator.background}`)
    if (generator.foreground) classes.push(`text-t${generator.foreground}`)

    if (generator.border) {
        if (generator.border.color) classes.push(`border-[.1rem] border-${generator.border.color}`)

        if (generator.border.rounded) switch (generator.border.rounded) {
            case "full":
                classes.push("rounded-full")
                break
            case "squircle":
                classes.push("rounded")
                break
            default:
                break
        }
    }

    return classes.length === 0 ? extra || "" : `${classes.join(" ")}${extra ? ` ${extra}` : ""}`
}
