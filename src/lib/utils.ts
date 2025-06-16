// lib/utils.ts
export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function applyAnimation(condition: boolean, animationClass: string) {
    return condition ? animationClass : "";
}
