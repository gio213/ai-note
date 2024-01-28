import { SignUp } from "@clerk/nextjs";
import {Metadata} from "next"


export const metadata:Metadata = {
    title: "FlowBrain-SignUp",
}

export default function SignUpPage() {
    return(<div>
        <div className="flex h-screen items-center justify-center">
            <SignUp appearance={{ variables: { colorPrimary: "#0f172a" } }} />
        </div>
    </div>)

}