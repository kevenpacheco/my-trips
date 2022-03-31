import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
