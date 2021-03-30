import React from 'react';

const Otp = () => {

    // const generateOtp = () => {
    //     let digits = "0123456789";
    //     let OTP = '';
    //     for (let i = 0; i < 4; i++){
    //         OTP += digits[Math.floor(Math.random() * 10)]
    //     }
    //     return OTP;
    // }
    // const sms = 'Il tuo codice. @web-otp.glitch.me #' + generateOtp()

    if ('OTPCredential' in window) {
        window.addEventListener('DOMContentLoaded', e => {
          const input = document.querySelector('input[autocomplete="one-time-code"]');
          if (!input) return;
          // Cancel the Web OTP API if the form is submitted manually.
          const ac = new AbortController();
          const form = input.closest('form');
          if (form) {
            form.addEventListener('submit', e => {
              // Cancel the Web OTP API.
              ac.abort();
            });
          }
          // Invoke the Web OTP API
          navigator.credentials.get({
            otp: { transport:['sms'] },
            signal: ac.signal
          }).then(otp => {
            input.value = otp.code;
            // Automatically submit the form when an OTP is obtained.
            if (form) form.submit();
          }).catch(err => {
            console.log(err);
          });
        });
      }

 return(
    <form action="/verify-otp" method="POST">
        <label>OTP (one time password):</label><br />
        <input type="text" className="input-number" autoComplete="one-time-code" inputMode="numeric" required/>
        <button className="otp-btn" type="submit">VERIFICA</button>
    </form>
 )
}

export default Otp;