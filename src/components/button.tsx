import type { ButtonHTMLAttributes } from "react"
import type { VanillaProps } from "../lib/props"
import { generateStyles } from "../lib/stylegen"
import { toSafeProps } from "../lib/safeprops"
import { stringifyProps } from "../lib/stringifyprops"

const className = generateStyles({
    background: "transparent",
    foreground: "accent",
    border: {
        color: "accent",
        rounded: "full",
    },
})

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { children, ...rest } = props
    const safeProps = toSafeProps(rest, className) as ButtonHTMLAttributes<HTMLButtonElement>
    return <button {...safeProps}>{children}</button>
}

export function strButton(props: VanillaProps) {
    const safeProps = toSafeProps(props, className) as VanillaProps
    return `<button ${stringifyProps(safeProps)}></button>`
}
