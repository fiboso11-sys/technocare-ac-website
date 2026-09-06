import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company, hasGoogleReviewsUrl } from "@/data/company";

export function GoogleRating() {
  if (!company.showGoogleRating) return null;

  return (
    <aside className="rounded-lg border border-border bg-surface p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
        Google Business
      </p>
      <p className="mt-3 text-lg font-semibold">Google reviews</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Google listing observed during website preparation: {company.googleRating}{" "}
        stars from {company.googleReviewCount} reviews. Ratings change over time
        and are not a guarantee of any particular job.
      </p>
      <div className="mt-4 flex items-center gap-2 text-warning" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>
      {hasGoogleReviewsUrl() ? (
        <div className="mt-5">
          <Button href={company.googleReviewsUrl} variant="secondary" external>
            View Google reviews
          </Button>
        </div>
      ) : null}
    </aside>
  );
}
