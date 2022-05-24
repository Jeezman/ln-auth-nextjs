import { QRCodeSVG } from 'qrcode.react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const QR = () => {
  const { lnData } = useContext(AuthContext);
  return (
    <div>
      <QRCodeSVG
        value={lnData.encoded.toLocaleUpperCase()}
        includeMargin
        size={256}
      />
      <p>
        <em>Scan the code above with an LNURL-enabled wallet</em>
      </p>
    </div>
  );
};

export default QR;
