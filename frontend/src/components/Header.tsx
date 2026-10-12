import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 glass border-b border-border/60">
      <Container>
        <div className="flex items-center justify-between py-3.5">
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <img
              src="/favicon.svg"
              alt="ZMAIL"
              className="w-8 h-8 shrink-0"
            />
            <span className="gradient-text text-xl font-extrabold tracking-tight">
              {t('app.shortTitle')}
            </span>
          </Link>

          <div className="flex items-center rounded-full bg-muted/70 px-1.5 py-1.5 shadow-apple-sm">
            <ThemeSwitcher />
            <a
              href="https://github.com/wekh/zmail"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-primary/15 hover:text-primary"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="fab fa-github text-base"></i>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;