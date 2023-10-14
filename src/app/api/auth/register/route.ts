import { sql } from "@vercel/postgres";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";


export async function POST (request: Request) {
    try {
        const { email, password } = await request.json();
        console.log({email, password})

            const hashedPassword = await hash(password, 10)
            const response = await sql`
            INSERT INTO users (email, password)
            VALUES (${email}, ${hashedPassword})
            `

    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message: "succes"})
}

