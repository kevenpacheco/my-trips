import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.com"
        openGraph={{
          url: 'https://my-trips.com',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.com/image/cover/png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>

      <Map places={places} />
    </>
  )
}
