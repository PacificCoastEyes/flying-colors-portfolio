import { useState } from "react";
import { verifyCaptchaToken } from "../../utils/verifyCaptchaToken";
import { sendEmail } from "../../utils/sendEmail";
import {
    Alert,
    Button,
    FloatingLabel,
    Form,
    FormGroup,
    Spinner,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/bootstrap.css";

export interface ContactFormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
}

function ContactForm() {
    const [contactFormData, setContactFormData] = useState<ContactFormData>();
    const [probhibitSend, setProhibitSend] = useState<boolean>(true);
    const [captchaToken, setCaptchaToken] = useState<string | null>();

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertVariant, setAlertVariant] = useState<string>();
    const [alertMessage, setAlertMessage] = useState<string>();

    const [showSpinner, setShowSpinner] = useState<boolean>(false);

    const handleChange: React.ChangeEventHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const target: HTMLInputElement = e.target as HTMLInputElement;
        setContactFormData({ ...contactFormData, [target.id]: target.value });
    };

    const handleSubmit: React.FormEventHandler = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setShowAlert(false);
        setShowSpinner(true);
        try {
            const verified = await verifyCaptchaToken(captchaToken!);
            if (verified) {
                setProhibitSend(true);
                const sent = await sendEmail(contactFormData!);
                if (sent) {
                    setAlertVariant("success");
                    setAlertMessage("Message sent successfully!");
                    setShowAlert(true);
                } else {
                    throw new Error(
                        "Email could not be sent. Please try again later."
                    );
                }
            } else {
                throw new Error("ReCAPTCHA validation failed");
            }
        } catch (e) {
            console.error(e);
            let message;
            if (e instanceof Error) {
                message = e.message;
            } else {
                message = String(e);
            }
            setAlertVariant("danger");
            setAlertMessage(message);
            setShowAlert(true);
        } finally {
            setShowSpinner(false);
        }
    };

    return (
        <div id="contact-form" className="w-100">
            <h4 className="mb-3">Send me a message</h4>
            <Form onSubmit={handleSubmit}>
                <div id="contact-form-body" className="d-flex mb-3">
                    <div id="contact-form-body-left" className="w-50">
                        <Form.Group className="d-flex justify-content-between mb-3">
                            <FloatingLabel
                                label="First Name"
                                className="w-50 me-2"
                            >
                                <Form.Control
                                    id="firstName"
                                    type="text"
                                    value={contactFormData?.firstName || ""}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Last Name"
                                className="w-50 ms-2"
                            >
                                <Form.Control
                                    id="lastName"
                                    type="text"
                                    value={contactFormData?.lastName || ""}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <FloatingLabel label="Email" className="mb-3">
                            <Form.Control
                                id="email"
                                type="email"
                                value={contactFormData?.email || ""}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </FloatingLabel>
                        <FormGroup className="w-100 d-flex align-items-center">
                            <label htmlFor="phone" className="me-2">
                                Phone
                            </label>
                            <PhoneInput
                                country="il"
                                inputProps={{ id: "phone" }}
                                value={contactFormData?.phone || ""}
                                onChange={phone =>
                                    setContactFormData({
                                        ...contactFormData,
                                        phone,
                                    })
                                }
                            />
                        </FormGroup>
                    </div>
                    <div id="contact-form-body-right" className="w-50 ms-3">
                        <FloatingLabel label="Message" className="h-100">
                            <Form.Control
                                as="textarea"
                                id="message"
                                value={contactFormData?.message || ""}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                            />
                        </FloatingLabel>
                    </div>
                </div>
                <div
                    id="contact-form-footer"
                    className={`d-flex justify-content-${
                        showAlert ? "between" : "end"
                    } align-items-center`}
                >
                    {showAlert && (
                        <Alert variant={alertVariant}>{alertMessage}</Alert>
                    )}
                    <div className="d-flex justify-content-end align-items-center">
                        {showSpinner && (
                            <Spinner variant="primary" className="me-3" />
                        )}
                        <ReCAPTCHA
                            sitekey={
                                process.env
                                    .REACT_APP_RECAPTCHA_SITE_KEY as string
                            }
                            onChange={token => {
                                setCaptchaToken(token);
                                setProhibitSend(token ? false : true);
                            }}
                        />
                        <Button
                            type="submit"
                            className="ms-3"
                            disabled={probhibitSend}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default ContactForm;
