import { NextResponse, NextRequest } from "next/server";

/**
 * Global error handler utility
 * Use this in API routes to handle errors consistently
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  requestId?: string;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number = 500,
    message: string = "Internal Server Error"
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleError(
  error: unknown,
  requestId?: string
): NextResponse<ApiResponse> {
  console.error(`[${requestId}] Error:`, error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        requestId,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof SyntaxError) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request format",
        requestId,
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: "An unexpected error occurred",
      requestId,
    },
    { status: 500 }
  );
}

export function successResponse<T>(
  data: T,
  requestId?: string
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      requestId,
    },
    { status: 200 }
  );
}
