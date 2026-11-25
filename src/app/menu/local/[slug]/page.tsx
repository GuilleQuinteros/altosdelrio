import { MenuExperience } from "@/components/MenuExperience";
export default async function LocalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <MenuExperience slug={slug} />;
}
