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
    id: string;
    title: string;
    urlToImage: string;
    description: string;
    tags?: [];
    publishedOn?: string;
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
    NEWS_TEASER_SUCCESS : '[HOMEPAGE] NEWS TEASER SUCCESS',
    FEATURES_TEASER : '[HOMEPAGE] FEATURES TEASER',
    FEATURES_TEASER_SUCCESS : '[HOMEPAGE] FEATURES TEASER SUCCESS',
    EDITORS_PICK : '[HOMEPAGE] EDITORS PICK',
    EDITORS_PICK_SUCCESS : '[HOMEPAGE] EDITORS PICK SUCCESS',
    PROMOTED_TEASERS : '[HOMEPAGE] PROMOTED TEASERS',
    PROMOTED_TEASERS_SUCCESS : '[HOMEPAGE] PROMOTED TEASERS SUCCESS',
    KNOWLEDGE_JUMBOTRON : '[HOMEPAGE] KNOWLEDGE NEWS',
    KNOWLEDGE_JUMBOTRON_SUCCESS : '[HOMEPAGE] KNOWLEDGE NEWS SUCCESS',
    KNOWLEDGE_TEASER : '[HOMEPAGE] KNOWLEDGE TEASER',
    KNOWLEDGE_TEASER_SUCCESS : '[HOMEPAGE] KNOWLEDGE TEASER SUCCESS',
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