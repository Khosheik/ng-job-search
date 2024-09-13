export interface Job {
    companyLogo: string, 
    companyName: string, 
    id: number, 
    reference: string, 
    title: string,
    location?: string,
    industries?: string[], 
    types?: string[], 
    description?: string, 
    publishDate?: Date,
    isFavorite?: boolean,
}