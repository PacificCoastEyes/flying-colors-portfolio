import axios from "axios";
import { ContactFormData } from "../components/contact/ContactForm";

export const sendEmail = async (
    contactFormData: ContactFormData
): Promise<boolean> => {
    const res = await axios.post(
        "https://flyingcolors-email-sender.azurewebsites.net/api/SendEmail",
        contactFormData
    );
    return await res.data.ok;
};
