export interface AppKeyboardEvent {
    scanCode: number
    timestamp: number
    isKeyDown: boolean
    isKeyUp: boolean
    isExtendedKey: boolean
    alt: boolean
    control: boolean
    handled: boolean
    keyCode: number
    keyValue: number
    keyData: number
    modifiers: number
    shift: boolean
    suppressKeyPress: boolean
}
