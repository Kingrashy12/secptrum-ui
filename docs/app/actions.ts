'use server';
import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const DATABASE_URL = process.env.DATABASE_URL as string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getData(query: TemplateStringsArray, ...values: any[]) {
  const sql = neon(DATABASE_URL);
  const result = await sql(query, ...values);
  return result;
}
