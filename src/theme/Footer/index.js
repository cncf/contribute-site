import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'X',
      href: 'https://x.com/cloudnativefdn',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          aria-label="X"
        >
          <path
            fill="currentColor"
            d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/cncf',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 0.21 24.7 24.14">
          <path
            fill="currentcolor"
            d="M24.188 12.63A11.893 11.893.0 003.887 4.221 11.893 11.893.0 002.615 19.538a11.899 11.899.0 005.81 4.34 1.14 1.14.0 00.612-.885c0-.654-.014-2.337-.014-2.337-.415.061-.834.09-1.253.088a2.692 2.692.0 01-2.722-1.837 3.22 3.22.0 00-1.336-1.585c-.308-.198-.379-.431-.023-.498 1.643-.308 2.064 1.853 3.16 2.198.76.236 1.58.17 2.293-.183.1-.614.44-1.165.943-1.531-2.791-.267-4.446-1.232-5.304-2.781l-.092-.174-.216-.492-.064-.176a8.34 8.34.0 01-.386-2.694A4.596 4.596.0 015.334 7.58a4.765 4.765.0 01.207-3.43s1.208-.248 3.492 1.378c1.237-.528 4.538-.571 6.1-.117.957-.63 2.71-1.524 3.417-1.274.193.307.604 1.2.25 3.164a5.523 5.523.0 011.493 3.942 10.198 10.198.0 01-.305 2.444l-.103.349s-.06.165-.123.322l-.075.173c-.828 1.809-2.527 2.484-5.274 2.766.89.557 1.144 1.256 1.144 3.146s-.025 2.144-.02 2.578a1.199 1.199.0 00.59.87 11.9 11.9.0 008.06-11.26z"
          ></path>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/cloud-native-computing-foundation/',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-10.23 -10.23 531.96 531.96"
        >
          <rect fill="currentcolor" width="512" height="512" rx="3%"></rect>
          <circle fill="#000" cx="142" cy="138" r="37"></circle>
          <path
            stroke="#000"
            stroke-width="66"
            d="M244 194v198M142 194v198"
          ></path>
          <path
            fill="#000"
            d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"
          ></path>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/c/cloudnativefdn',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.21 0.27 34.45 25.07">
          <path
            fill="currentcolor"
            d="M33.729 6.084s-.327-2.33-1.317-3.356a4.691 4.691.0 00-3.32-1.432c-4.634-.34-11.589-.34-11.589-.34h-.014s-6.954.0-11.59.342A4.692 4.692.0 002.579 2.73c-.993 1.025-1.315 3.354-1.315 3.354a52.189 52.189.0 00-.331 5.473v2.566c.014 1.829.125 3.656.331 5.472.0.0.322 2.33 1.316 3.36 1.26 1.345 2.916 1.3 3.653 1.445 2.65.26 11.263.34 11.263.34s6.96-.01 11.597-.353a4.691 4.691.0 003.32-1.432c.993-1.026 1.316-3.356 1.316-3.356.206-1.817.316-3.644.33-5.473v-2.57a52.26 52.26.0 00-.33-5.472zM14.076 17.232V7.729l8.951 4.768-8.95 4.735z"
          ></path>
        </svg>
      ),
    },
    {
      name: 'Flickr',
      href: 'https://www.flickr.com/photos/143247548@N03/albums',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.35 0.34 27.82 13.45"
        >
          <path
            fill="currentcolor"
            fill-rule="evenodd"
            d="M12.599 7.083a6.181 6.181.0 11-12.363.0 6.181 6.181.0 0112.363.0zm14.376.0a6.18 6.18.0 11-12.362.0 6.18 6.18.0 0112.362.0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: 'Slack',
      href: 'https://slack.cncf.io/',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0.16 -0.03 21.19 21.19"
        >
          <path
            fill="currentcolor"
            d="M4.896 13.27a2.147 2.147.0 01-2.141 2.142A2.147 2.147.0 01.613 13.27c0-1.178.963-2.141 2.142-2.141h2.141v2.141zm1.08.0c0-1.178.962-2.141 2.141-2.141s2.142.963 2.142 2.141v5.363a2.147 2.147.0 01-2.142 2.141 2.147 2.147.0 01-2.141-2.142V13.27zm2.141-8.6A2.147 2.147.0 015.976 2.53c0-1.18.962-2.142 2.141-2.142s2.142.963 2.142 2.141v2.142H8.117zm0 1.08c1.179.0 2.141.962 2.141 2.141a2.147 2.147.0 01-2.141 2.142H2.755A2.147 2.147.0 01.613 7.89c0-1.179.963-2.141 2.142-2.141h5.362zm8.599 2.141c0-1.179.963-2.141 2.141-2.141 1.179.0 2.143.962 2.143 2.14a2.147 2.147.0 01-2.142 2.142h-2.141V7.89zm-1.08.0a2.147 2.147.0 01-2.141 2.142 2.147 2.147.0 01-2.141-2.142V2.53c0-1.178.962-2.141 2.141-2.141s2.142.963 2.142 2.141v5.362zm-2.141 8.6c1.179.0 2.142.962 2.142 2.14a2.147 2.147.0 01-2.142 2.142 2.147 2.147.0 01-2.141-2.141V16.49h2.141zm0-1.08a2.147 2.147.0 01-2.141-2.141c0-1.179.962-2.142 2.141-2.142h5.362c1.179.0 2.142.963 2.142 2.142a2.147 2.147.0 01-2.142 2.142h-5.362z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.left}>
          <a
            href="https://www.cncf.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={useBaseUrl('/img/cncf_logo_white.svg')}
              alt="CNCF Logo"
              className={styles.logo}
            />
          </a>
          <Link className={styles.button} to="https://www.cncf.io/all-cncf/">
            All CNCF Sites
          </Link>
        </div>
        <div className={styles.socialIcons}>
          {socialLinks.map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              className={styles.iconLink}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottomRow}>
        © {currentYear} Cloud Native Computing Foundation | Documentation
        Distributed under CC BY 4.0
      </div>
    </footer>
  );
}
