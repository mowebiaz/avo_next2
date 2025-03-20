import { UserMessage } from '@/src/components/UserMessage/UserMessage'
import { IoAlertOutline, IoClose } from 'react-icons/io5'

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
    </main>
  )
}
