import { NextResponse } from 'next/server';
import axios from 'axios';
import lodash from 'lodash';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url, options } = body;

    // Vulnerability 1: Prototype Pollution via lodash.merge
    // Using vulnerable lodash version 4.17.15
    const config = { timeout: 5000 };
    if (options) {
      lodash.merge(config, options);
    }

    // Vulnerability 2: SSRF via axios
    // Using vulnerable axios version 0.21.1
    // The server makes a request to a user-provided URL without validation
    const response = await axios.get(url, config);

    return NextResponse.json({
      status: 'success',
      data: response.data ? (typeof response.data === 'string' ? response.data.substring(0, 200) + '...' : response.data) : 'No data',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: error.message
    }, { status: 500 });
  }
}
