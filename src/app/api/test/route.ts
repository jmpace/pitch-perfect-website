import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API is working',
    environment: {
      hasGoogleScriptUrl: !!process.env.GOOGLE_APPS_SCRIPT_URL,
      googleScriptUrl: process.env.GOOGLE_APPS_SCRIPT_URL ? 'Set' : 'Not set',
      nodeEnv: process.env.NODE_ENV
    },
    timestamp: new Date().toISOString(),
    deployment: 'cloudflare-redeploy-trigger'
  });
}
