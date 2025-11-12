import { Logo, LogoText } from '@/components/logo';
import SVGComponent from './Svg';

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: '',
    alt: '',
    title: 'Flowhaul',
    url: '',
  },
  tagline = 'A place that carries your creative flow',
  menuItems = [
    {
      title: 'Product',
      links: [
        { text: 'Overview', url: '#' },
        { text: 'Pricing', url: '#' },
        { text: 'Marketplace', url: '#' },
        { text: 'Features', url: '#' },
        { text: 'Integrations', url: '#' },
        { text: 'Pricing', url: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', url: '#' },
        { text: 'Team', url: '#' },
        { text: 'Blog', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Contact', url: '#' },
        { text: 'Privacy', url: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help', url: '#' },
        { text: 'Sales', url: '#' },
        { text: 'Advertise', url: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
        { text: 'Twitter', url: '#' },
        { text: 'Instagram', url: '#' },
        { text: 'LinkedIn', url: '#' },
      ],
    },
  ],
  copyright = '© 2025 Flowhaul. All rights reserved.',
  bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
  ],
}: FooterProps) => {
  return (
    <section className='py-22 overflow-x-hidden'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <footer>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-6'>
            <div className='col-span-1 sm:col-span-2 mb-8 lg:mb-0'>
              <div className='flex items-center gap-2'>
                <Logo url=''>
                  <SVGComponent className='h-10 w-10 dark:invert' />
                  <LogoText className='text-xl'>{logo.title}</LogoText>
                </Logo>
              </div>
              <p className='mt-4 font-bold wrap-break-word'>{tagline}</p>
            </div>

            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className='mb-4 font-bold'>{section.title}</h3>
                <ul className='text-muted-foreground space-y-4'>
                  {section.links.map((link, i) => (
                    <li key={i} className='hover:text-primary font-medium'>
                      <a
                        href={link.url}
                        className='wrap-break-word inline-block max-w-full'
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center'>
            <p className='wrap-break-word'>{copyright}</p>
            <ul className='flex flex-wrap gap-4'>
              {bottomLinks.map((link, i) => (
                <li key={i} className='hover:text-primary underline'>
                  <a href={link.url} className='wrap-break-word'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
