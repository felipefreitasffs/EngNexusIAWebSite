// This API route has been deprecated and is no longer in use.
// The application now uses a direct client-side submission to Formspree
// for both the early access and suggestion forms.
// This file can be safely removed from the project.

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { message: "This endpoint is deprecated and no longer functional." },
    { status: 410 } // 410 Gone
  );
}
