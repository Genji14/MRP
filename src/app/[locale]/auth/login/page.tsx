import { LoginPageContent } from '#/auth/login'

export default function LoginPage() {
  return <LoginPageContent />
}

// LoginPage.getLayout = (page: ReactElement) => page

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: (await import(`@/messages/${locale}.json`)).default,
//     },
//   }
// }
