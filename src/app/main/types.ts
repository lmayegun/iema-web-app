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
    category?: string;
    summary?: string;
    body: string;
    author?: string;
    centerThumbImg?: string;
}

export interface HomepageState {
    articles: Article[]
}

export interface ArticleFilter{
    topic?: string | Topic;
    reducer?: string;
    tag?: string;
    id?: string; 
}

export interface SearchFilter{
    searchText: string;
    sortBy?: string;
}

export const articleActionsId = {
    GET_ARTICLES : '[ARTICLES] GET_ARTICLES',
    GET_HOMEPAGE_ARTICLES : '[HOMEPAGE] GET_ARTICLES',
    GET_TOPICS_TOP_REGION : '[TOPICS] TOP_REGION',
    GET_TOPICS_SECOND_REGION : '[TOPICS] SECOND_REGION',
    GET_TAGS_TOP_REGION : '[TAGS] TOP_REGION',
    GET_TAGS_SECOND_REGION : '[TAGS] SECOND_REGION', 
    GET_ARTICLE : '[ARTICLE] GET_ARTICLE'
}

export const searchActionsId = {
    GET_SEARCH_ARTICLES : '[SEARCH] GET ARTICLES',
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
    MOST_POPULAR : '[HOMEPAGE] MOST POPULAR',
    MOST_POPULAR_SUCCESS : '[HOMEPAGE] MOST POPULAR SUCCESS',
    IEMA_NEWS : '[HOMEPAGE] IEMA NEWS',
    IEMA_NEWS_SUCCESS : '[HOMEPAGE] IEMA NEWS SUCCESS',
}

interface GetArticles {
    type: typeof articleActionsId.GET_ARTICLES;
    payload: ArticleFilter
}

interface GetHomepageArticles {
    type: typeof articleActionsId.GET_HOMEPAGE_ARTICLES;
    payload: ArticleFilter
}

export interface SearchFilterArticles {
    type: string;
    payload: SearchFilter
}


export type ArticleActionTypes = GetArticles | GetHomepageArticles;