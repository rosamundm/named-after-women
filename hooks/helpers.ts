export const getImpressumAddress = (): string[] | undefined => {
    if (process.env.IMPRESSUM_ADDRESS) {
        return process.env.IMPRESSUM_ADDRESS.split(",")
    }
}

export const getImpressumEmail = (): string | undefined => process.env.IMPRESSUM_EMAIL