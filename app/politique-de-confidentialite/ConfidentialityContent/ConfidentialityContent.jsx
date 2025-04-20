import { LinkAria } from '@/src/components/LinkAria/LinkAria'
import { CookieSettingsButton } from '../../../src/components/CookieSettingsButton/CookieSettingsButton'
import './ConfidentialityContent.scss'

export function ConfidentialityContent() {
  return (
    <>
      <p className="last-update">Dernière mise à jour : 20/04/2025</p>
      <p>
        Bienvenue sur avoriazloc.fr (ci‑après « le Site »). La protection de vos
        données personnelles est une priorité pour nous. Cette politique de
        confidentialité vous informe sur les traitements de données que nous
        mettons en œuvre et sur vos droits.
      </p>

      <h2>Données collectées</h2>

      <h3>Données fournies volontairement</h3>
      <p>
        Lorsque vous remplissez notre formulaire de contact, nous collectons les
        informations suivantes :
      </p>
      <ul>
        <li>Nom</li>
        <li>Email</li>
        <li>Message</li>
      </ul>
      <p>
        Ces données sont utilisées uniquement pour répondre à votre demande et
        ne sont pas partagées avec des tiers.
      </p>

      <h3>Données collectées automatiquement</h3>
      <p>
        Nous utilisons Google Analytics pour collecter des données anonymisées
        sur votre navigation :
      </p>
      <ul>
        <li>Pages visitées</li>
        <li>Durée de la visite</li>
        <li>Type d&apos;appareil et navigateur</li>
        <li>Pays d&apos;origine de la connexion</li>
      </ul>
      <p>
        Ces données sont anonymisées et nous aident à améliorer l’expérience
        utilisateur.
      </p>

      <h2>Cookies et gestion des cookies</h2>
      <p>
        Les cookies sont des petits fichiers stockés sur votre appareil lors de
        votre navigation. Nous utilisons différents types de cookies :
      </p>
      <ul>
        <li>
          <strong>Essentiels</strong> : indispensables au fonctionnement
          technique du Site (par exemple : session, sécurité, enregistrement de
          votre consentement).
        </li>
        <li>
          <strong>Statistiques</strong> : pour mesurer l’audience et analyser
          votre parcours (Google Analytics).
        </li>
        <li>
          <strong>Marketing / Tiers</strong> : pour intégrer des services
          externes tels que Google Maps.
        </li>
      </ul>
      <p>Vous pouvez gérer vos préférences à tout moment :</p>
      <ul>
        <li>
          À l’aide de la bannière de consentement affichée lors de votre
          première visite.
        </li>
        <li>En cliquant sur le bouton ci‑dessous pour modifier vos choix :</li>
      </ul>
      <CookieSettingsButton />
      <p>
        Note : Si vous refusez les cookies, certaines fonctionnalités du Site
        (comme l’affichage de la carte) pourraient être limitées.
      </p>

      <h2>Google Analytics</h2>
      <p>Nous utilisons Google Analytics pour analyser l’audience du Site.</p>
      <ul>
        <li>Données collectées : anonymisées via cookies.</li>
        <li>Hébergement des données : serveurs sécurisés aux États-Unis.</li>
        <li>Google ne partage pas ces données avec des tiers.</li>
      </ul>

      <h2>Plugins et contenus tiers </h2>
      <h3>Google Maps</h3>
      <p>
        Pour vous aider à localiser notre studio à Avoriaz, nous intégrons une
        carte Google Maps. Ce service est fourni et hébergé par Google Ireland
        Limited (Gordon House, Barrow Street, Dublin 4, Irlande). Lorsque vous
        consultez une page contenant la carte :
      </p>
      <ul>
        <li>Votre adresse IP, vos coordonnées de localisation approximatives et d’autres données techniques (type de navigateur, données de navigation) sont transmises à Google Ireland Limited.

</li>
      <li>Ces données sont utilisées pour faire fonctionner la carte, améliorer ses performances et proposer des services de géolocalisation.</li>
      </ul>
      <p>Pour en savoir plus sur la collecte et l’utilisation de vos données par Google :
      <LinkAria
        className="link"
        href="https://policies.google.com/privacy?hl=fr"
      >
        https://policies.google.com/privacy
      </LinkAria>
      </p>

      <h2>Protection des données</h2>
      <p>
      Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, divulgation ou altération.
      </p>
      <ul>
        <li>Aucune donnée personnelle n’est vendue ou partagée à des tiers.</li>
        <li>
        L’accès aux données est limité aux seules personnes habilitées.
        </li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous avez les droits suivants sur vos données :
      </p>
      <ul>
        <li>
        Droit d’accès : obtenir la liste des données vous concernant.
        </li>
        <li>
        Droit de rectification : corriger vos informations.
        </li>
        <li>
        Droit à l’effacement : demander la suppression de vos données.
        </li>
        <li>
        Droit d’opposition : vous opposer à un traitement spécifique.
        </li>
      </ul>
      <p>
        Vous pouvez exercer ces droits en nous contactant à l’adresse suivante:
        contact@morganeweb.com
      </p>

      <h2>Modifications de la politique de confidentialité</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique à tout moment.
        Toute modification sera publiée sur cette page avec une nouvelle date de
        mise à jour.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question concernant cette politique de confidentialité, vous
        pouvez nous contacter à : contact@morganeweb.com
      </p>
    </>
  )
}
