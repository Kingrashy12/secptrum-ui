import { getData } from '@/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getData`SELECT * FROM showcase`;

    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NextResponse.json((error as any).message, { status: 500 });
  }
}
