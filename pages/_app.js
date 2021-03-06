import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { DefaultSeo } from 'next-seo'

import { AuthProvider } from '@/context/auth'
import Layout from '@/components/layout'

import 'tailwindcss/tailwind.css'
import { defaultSeo } from 'next-seo.config'

function App({ Component, pageProps }) {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <AuthProvider>
      <Elements stripe={stripePromise}>
        <DefaultSeo {...defaultSeo} />
        <div className="bg-gray-200 min-h-screen">
          {getLayout(<Component {...pageProps} />)}
        </div>
      </Elements>
    </AuthProvider>
  )
}

export default App
