import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The Graine Ledger';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: '#0d0800',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                    <div style={{ color: '#F97316', fontSize: 100, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
                        THE GRAINE LEDGER
                    </div>
                </div>
                <div style={{ fontSize: 40, color: '#fbbf24', marginTop: 20 }}>
                    The First NFT-Mediated Crypto Distillery
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
