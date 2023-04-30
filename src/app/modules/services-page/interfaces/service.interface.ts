import { IconLookupAdditionalInterface } from './icon-lookup-additional.interface';

export interface ServiceInterface {
    id: string;
    isFAIcon: boolean;
    faIconLookup: IconLookupAdditionalInterface;
    materialIconName?: string;
    ariaLabelIcon: string;
    title: string;
    description: string;
}
