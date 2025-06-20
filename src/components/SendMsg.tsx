"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Label } from "./ui/labels";
import { Input } from "./ui/input";
import axios from "axios"
import { LoaderIcon } from "lucide-react";

export function SendMsg() {
    const [loading, setLoading] = React.useState(false)
    const [sendMsgDone, setSendMsgDone] = React.useState(false)

    const [msg, setMsg] = React.useState<{
        name: String;
        email: String;
        message: String;
    }>({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await SendMsg();
    }

    const SendMsg = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/sendMsg", msg)

            if (response.status === 200) {
                setSendMsgDone(true)
                setLoading(false)
            }
        }
        catch (error) {
            console.log("Sending Message Failed.", error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" type="text" onChange={(e) => setMsg({ ...msg, name: e.target.value })} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email" type="email" onChange={(e) => setMsg({ ...msg, email: e.target.value })} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="project">Message</Label>
                    <Input multiline id="text" placeholder="Message" type="text" onChange={(e) => setMsg({ ...msg, message: e.target.value })} />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br font-medium text-white  bg-zinc-800 from-zinc-900 to-zinc-900 shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] hover:cursor-pointer"
                    type="submit"
                >
                    {loading ? (
                        <>
                            <LoaderIcon className="inline w-6 h-6 text-blue-400 animate-spin" /> Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                        </>
                    )
                    }
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
