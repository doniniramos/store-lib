// eslint-disable-next-line no-use-before-define

import { Box, Flex, Grid, Divider, Heading } from '@chakra-ui/core'

import ActionButton from '../components/ActionButton'
import ClientImage from '../components/ClientImage'
import ContentSection from '../components/ContentSection'
import ServiceItem from '../components/ServiceItem'
import TestimonialBox from '../components/TestimonialBox'
import WhatsappButton from '../components/WhatsappButton'

import {
  AnalyticsIcon,
  CertificateIcon,
  ComputerIcon,
  ListIcon,
  PuzzleIcon,
  TrustIcon
} from '../assets/Icons'
import Utils from '../utils/components_utils'

export default function Home(): JSX.Element {
  const iconSize = '55'
  return (
    <Flex direction="column" width="100%">
      <WhatsappButton text="Nos contate" />
      <ContentSection>
        <Heading
          marginBottom={6}
          fontSize={['6xl', '4xl']}
          letterSpacing="tight"
        >
          Gestão em Tecnologia da Informação
        </Heading>
        <Heading fontSize={['2xl', 'xl']} fontWeight="normal" marginBottom={6}>
          Somos uma empresa que transforma o ambiente de tecnologia em
          ferramenta de potencialização de resultados dos nossos clientes
        </Heading>
        <ActionButton
          backgroundColor="yellow.500"
          color="gray.800"
          destination="http://contact.infoassist.com.br"
          fontSize={['xl', 'md']}
          text="Agende uma consultoria"
          target="_blank"
        />
      </ContentSection>

      <ContentSection
        alignment="center"
        backgroundColor="white"
        color="black"
        direction={['column', 'row']}
      >
        <Box marginRight={[0, 20]}>
          <Heading
            marginBottom={6}
            fontSize={['6xl', '4xl']}
            textAlign={['center', 'left']}
          >
            O que oferecemos
          </Heading>
          <Heading
            fontSize={['2xl', 'xl']}
            fontWeight="normal"
            textAlign={['center', 'left']}
          >
            Nós transformamos o seu ambiente de tecnologia em uma ferramenta que
            potencializa os seus resultados
          </Heading>
        </Box>
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
          gap={6}
          marginTop={6}
        >
          <ServiceItem title="Monitoramento">
            <AnalyticsIcon size={iconSize} />
          </ServiceItem>
          <ServiceItem title="Manutenção Preventiva">
            <ComputerIcon size={iconSize} />
          </ServiceItem>
          <ServiceItem title="Manutenção Corretiva">
            <PuzzleIcon size={iconSize} />
          </ServiceItem>
          <ServiceItem title="Serviços Gerenciados">
            <ListIcon size={iconSize} />
          </ServiceItem>
          <ServiceItem title="Consultoria em TI">
            <CertificateIcon size={iconSize} />
          </ServiceItem>
          <ServiceItem title="VPN">
            <TrustIcon size={iconSize} />
          </ServiceItem>
        </Grid>
      </ContentSection>
      <Box backgroundColor="white" paddingX={Utils.defaultPaddingX}>
        <Divider />
      </Box>
      <ContentSection
        alignment="center"
        backgroundColor="white"
        color="black"
        direction="column"
      >
        <Heading
          marginBottom={[6, 0]}
          fontSize={['6xl', '4xl']}
          textAlign="center"
        >
          Nossos clientes
        </Heading>
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
          gap={6}
          marginTop={[8, 12]}
        >
          <ClientImage src="/images/ecoa.png" className="gray-900" />
          <ClientImage src="/images/rockfeller.png" className="gray-500" />
          <ClientImage src="/images/isaclin.png" className="gray-scale" />
          <ClientImage
            src="/images/azevedo-advogados.png"
            className="gray-scale"
          />
          <ClientImage src="/images/becker-pack.png" className="gray-scale" />
          <ClientImage src="/images/wizard.png" className="gray-scale" />
          <ClientImage src="/images/vidal-falcao.png" className="gray-300" />
          <ClientImage
            src="/images/cuento-coworking.png"
            className="gray-scale"
          />
          <ClientImage src="/images/jj.png" className="gray-scale" />
        </Grid>
      </ContentSection>
      <Box backgroundColor="white" paddingX={Utils.defaultPaddingX}>
        <Divider />
      </Box>
      <ContentSection
        alignment="center"
        backgroundColor="white"
        color="black"
        direction="column"
      >
        <Heading marginBottom={[8, 12]} fontSize={['6xl', '4xl']}>
          O que nossos clientes falam sobre nós?
        </Heading>
        <Box borderRadius="lg" textAlign="center" alignItems="center">
          <TestimonialBox
            testimonialAuthor="Marilene Brusco"
            testimonialCompany="Azevedo Advogados"
            testimonialText="Profissionais competentes e Confiáveis, ótimo atendimento aos clientes"
          />
          <Box height={8} />
          <TestimonialBox
            testimonialAuthor="Lúcia Rockembach"
            testimonialCompany="Vidal Falcão Advocacia Empresarial"
            testimonialText="Sinônimo de confiança, presteza, muita discrição no ambiente de trabalho e o atendimento personalizado"
            alignment="right"
          />
          <Box height={8} />
          <TestimonialBox
            testimonialAuthor="Yamara Eichner"
            testimonialCompany="Naturoils"
            testimonialText="Atendimento personalizado, suporte rápido e eficiente, discrição e confiabilidade em projetos customizados"
          />
        </Box>
      </ContentSection>
    </Flex>
  )
}
