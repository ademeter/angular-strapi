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
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy } from './articleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import { ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent } from './articleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent';


export interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataInnerAttributesRoleDataAttributesUsersDataInnerAttributes { 
    username?: string;
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
    updatedBy?: ArticleListResponseDataItemAttributesHeroimageDataAttributesFolderDataAttributesParent;
}
