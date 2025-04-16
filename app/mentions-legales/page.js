import { MentionsContent } from "./MentionsContent/MentionsContent"

export const metadata = {
  title: "Mentions légales",
  alternates: {
    canonical: 'https://avoriazloc.fr/mentions-legales',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegales() {
  return (
    <main className="mentions">
      <h1>Mentions Légales</h1>
      <MentionsContent />
    </main>
  )
}