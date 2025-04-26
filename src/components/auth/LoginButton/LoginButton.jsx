import { signIn } from '@/auth'

export default function LoginButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google',  { redirectTo: "/admin" })
      }}
    >
      <button type="submit" className='button-link-router'>Se connecter</button>
    </form>
  )
}