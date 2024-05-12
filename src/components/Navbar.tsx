"use client";

import Wordmark from "@/components/Wordmark";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

export default function Navbar({ settings }: NavbarProps) {
  return (
    <nav className="px-4 py-4 md:px-6 md:py-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <Wordmark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
        <ul className="flex gap-6">

        {/* Apply ButtonLink component to the link if item has cta_button field  set to true */}
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  className="inline-flex min-h-11 items-center"
                  field={item.link}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
