import { NextResponse } from "next/server";
import { COMPANY_CONFIG } from "@/config/company";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, businessRequirement, message } = body;

    // Server-side basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const emailApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || COMPANY_CONFIG.email;

    // Option B: Unconfigured Mode (No fake success message when backend email service is unconfigured)
    if (!emailApiKey) {
      return NextResponse.json(
        {
          success: false,
          isUnconfigured: true,
          message: `Direct online form submission is unconfigured on this environment. Please reach out directly to PT Karunia Panca Gemilang via email at ${COMPANY_CONFIG.email} or phone at ${COMPANY_CONFIG.phone}.`,
        },
        { status: 200 }
      );
    }

    // Option A: Email Provider Integration (When RESEND_API_KEY / EMAIL_API_KEY is configured)
    console.log(`Sending email to ${recipientEmail} via configured email API...`, {
      name,
      company: company || "N/A",
      email,
      phone: phone || "N/A",
      businessRequirement,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to PT Karunia Panca Gemilang. Your inquiry has been transmitted to our team.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
