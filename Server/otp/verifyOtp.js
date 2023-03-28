const verifyOtp = (req, res, next) => {
    const { otp } = req.body;
    if (!otp) {
      return res.status(400).json({ message: "Please enter the OTP" });
    }
    if (otp !== req.session.otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    delete req.session.otp;
    next();
  };
  
  module.exports = verifyOtp;