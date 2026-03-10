import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Incomplete data. Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // In a real application, you would save this to a database or send an email here.
        console.log('Received contact message:', body);

        return NextResponse.json(
            { message: 'Mensagem enviada com sucesso!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { message: 'Ocorreu um erro interno de servidor. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}
