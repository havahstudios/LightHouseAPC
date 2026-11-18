import { requireAdmin } from "@/lib/auth";
import { getPageSections } from "@/lib/cms/pageSections";
import { aboutDefaults } from "@/lib/content/about";
import AboutForm from "./AboutForm";

export default async function AdminAboutPage() {
  await requireAdmin();
  const current = await getPageSections("about", aboutDefaults);

  return (
    <>
      <h1 className="text-3xl font-light md:text-4xl">About Page</h1>
      <p className="mt-2 mb-8 max-w-2xl text-stone">
        Change any heading or paragraph, then click Save. Empty boxes go back to the original text.
      </p>
      <AboutForm sections={aboutDefaults.map((d) => current[d.key])} />
    </>
  );
}
