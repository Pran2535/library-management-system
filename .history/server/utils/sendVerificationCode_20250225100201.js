export async function sendVerificationCode(verificationCode, email, res) {
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "verification code failed to send",
    });
  }
}
