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
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesFiles } from './articleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesFiles';
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent } from './articleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent';


export interface ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributes { 
    name?: string;
    pathId?: number;
    parent?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
    children?: ArticleListResponseDataItemAttributesHeroimageDataAttributesRelated;
    files?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesFiles;
    path?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
    updatedBy?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
}

