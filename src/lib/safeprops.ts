import type { HTMLAttributes } from "react"
import type { VanillaProps } from "./props"

/**
 * Converts props to a safer version combining the old ones with a forced default. This can include `className`.
 * @param props Original props/attributes
 * @param className Default styles
 * @returns New props/attributes
 */
export function toSafeProps<T>(props: HTMLAttributes<T> | VanillaProps, className: string): HTMLAttributes<T> | T {
    const safeProps = { ...props, }
    if (safeProps.className) safeProps.className = `${className} ${safeProps.className}`
    else safeProps.className = className
    return safeProps
}
