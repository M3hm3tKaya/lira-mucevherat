import { notFound } from "next/navigation";
import { collections, getCollectionBySlug } from "@/data/collections";
import CollectionDetailClient from "./CollectionDetailClient";

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Koleksiyon Bulunamadi" };
  return {
    title: `${collection.name} | Lira Mucevherat`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return <CollectionDetailClient collection={collection} />;
}
