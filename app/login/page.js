import { UserMessage } from '@/src/components/UserMessage/UserMessage'
import { IoAlertOutline } from 'react-icons/io5'
import LoginButton from '../../src/components/auth/LoginButton/LoginButton'

export default function Login() {
  return (
    <main>
      <h1>Connexion</h1>
      <UserMessage className={'message-alert'}>
        <div className="message-alert-icon">
          <IoAlertOutline />
        </div>
        <p>Cette page est privée. Seul l&apos;administrateur peut y accéder.</p>
      </UserMessage>
      <LoginButton />
    </main>
  )
}
