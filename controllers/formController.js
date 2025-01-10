const formModel = require('../models/formModel');
const transporter = require('../config/emailConfig');
require('dotenv').config();
const submitForm = async (req, res) => {
  try {
    const { name, designation, organization, email, phone_number, message, form_type } = req.body;

    // Save form data in the database
    const result = await formModel.createForm({
      name,
      designation,
      organization,
      email,
      phone_number,
      message,
      form_type
    });

    // Determine email subject and message based on form_type
    let subject = '';
    if (form_type === 1) {
      subject = 'Thank You for Contacting Us!';
    // } 
    }

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: email,                   // Receiver email (user's email)
      subject: subject,
      html: `
         <div style="display: flex;flex-direction: row;justify-content: center;">
    <div style="background-color: #17BE81;padding: 10px;border-radius: 10px;max-width: 500px;">
       <p style="font-size: 20px;border-bottom:2px solid #fff"><b>Thank you for contacting us! </b><p> 
        <p> We’ve received your inquiry and will get back to you shortly.</p>
       <p>Our team is here to assist you with any questions you have. </p>
       <p>If you need immediate assistance, feel free to reply to this email or reach us at 
       </p>
       <p><b>Email:</b><a href="mailto:info@oviyamedsafe.com" style="color: black;">info@oviyamedsafe.com</a>
       </p>
       <p><b>Phone:</b><a href="tel:+914223502276" style="color: black;">+91 422 3502276</a></p>
       <p>Looking forward to connecting with you!</p>
    </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Form submitted successfully and email sent', result });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = { submitForm };
