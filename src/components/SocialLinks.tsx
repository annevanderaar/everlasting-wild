import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    {
        name: 'GitHub',
        icon: faGithub,
        href: 'https://github.com/annevanderaar',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/anne-van-der-aar/',
    },
];

export default function SocialLinks() {
      return (
          <>
              {socialLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg transition hover:text-[var(--color-accent)]"
                  >
                      <FontAwesomeIcon icon={link.icon} />
                  </a>
              ))}
          </>
      )
}
