import { Suspense, use } from "react";
import QRCodeN from "qrcode";

export const QRCode = (props: { value: string }) => {
  const { value } = props;
  const p = QRCodeN.toString(value, { type: "svg", margin: 4, width: 128 });
  return (
    <figure className="qr-code">
      <Suspense>
        <QRCodeInner promise={p} />
      </Suspense>
    </figure>
  );
};

export const QRCodeInner = (props: { promise: Promise<string> }) => {
  const svg = use(props.promise);
  return <span dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default QRCode;
