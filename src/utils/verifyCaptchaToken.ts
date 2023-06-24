import axios from "axios";

export const verifyCaptchaToken = async (token: string): Promise<boolean> => {
    const res = await axios.post(
        "https://recaptchaverifier.azurewebsites.net/api/VerifyCaptcha",
        token
    );
    return await res.data.success;
};
