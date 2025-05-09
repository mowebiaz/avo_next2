import { LinkAria } from '@/src/components/LinkAria/LinkAria'

export function MentionsContent() {
  return (
    <div>
      <h2>Editeur du site</h2>
      <p>Nom: Morgane Couvet</p>
      <p>Adresse: Pas du Lac - 74110 Avoriaz</p>
      <p>Téléphone: 04 56 24 62 84</p>
      <p>Email: morgane.couvet@gmail.com</p>
      <p>Responsable de la publication: Morgane Couvet</p>
      <h2>Hébergeur du site</h2>
      <p>Nom : Vercel Inc.</p>
      <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
      <p>
        Site web : 
        <LinkAria
          className="link"
          href={'https://vercel.com/'}
          target="_blank"
          referrerPolicy="no-opener no-referrer"
        >
          https://vercel.com
        </LinkAria>
      </p>

      <h2>Conception & réalisation</h2>
      <p>
        Site réalisé par{' '}
        <LinkAria
          className="link"
          href={'https://morganeweb.com/'}
          target="_blank"
          referrerPolicy="no-opener no-referrer"
        >
          MorganeWeb
        </LinkAria>
        - développeuse web freelance
      </p>

      <h2>Crédits photo</h2>
      <p>Dominique Couvet, Morgane Couvet</p>
    </div>
  )
}
