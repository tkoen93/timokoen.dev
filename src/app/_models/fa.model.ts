import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export class FaModel {
    icon: any;
    url: string;
}

export const faIcons: FaModel[] = [
    { icon: faGithub, url: 'https://github.com/tkoen93' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/timokoen/' }
  ];