import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Egress Experts - Ottawa Basement Window Specialists'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#38412F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#EFE4B5',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Egress Experts
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#8D9A8C',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Basement Window & Door Egress Specialists
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#CCCBC5',
            textAlign: 'center',
            marginTop: 40,
          }}
        >
          Ottawa, Ontario
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
