import Image from 'next/image'
import HomeBackground from '@/public/images/home_background.webp'
import './HomePictureContainer.scss'


export function HomePictureContainer() {
  return(
    <div className="homePictureContainer">
      <Image
        className="homePicture"
        src={HomeBackground}
        alt="Avoriaz"
        placeholder="data:image/webp;base64,UklGRjQCAABXRUJQVlA4ICgCAABwCQCdASoyABwAPpE+mkilo6KhKAwAsBIJQBAulD3y3dHn7hva9//CRS30G/i5r9A4DwaKnOIGAfhV/DUG+JsYs69WaSkArUHDqOQcTAxt33ZHOjgA/terr++tSnwaTb1bJjGrYFbuoNS2pveCqdtLBAQIxJhTVJ/67tdZBIapbo3tjaXquTP/+JfQZAJkH91xBf/lp6lnziWxKmE2mGRntdP1QsgRyqz3aUOhlPI9JN9mfEVoXmrP8/9TENWrlopLFUvl/tZLK3ZK48CPvO3BZJwmzkeWZGQ+tj2VGZ5ZiISQGdPb5BprnqYWImSJIoT49NaLMGmZVWDysgWeFr0NtH4F+Fgv8C16ajBzLQEgUovL/qWwZa9JD1aop8WYWiVph8wS8lCQ7gvbVIwjYwlTWQXW7Hlaxm627x+Okq1ROboeamsvVTpjU4L9tTyma7rpvJXcx5RZA84DX1ZmkK2drQYBlCUKXzw7mYQqjTQTudJPvoWSr4sDyny8F3ty1nWLgND3LExkKmGfYutCmgPsdGBR+8Cmt2qvHx4MWWR3eLNRC0kGqmsKfgQXNblTda0pqVPJOErZ+SRsr8sJ/GwMHtxv+X+zfTdI2cfl3+9t/nfie/csHZAvlfj/kp1jr8S6pH9RfLB/fLwF6+6yMn6p9jhjQv4lQyq9VmhRWcQEIiEPzi7IGZ8U2hIBnsSafhwCQsyiTtEuexNgxPRBlL6ZGBwt0t4hgAA="
        quality={100}
        fill
        priority={true}
        sizes="100vw"
      />
      </div>
  )
}