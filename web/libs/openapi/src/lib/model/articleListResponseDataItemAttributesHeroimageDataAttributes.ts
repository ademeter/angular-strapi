/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesRelated } from './articleListResponseDataItemAttributesHeroimageDataAttributesRelated';
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesFolder } from './articleListResponseDataItemAttributesHeroimageDataAttributesFolder';
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent } from './articleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent';


export interface ArticleListResponseDataItemAttributesHeroimageDataAttributes { 
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any | null;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any | null;
    related?: ArticleListResponseDataItemAttributesHeroimageDataAttributesRelated;
    folder?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolder;
    folderPath?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
    updatedBy?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
}

