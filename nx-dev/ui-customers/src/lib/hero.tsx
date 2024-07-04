import Link from 'next/link';
import { SectionHeading } from './section-tags';
import { ButtonLink } from '@nx/nx-dev/ui-common';

export function Hero(): JSX.Element {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            as="p"
            variant="subtitle"
            className="mx-auto max-w-3xl text-slate-950 dark:text-white"
          >
            We empower our clients to
          </SectionHeading>
          <SectionHeading
            as="h1"
            variant="display"
            className="pt-4 text-3xl sm:text-6xl"
          >
            Build Smarter & Ship Faster
          </SectionHeading>

          <div className="mt-16 flex items-center justify-center gap-x-6">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="large"
              title="Join us"
            >
              Reach out
            </ButtonLink>

            <Link
              href="https://staging.nx.app/orgs/62d013d4d26f260059f7765e/workspaces/62d013ea0852fe0a2df74438/overview"
              className="group text-sm font-semibold leading-6 text-slate-950 dark:text-white"
            >
              Live demo{' '}
              <span
                aria-hidden="true"
                className="inline-block transition group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
