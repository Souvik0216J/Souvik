import { Connect } from "@/db/dbConfig"
import Msg from "@/models/msgModel"
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    await Connect()

    try {
        const reqBody = await request.json()
        const { name, email, message } = reqBody

        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
        const istTime = date.toLocaleString('en-IN', options);

        const newMsg = new Msg({
            name: name,
            email: email,
            message: message,
            sendDate: istTime
        })

        await newMsg.save()

        return NextResponse.json({
            message: "Success",
            success: true,
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}