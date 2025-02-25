export async function sendVerificationCode(verificationCode, email, res) {
  try {
    const message = generateVerificationOtpEmailTemplate();
    sendEmail({
      email: email,
      subject: "Verification Code (Radhe shyam library management system)",
      message: message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "verification code failed to send",
    });
  }
}
