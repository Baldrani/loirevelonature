import { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptcha() {
    const recaptchaRef: any = createRef();

    const onChange = (a: any) => {
        console.log(a);
    };

    const asyncScriptOnLoad = () => {
        console.log("Google recaptcha loaded just fine");
    };

    return <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.RECAPTCHA_SITE_KEY || ""} onChange={onChange} asyncScriptOnLoad={asyncScriptOnLoad} />;
}
