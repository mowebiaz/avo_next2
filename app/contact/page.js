import { ContactForm } from './ContactForm/ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    "Besoin d'informations sur notre studio à louer à Avoriaz ? Remplissez notre formulaire de contact et nous vous répondrons rapidement.",
  alternates: {
    canonical: 'https://avoriazloc.fr/contact',
  },
}

export default function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <ContactForm />
    </main>
  )
}
