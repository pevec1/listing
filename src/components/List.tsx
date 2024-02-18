export interface List {
    listing_id: number;
    url: string;
    MainImage: { url_570xN?: string | undefined};
    title: string | undefined;
    currency_code: string;
    price: string;
    quantity: number;
}
