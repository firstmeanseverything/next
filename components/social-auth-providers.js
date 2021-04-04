import * as React from 'react'

import Alert from '@/components/alert'
import Button from '@/components/button'
import { useAuthDispatch, useAuthState } from '@/context/auth'
import { useFormReducer } from '@/hooks/form'

function SocialAuthProviders() {
  const { linkAuthProvider, unlinkAuthProvider } = useAuthDispatch()
  const { availableAuthProviders, isAuthenticating, user } = useAuthState()
  const {
    formError,
    formLoading,
    formState,
    setFormError,
    setFormLoading,
    setFormSuccess
  } = useFormReducer()

  const linkProvider = async (provider) => {
    setFormLoading()
    try {
      await linkAuthProvider(provider)
      setFormSuccess()
    } catch (error) {
      setFormError({ message: error.message })
    }
  }

  const unlinkProvider = async (id) => {
    setFormLoading()
    try {
      await unlinkAuthProvider(id)
      setFormSuccess()
    } catch (error) {
      setFormError({ message: error.message })
    }
  }

  return (
    <div className="mt-5 space-y-6">
      <div className="space-y-3 sm:flex-shrink-0 sm:flex sm:items-center sm:space-x-3 sm:space-y-0">
        {availableAuthProviders.map((social, index) => {
          const IconSVG = social.icon

          return (
            <Button
              key={index}
              onClick={
                social.connected
                  ? () => unlinkProvider(social.id)
                  : () => linkProvider(social.provider)
              }
              isDisabled={
                isAuthenticating ||
                (user?.providerData?.length <= 1 && social.connected)
              }
              isLoading={formLoading}
            >
              <IconSVG className="h-5 mr-3 w-5" />
              {social.connected
                ? `Disconnect ${social.name}`
                : `Connect ${social.name}`}
            </Button>
          )
        })}
      </div>
      {formError && (
        <Alert
          title="There was a problem connecting your social account"
          message={formState.message}
        />
      )}
    </div>
  )
}

export default SocialAuthProviders
