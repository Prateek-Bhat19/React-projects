import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrcode(){
        setQrCode(input)
    }
  return (
    <div>
      <h1>QR code Generator</h1>
      <div><input
      onChange={(e) => setInput(e.target.value)}
      type='text' name='qr-code' placeholder='enter your value here' />
      <button disabled={input && input.trim() !== '' ? false:true} onClick={handleGenerateQrcode}>Generate</button></div>
      <div>
        <QRCode 
        id="qr-code-value"
        value={qrCode}
        />
      </div>
    </div>
  )
}

export default QRCodeGenerator
