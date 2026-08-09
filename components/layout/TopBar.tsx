import { Container } from "@/components/ui/Container";

type TopBarProps = {
  label?: string;
};

export function TopBar({
  label = "Zoho Authorized Partner · India & GCC",
}: TopBarProps) {
  return (
    <div className="border-b border-primary/15 bg-primary text-white">
      <Container className="flex h-8 items-center justify-center gap-2">
        <span
          className="hidden h-1.5 w-1.5 rounded-full bg-white/80 sm:block"
          aria-hidden="true"
        />
        <p className="text-[11px] font-medium tracking-[0.06em] text-white/95">
          {label}
        </p>
      </Container>
    </div>
  );
}
