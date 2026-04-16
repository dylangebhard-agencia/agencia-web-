import { Client } from "@notionhq/client";

const notion = process.env.NOTION_TOKEN
  ? new Client({ auth: process.env.NOTION_TOKEN })
  : null;

export async function getPortfolio() {
  if (!notion || !process.env.NOTION_PORTFOLIO_DB) return [];

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PORTFOLIO_DB,
      filter: {
        property: "Visible",
        checkbox: { equals: true },
      },
      sorts: [
        {
          property: "Fecha",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        titulo: props.Titulo?.title?.[0]?.plain_text ?? "",
        tipo: props.Tipo?.select?.name ?? "",
        cliente: props.Cliente?.rich_text?.[0]?.plain_text ?? "",
        descripcion: props.Descripcion?.rich_text?.[0]?.plain_text ?? "",
        thumbnailUrl: props.ThumbnailUrl?.url ?? "",
        videoUrl: props.VideoUrl?.url ?? "",
        fecha: props.Fecha?.date?.start ?? "",
      };
    });
  } catch (err) {
    console.warn("Notion portfolio fetch failed:", err.message);
    return [];
  }
}

export async function getReviews() {
  if (!notion || !process.env.NOTION_REVIEWS_DB) return [];

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_REVIEWS_DB,
      filter: {
        property: "Activa",
        checkbox: { equals: true },
      },
    });

    return response.results.map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        nombre: props.Nombre?.title?.[0]?.plain_text ?? "",
        cargo: props.Cargo?.rich_text?.[0]?.plain_text ?? "",
        clinica: props.Clinica?.rich_text?.[0]?.plain_text ?? "",
        texto: props.Texto?.rich_text?.[0]?.plain_text ?? "",
        estrellas: props.Estrellas?.number ?? 0,
        avatarUrl: props.AvatarUrl?.url ?? "",
      };
    });
  } catch (err) {
    console.warn("Notion reviews fetch failed:", err.message);
    return [];
  }
}
