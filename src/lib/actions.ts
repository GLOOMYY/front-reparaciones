import { login } from "@/services/auth"

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await login('credentials', formData)
    } catch (error) {
        if (error) {
            return `Error: ${error}`
        }
    }
}