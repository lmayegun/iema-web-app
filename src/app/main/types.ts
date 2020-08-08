export enum Topic {
    News = 'news',
    Management = 'management',
    ImpactAssesment = 'impact-assesment',
    Sustainability = 'sustainability',
    KnowledgeCentre = 'knowledge-centre',
    ClimateChange = 'climate-change',
    Energy = 'energy',
    BusinessIndustry = 'business-industry',
    NaturalResources = 'natural-resources',
    PoliticsEconomics = 'politics-economy',
    PollutionWasteManagement = 'pollution-waste-management',
    ArticleType = 'article-type'
}

export interface ArticleFilter{
    topic: Topic;
    tag?: string;
    reducer: string; 
}

export const GET_ARTICLES = '[ARTICLES] GET_ARTICLES';

interface GetArticles {
    type: typeof GET_ARTICLES;
    payload: ArticleFilter
}

export type ArticleActionTypes = GetArticles;