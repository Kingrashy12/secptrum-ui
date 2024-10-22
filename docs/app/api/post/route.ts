import { getData } from '@/actions';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the incoming request body
    const { name, imageUrl, liveDemoUrl, description } = body;

    // Validation for required fields
    if (!name || !imageUrl || !liveDemoUrl || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Execute the query using the getData function
    const result = await getData`
    INSERT INTO showcase (name, imageUrl, liveDemoUrl, description) 
    VALUES (${name}, ${imageUrl}, ${liveDemoUrl}, ${description})
  `;

    // Return a success response
    return NextResponse.json(result, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NextResponse.json((error as any).message, { status: 500 });
  }
}
