import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis
          lorem vitae elit blandit ultrices. Vivamus eleifend tortor erat, quis
          ullamcorper diam tempus in. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus fermentum tellus sed quam lacinia, ut dapibus
          orci suscipit. Sed efficitur libero ac dignissim faucibus. Donec mi
          ipsum, condimentum eu laoreet vitae, pretium quis lectus. Duis tempus
          pulvinar risus non hendrerit. Maecenas et commodo lacus, eget viverra
          massa. In hac habitasse platea dictumst. Ut quis justo lectus. Donec
          ac turpis sit amet dolor sollicitudin elementum eu at augue. Nunc sit
          amet iaculis tellus. Nunc quis arcu neque.
        </p>
      </S.Body>
    </S.Content>
  )
}
export default AboutTemplate
