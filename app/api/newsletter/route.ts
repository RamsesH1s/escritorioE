import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { message: 'Incomplete data. Email is required.' },
                { status: 400 }
            );
        }

        // In a real application, you would save this to a database or subscribe to an email list here.
        console.log('New newsletter subscription:', email);

        return NextResponse.json(
            { message: 'Inscrito com sucesso!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter API error:', error);
        return NextResponse.json(
            { message: 'Ocorreu um erro interno de servidor. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}
