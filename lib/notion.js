import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getPortfolio() {
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
}

export async function getReviews() {
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
}
