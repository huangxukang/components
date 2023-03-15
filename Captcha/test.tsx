import { useCallback, useRef } from "react";
import Captcha from "./index";

export default function Test() {
    const captchaRef: any = useRef<HTMLCanvasElement>();

    const handleChange = useCallback((captcha: string) => {
        console.log(captcha);
    }, []);

    const handleClick = () => (captchaRef as any).current.refresh();

    return (
        <div>
            <Captcha ref={captchaRef} onChange={handleChange} />
            <button onClick={handleClick}>更换验证码</button>
        </div>
    );
}
