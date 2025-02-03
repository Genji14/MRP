import { GetStaticPropsContext } from 'next'

export default function Home() {
  return (
    <>
      <div>This is home page</div>
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../shared/messages/${locale}.json`)).default,
    },
  }
}
