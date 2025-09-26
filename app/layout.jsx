'use client'
import { UserProvider } from '@/Context/userContext'
import './globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import axios from 'axios'
import { CategoryProvider } from '@/Context/categoryContext'
import CartContextProvider from '@/Context/cartContext'

export default function RootLayout ({ children }) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = token
        ? `Bearer ${token}`
        : ''
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.baseURL = 'http://localhost:4000/'
    }
  }, [])

  return (
    <UserProvider>
      <CartContextProvider>
        <CategoryProvider>
          <html lang='ar'>
            <head>
              <meta
                name='description'
                content='An E-commerce for mobiles and electronics'
              />
              <link rel='icon' href='/favicon.ico' />
            </head>
            <body>
              <Toaster
                toastOptions={{
                  success: {
                    style: { background: 'white' },
                    iconTheme: { primary: 'green' }
                  },
                  error: { style: { background: 'red' } }
                }}
              />
              <Navbar />
              {children}
              <Footer />
            </body>
          </html>
        </CategoryProvider>
      </CartContextProvider>
    </UserProvider>
  )
}
