import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // For now, we'll use a simple approach with Google Apps Script
    // You'll need to create a Google Apps Script web app to handle the actual sheet writing
    const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!GOOGLE_APPS_SCRIPT_URL) {
      // Fallback: just log the email for now
      console.log('Email submitted:', email);
      return NextResponse.json({ 
        success: true, 
        message: 'Email received successfully' 
      });
    }

    // Send to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to save to Google Sheets');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email saved successfully' 
    });

  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json(
      { error: 'Failed to save email' }, 
      { status: 500 }
    );
  }
}
