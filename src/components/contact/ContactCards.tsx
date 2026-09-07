import { Mail, MapPin, Phone } from "lucide-react";
import {
  company,
  emailHref,
  hasEmail,
  hasPhone,
  hasSecondaryPhone,
  phoneHref,
  phoneSecondaryHref,
} from "@/data/company";
import { getGoogleMapsUrl } from "@/lib/maps";

type ContactCardProps = {
  title: string;
  body: React.ReactNode;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
};

function Card({ title, body, href, icon: Icon }: ContactCardProps) {
  const inner = (
    <>
      <span className="grid size-10 place-items-center rounded-md bg-secondary text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-foreground">{title}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
          {body}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/30"
        {...(href.startsWith("http") ? { rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex gap-4 rounded-lg border border-border bg-surface p-5">
      {inner}
    </div>
  );
}

export function ContactCards() {
  return (
    <div className="grid gap-4">
      {hasPhone() ? (
        <Card icon={Phone} title="Phone" href={phoneHref()} body={company.phoneDisplay} />
      ) : null}
      {hasSecondaryPhone() ? (
        <Card
          icon={Phone}
          title="Alternate phone"
          href={phoneSecondaryHref()}
          body={company.phoneSecondaryDisplay}
        />
      ) : null}
      {hasEmail() ? (
        <Card icon={Mail} title="Email" href={emailHref()} body={company.email} />
      ) : null}
      <Card
        icon={MapPin}
        title="Address"
        href={getGoogleMapsUrl()}
        body={
          <>
            <span className="block">{company.addressLine1}</span>
            <span className="block">{company.addressLine2}</span>
            <span className="block">{company.addressLine3}</span>
            <span className="block">
              {company.city}, {company.state} {company.postalCode}
            </span>
            <span className="block">{company.country}</span>
          </>
        }
      />
    </div>
  );
}
