import { LinkAria } from '@/src/components/LinkAria/LinkAria'
import { Gallery } from '../Gallery/Gallery'
import { slides } from '@/src/lib/data/slides'
import { TitleWithIcon } from '@/src/components/TitleWithIcon/TitleWithIcon'
import { FaHandPointRight } from 'react-icons/fa'
import './StudioContent.scss'

const equipmentsList = [
  'wifi gratuit',
  'télévision',
  'lecteur DVD',
  'cafetière',
  'plaque vitrocéramique',
  'frigo',
  'grille-pain',
  'service à raclette',
  'bouilloire',
  'sèche-cheveux',
  'aspirateur',
]

export function StudioContent() {
  return (
    <div className="studio-content">
      <h1>Studio à louer à Avoriaz - Confort et proximité des pistes</h1>
      <p>
        Notre studio à Avoriaz est parfait pour vos vacances en montagne. Situé
        au pied des pistes, il vous permet de profiter pleinement de la station.
        Que vous veniez en famille ou entre amis, ce logement tout équipé vous
        garantit confort et praticité tout au long de votre séjour.
      </p>
      <section>
        <h2>Localisation idéale à Avoriaz</h2>
        <p>
          Notre studio se situe au bas de la station et au pied des pistes, au
          sein de la résidence <strong>Pas Du Lac</strong>. Il est proche du 3S
          (téléphérique des Prodains) et des remontées mécaniques (Tour, Stade,
          Lac Intrets). Nous sommes situés dans un quartier calme (les
          Hauts-Forts), à 450m du centre et du{' '}
          <LinkAria
            className="link"
            href={'https://www.village-des-enfants.com/fr/'}
            target="_blank"
            referrerPolicy="no-opener no-referrer"
          >
            village des enfants
          </LinkAria>
          . Deux entrées sont possibles dans la résidence: au 10<sup>ème</sup>{' '}
          pour un accès à l&apos;ascenseur public et le centre station, ou au
          RdC pour un accès direct aux pistes.
        </p>

        <TitleWithIcon
          title={
            <LinkAria
              href="/acces#studio"
              className="link"
            >
              comment accéder au studio ?
            </LinkAria>
          }
          icon={<FaHandPointRight />}
        />
      </section>
      <section className="equipments">
        <h2>Un studio tout équipé pour un séjour confortable</h2>
        <p>
          C&apos;est un studio 3/4 personnes, au 3<sup>ème</sup> étage avec
          ascenseur. Il bénéficie d&apos;un <strong>balcon</strong> exposé
          Sud-Est, avec vue sur le lac d&apos;Avoriaz et les Hauts-Forts.
        </p>
        <ul className="equipments-list">
          <li>
            <strong>casier à ski</strong>
          </li>
          <li>entrée avec placards</li>
          <li>salle de bain avec baignoire et WC (nombreux rangements)</li>
          <li>cuisine équipée</li>
          <li>séjour avec 2 clic-clac</li>
        </ul>
        <ul className="equipments-badgelist">
          {equipmentsList.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
        <Gallery images={slides} />
      </section>
      <section className="pricing">
        <TitleWithIcon
          title={
            <LinkAria
              href="/location"
              className="link"
            >
              Consulter les disponibilités et tarifs du studio
            </LinkAria>
          }
          icon={<FaHandPointRight />}
        />
      </section>
    </div>
  )
}
