type AnimeTypeProps = {
    images: any;
    mal_id: number;
    title: string;
    score: number;
    synopsis: string;
    genres: {
        name: string;
    }[];
    type:string
}

export default defineEventHandler(async (event) => {
    const { q } = getQuery(event);
    const query = getQuery(event)
    const page = query.page || 1
   

    if (!q) {
        return [];
    }


    const url = `https://api.jikan.moe/v4/anime?q=${q}&page=${page}`



    const response: any = await $fetch(url);
    return response.data.map((item: AnimeTypeProps) => ({
        id: item.mal_id,    
        title: item.title,
        score: item.score,  
        imageUrl: item.images.webp.large_image_url,
        description:item.synopsis,
        genres:item.genres.map((genre: { name: string }) => genre.name),
        type:item.type
    }));

}
)