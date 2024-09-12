export interface Job {
    companyLogo: string, 
    companyName: string, 
    id: number, 
    reference: string, 
    title: string,
    location?: string,
    industries?: string[], 
    type?: string[], 
    description?: string, 
    publishDate?: Date,
    isFavorite?: Boolean,
}