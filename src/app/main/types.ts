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

export interface Article{
    id: number;
    title: string;
}

export interface HomepageState {
    articles: Article[]
}

export interface ArticleFilter{
    topic: Topic;
    reducer: string;
    tag?: string; 
}

export const articleActionsId = {
    GET_ARTICLES : '[ARTICLES] GET_ARTICLES',
    GET_HOMEPAGE_ARTICLES : '[HOMEPAGE] GET_ARTICLES'
}

export const homepageReducersId = {
    NEWS_JUMBOTRON : '[HOMEPAGE] JUMBOTRON NEWS',
    NEWS_JUMBOTRON_SUCCESS : '[HOMEPAGE] JUMBOTRON NEWS SUCCESS',
    NEWS_TEASER : '[HOMEPAGE] NEWS TEASER',
    NEWS_TEASER_SUCCESS : '[HOMEPAGE] NEWS TEASER SUCCESS'
}

interface GetArticles {
    type: typeof articleActionsId.GET_ARTICLES;
    payload: ArticleFilter
}

interface GetHomepageArticles {
    type: typeof articleActionsId.GET_HOMEPAGE_ARTICLES;
    payload: ArticleFilter
}


export type ArticleActionTypes = GetArticles | GetHomepageArticles ;