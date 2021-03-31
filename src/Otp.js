import React from 'react';

const Otp = () => {

    if ('OTPCredential' in window) { 
        window.addEventListener('DOMContentLoaded', e => {
          const ac = new AbortController();
          navigator.credentials.get({
            otp: { transport:['sms'] },
            signal: ac.signal
          }).then(otp => {
            alert(otp.code)
          }).catch(err => {
            console.log(err)
          });
        })
      } else {
        alert('WebOTP not supported!.')
      }

    return (
        <form action="/verify-otp" method="POST">
            <label>OTP (one time password):</label><br />
            <input type="text" className="input-number" autoComplete="one-time-code" inputMode="numeric" required />
            <button className="otp-btn" type="submit">VERIFICA</button>
        </form>
    )
}

export default Otp;