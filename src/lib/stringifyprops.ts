import type { HTMLAttributes } from "react"
import type { VanillaProps } from "./props"

/**
 * Stringifies HTML attributes or key-value string pairs into something like the following:
 * 
 * ```
 * silly="false" disabled=""
 * ```
 * 
 * @param props Original props/attributes
 * @returns Stringified props
 */
export function stringifyProps<T>(props: HTMLAttributes<T> | VanillaProps) {
    const flatProps = Object.entries(props).map(([k, v]) => `${k}="${v}"`)
    return flatProps.length === 0 ? "" : flatProps.join(" ")
}
